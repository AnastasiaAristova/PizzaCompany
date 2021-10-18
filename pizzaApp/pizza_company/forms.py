from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User


class AddUserForm(UserCreationForm):
    first_name = forms.CharField(label='Name', widget=forms.TextInput(attrs={'class': 'class-for-input'}))
    username = forms.CharField(label='Phone number', widget=forms.TextInput(attrs={'class': 'class-for-input'}))
    email = forms.EmailField(label='Email', widget=forms.EmailInput(attrs={'class': 'class-for-input'}))
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput(attrs={'class': 'class-for-input'}))
    password2 = forms.CharField(label='Repeat password', widget=forms.PasswordInput(attrs={'class': 'class-for-input'}))

    class Meta:
        model = User
        fields = ('first_name', 'username', 'email', 'password1', 'password2')

    # def clean(self):
    #     if self.cleaned_data['password1'] != self.cleaned_data['password2']:
    #         raise forms.ValidationError("Wrong password!")


class UserDataForm(AuthenticationForm):
    username = forms.CharField(label='Phone number', widget=forms.TextInput(attrs={'class': 'class-for-input'}))
    password = forms.CharField(label='Password', widget=forms.PasswordInput(attrs={'class': 'class-for-input'}))



    # def clean(self):
    #     try:
    #         user = User.objects.get(name=self.cleaned_data['name'], phone_number=self.cleaned_data['phone_number'])
    #         if user.password != self.cleaned_data['password']:
    #             raise forms.ValidationError("Wrong password!")
    #         return self.cleaned_data
    #     except User.DoesNotExist:
    #         raise forms.ValidationError("User doesn't exist!")


class AddressData(forms.Form):
    street = forms.CharField(label='Street', widget=forms.TextInput(attrs={'class': 'class-for-input'}))
    house = forms.CharField(label='House', widget=forms.TextInput(attrs={'class': 'class-for-input'}))
    apartment = forms.IntegerField(label='Apartment', widget=forms.TextInput(attrs={'class': 'class-for-input'}))
