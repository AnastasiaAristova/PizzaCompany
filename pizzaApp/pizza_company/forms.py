from django import forms
from .models import User


class AddUser(forms.ModelForm):
    class Meta:
        model = User
        fields = ['name', 'last_name', 'phone_number']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'class-for-input'}),
            'last_name': forms.TextInput(attrs={'class': 'class-for-input'}),
            'phone_number': forms.TextInput(attrs={'class': 'class-for-input'}),
            #'street': forms.TextInput(attrs={'class': 'class-for-input'}),
            #'house': forms.TextInput(attrs={'class': 'class-for-input'}),
            #'apartment': forms.TextInput(attrs={'class': 'class-for-input'}),
        }
