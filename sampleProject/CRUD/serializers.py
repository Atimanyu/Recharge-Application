from rest_framework import serializers
from .models import Admin, PrepaidPlan, User
from rest_framework.serializers import Serializer,CharField,IntegerField
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = PrepaidPlan
        fields = '__all__'
class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = "__all__"