# models.py
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

class CustomUserManager(BaseUserManager):
    def create_user(self, phone, password=None, **extra_fields):
        if not phone:
            raise ValueError("The Phone number must be set")
        user = self.model(phone=phone, **extra_fields)
        user.set_password(password)  # Use Django's built-in password hashing
        user.save(using=self._db)
        return user

    def create_superuser(self, phone, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(phone, password, **extra_fields)

class User(AbstractBaseUser):
    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=255)
    phone = models.CharField(unique=True, max_length=15)
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'phone'  # Set phone as the primary login field
    REQUIRED_FIELDS = ['email']  # Require email as an additional field for creating superusers

    def __str__(self):
        return self.name

class PrepaidPlan(models.Model):
    id = models.CharField(max_length=5,primary_key=True)
    price = models.IntegerField()
    validity = models.IntegerField()
    special = models.CharField(max_length=50)
    data = models.FloatField()
    def _str_(self):
        return self.name

class PostpaidPlan(models.Model):
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=50)
    data = models.CharField(max_length=50)
    validity = models.CharField(max_length=50)

    def _str_(self):
        return self.name
