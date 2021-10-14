from django.db import models


class Pizza(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to='img/')
    price = models.IntegerField()
    availability = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Pizza'
        verbose_name_plural = 'Pizzas'


class User(models.Model):
    name = models.CharField(max_length=50, verbose_name='Name')
    last_name = models.CharField(max_length=50, verbose_name='Last name')
    phone_number = models.CharField(max_length=11, verbose_name='Phone number')
    password = models.CharField(max_length=50, verbose_name='Password')

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'


class PizzaUsers(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE, null=True)
    street = models.CharField(max_length=50)
    house = models.CharField(max_length=5)
    apartment = models.PositiveSmallIntegerField()
    total = models.PositiveIntegerField()
    date = models.DateField()
    done = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'


class OrderInformation(models.Model):
    order = models.ForeignKey('PizzaUsers', on_delete=models.CASCADE, null=True)
    pizza = models.ForeignKey('Pizza', on_delete=models.CASCADE, null=True)
    quantity = models.PositiveSmallIntegerField()

    class Meta:
        verbose_name = 'Information of order'
        verbose_name_plural = 'Information of orders'




