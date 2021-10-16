from django import forms
from .models import User

class AddUser(forms.ModelForm):
    repeat_password = forms.CharField(max_length=50, widget=forms.PasswordInput(attrs={'class': 'class-for-input'}), label='Repeat password')
    class Meta:
        model = User
        fields = ['name', 'last_name', 'phone_number', 'password']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'class-for-input'}),
            'last_name': forms.TextInput(attrs={'class': 'class-for-input'}),
            'phone_number': forms.TextInput(attrs={'class': 'class-for-input'}),
            'password': forms.PasswordInput(attrs={'class': 'class-for-input'}),
        }

    def clean(self):
        if self.cleaned_data['password'] != self.cleaned_data['repeat_password']:
            raise forms.ValidationError("Wrong password!")


class UserData(forms.Form):
    name = forms.CharField(max_length=50, label='Name', widget=forms.TextInput(attrs={'class': 'class-for-input'}))
    phone_number = forms.CharField(max_length=11, label='Phone number', widget=forms.TextInput(attrs={'class': 'class-for-input'}))
    password = forms.CharField(max_length=50, label='Password', widget=forms.PasswordInput(attrs={'class': 'class-for-input'}))

    def clean(self):
        try:
            user = User.objects.get(name=self.cleaned_data['name'], phone_number=self.cleaned_data['phone_number'])
        except User.DoesNotExist:
            raise forms.ValidationError("User doesn't exist!")
