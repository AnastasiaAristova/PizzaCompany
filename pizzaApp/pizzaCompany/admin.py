from django.contrib import admin
from .models import Pizza


class PizzaAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'availability')
    list_display_links = ('id', 'name')


admin.site.register(Pizza, PizzaAdmin)
