from django.utils import timezone
from datetime import timedelta
from rest_framework import serializers
from .models import NewsletterSubscriber

class NewsletterSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSubscriber
        fields = ['email']

    def validate_email(self, value):
        if NewsletterSubscriber.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError("You're already subscribed.")
        return value

    def create(self, validated_data):
        request = self.context.get('request')
        ip_address = self._get_client_ip(request)

        now = timezone.now()
        two_hours_ago = now - timedelta(hours=2)
        five_days_ago = now - timedelta(days=5)

        recent_2hr_signups = NewsletterSubscriber.objects.filter(
            ip_address=ip_address,
            created_at__gte=two_hours_ago
        ).count()

        recent_5d_signups = NewsletterSubscriber.objects.filter(
            ip_address=ip_address,
            created_at__gte=five_days_ago
        ).count()

        if recent_2hr_signups >= 5:
            raise serializers.ValidationError("Too many signups from this IP in the last 2 hours.")
        if recent_5d_signups >= 10:
            raise serializers.ValidationError("Too many signups from this IP in the last 5 days.")

        subscriber = NewsletterSubscriber.objects.create(
            **validated_data,
            ip_address=ip_address
        )
        return subscriber

    def _get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            return x_forwarded_for.split(',')[0].strip()
        return request.META.get('REMOTE_ADDR')
