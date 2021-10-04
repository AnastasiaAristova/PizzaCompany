from django.urls import path
from .views import *


urlpatterns = [
    path('', index, name='main'),
    path('menu/', menuPage, name='menu'),
    path('cart/', cartPage, name='cart'),
    path('home/', homePage, name='home'),


]