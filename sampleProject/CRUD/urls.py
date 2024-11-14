from django.urls import path
from .views import (PlansView, getpostadmins, getpostusers, putgetdelete)

urlpatterns = [
    path('users/',getpostusers.as_view(),name="getall-post"),
    path('users/<pk>/',putgetdelete.as_view(),name="retrieve-update-delete"),
    path('plans/',PlansView.as_view(),name='list_plans'),
    path('admins',getpostadmins.as_view(),name="get-post-admins")
]