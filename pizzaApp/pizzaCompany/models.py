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



