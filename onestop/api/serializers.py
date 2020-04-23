from django.contrib.auth.models import User, Group
from home.models import Project, Task, Message
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        depth = 1


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
