from django.urls import path
from .import views
urlpatterns = [
    path('Admin-DashBoard',views.dashboard,name='dashboard'),
    path('',views.base,name='base'),
    path('flight_signin',views.flight_signin,name='flight_signin'),
    path('flight_signup',views.flight_signup,name='flight_signup')
]