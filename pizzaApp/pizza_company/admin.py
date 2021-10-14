from django.contrib import admin
from .models import Pizza, User


class PizzaAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'availability')
    list_display_links = ('id', 'name')


admin.site.register(Pizza, PizzaAdmin)


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'last_name', 'phone_number')
    list_display_links = ('id', 'name')


admin.site.register(User, UserAdmin)

