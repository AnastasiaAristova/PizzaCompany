from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User


class AddUserForm(UserCreationForm):
    first_name = forms.CharField(label='Name', widget=forms.TextInput(attrs={'class': 'class-for-input', 'autofocus': ''}))
    username = forms.CharField(label='Phone number', widget=forms.TextInput(attrs={'class': 'class-for-input'}))
    email = forms.EmailField(label='Email', widget=forms.EmailInput(attrs={'class': 'class-for-input'}))
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput(attrs={'class': 'class-for-input'}))
    password2 = forms.CharField(label='Repeat password', widget=forms.PasswordInput(attrs={'class': 'class-for-input'}))

    class Meta:
        model = User
        fields = ('first_name', 'username', 'email', 'password1', 'password2')


class UserDataForm(AuthenticationForm):
    username = forms.CharField(label='Phone number', widget=forms.TextInput(attrs={'class': 'class-for-input', 'autofocus': ''}))
    password = forms.CharField(label='Password', widget=forms.PasswordInput(attrs={'class': 'class-for-input'}))


class AddressData(forms.Form):
    street = forms.CharField(label='Street', widget=forms.TextInput(attrs={'class': 'class-for-input'}))
    house = forms.CharField(label='House', widget=forms.TextInput(attrs={'class': 'class-for-input'}))
    apartment = forms.IntegerField(label='Apartment', widget=forms.NumberInput(attrs={'class': 'class-for-input', 'min': 1, 'max': 10000}))
