from django.urls import path, include
from .views import *

urlpatterns = [
    path('', index, name='main'),
    path('menu/', menuPage, name='menu'),
    path('cart/', cartPage, name='cart'),
    path('home/', homePage, name='home'),
    path('registration/', RegisterUser.as_view(), name='registration'),
    path('enter/', LoginUser.as_view(), name='enter'),
    path('cart/saveorder/', saveOrder, name='saveOrder'),
    path('exit/', logoutUser, name='exit'),
]