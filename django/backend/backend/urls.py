from django.contrib import admin
from django.urls import path
from api.views import NewsletterSignupView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/newsletter/signup/', NewsletterSignupView.as_view(), name='newsletter_signup'),
]
