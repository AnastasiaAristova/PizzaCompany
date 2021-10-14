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
