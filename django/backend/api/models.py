from django.db import models
from django.utils import timezone


class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class NewsletterSubscriberManager(models.Manager):
    def create_sub(self, **kwargs):
        return self.create(**kwargs)



class NewsletterSubscriber(TimeStampedModel):  # Inherits created_at, updated_at
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)

    objects = NewsletterSubscriberManager()

    class Meta:
        ordering = ['-subscribed_at']
        verbose_name = "Newsletter Subscriber"
        verbose_name_plural = "Newsletter Subscribers"
        indexes = [
            models.Index(fields=['ip_address', 'subscribed_at']),
        ]

    def __str__(self):
        return self.email
