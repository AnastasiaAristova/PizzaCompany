from django.contrib.auth import get_user_model
from django.db import models
from django.contrib.auth.models import User
#User = get_user_model()


class Pizza(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to='img/')
    price = models.IntegerField()
    availability = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Pizza'
        verbose_name_plural = 'Pizzas'


class PizzaUsers(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    street = models.CharField(max_length=50)
    house = models.CharField(max_length=5)
    apartment = models.PositiveSmallIntegerField()
    total = models.PositiveIntegerField(default=0)
    date = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'


class OrderInformation(models.Model):
    order = models.ForeignKey(PizzaUsers, on_delete=models.CASCADE, null=True)
    pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE, null=True)
    quantity = models.PositiveSmallIntegerField()

    class Meta:
        verbose_name = 'Information of order'
        verbose_name_plural = 'Information of orders'




