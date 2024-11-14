from django.contrib import admin
from django.urls import path, include
from CRUD.models import Admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('CRUD.urls'))
]