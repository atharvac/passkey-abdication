from django.urls import path
from . import views

urlpatterns = [
    path("", views.get_username_and_password, name="api.index"),
]