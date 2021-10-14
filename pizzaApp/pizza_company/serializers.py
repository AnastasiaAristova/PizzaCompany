from abc import ABC

from rest_framework import serializers
from .models import User, Pizza


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        field = '__all__'


class PizzaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pizza
        field = '__all__'

#class AddPizzaSerializer(serializers.Serializer):
