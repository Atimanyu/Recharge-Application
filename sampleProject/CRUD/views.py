from django.contrib.auth import authenticate, login
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import (ListCreateAPIView, RetrieveUpdateDestroyAPIView,GenericAPIView,ListAPIView)
from .serializers import AdminSerializer, PlanSerializer, UserSerializer
from .models import PrepaidPlan, User, Admin
from rest_framework.views import APIView

class getpostusers(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
class getpostadmins(ListCreateAPIView):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer

class putgetdelete(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PlansView(ListAPIView):
    queryset = PrepaidPlan.objects.all()
    serializer_class = PlanSerializer
    
    
