from django.contrib.auth.models import User
from rest_framework import serializers

from django.forms import forms

class AccountCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password1', 'password2', 'nickname', 'phonenum']
