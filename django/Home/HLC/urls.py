from django.urls import path
from . import views
urlpatterns=[
    path('',views.index,name="home"),
    path('login',views.login,name="login"),
    path('insert', views.insert, name='insert'),
    path('show',views.show,name="show"),
]