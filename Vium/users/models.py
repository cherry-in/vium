from django.contrib.auth.forms import UserChangeForm
from .choice import *


class CustomCsUserChangeForm(UserChangeForm):
    password = None
    sex = forms.ChoiceField(choices=SEX_CHOICES, label='성별', widget=forms.Select(
        attrs={'class': 'form-control', }),)
    age = forms.CharField(label='나이', widget=forms.TextInput(
        attrs={'class': 'form-control', 'maxlength': '3', }),)
    length = forms.CharField(label='신장', widget=forms.TextInput(
        attrs={'class': 'form-control', 'maxlength': '3', }),)
    weight = forms.CharField(label='무게', widget=forms.TextInput(
        attrs={'class': 'form-control', 'maxlength': '4', }),)

    class Meta:
        model = User()
        fields = ['sex', 'age', 'length', 'weight']
