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
    name = models.CharField(max_length=50, verbose_name="Name")
    last_name = models.CharField(max_length=50, verbose_name="Last name")
    phone_number = models.CharField(max_length=11, verbose_name="Phone number")
    #street = models.CharField(max_length=50, verbose_name="Street")
    #house = models.CharField(max_length=5, verbose_name="House")
    #apartment = models.PositiveSmallIntegerField(verbose_name="Apartment")




