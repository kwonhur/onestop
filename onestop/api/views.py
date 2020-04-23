from django.shortcuts import render
from django.contrib.auth.models import User, Group
from home.models import Project, Task, Message
from rest_framework import viewsets, generics, filters
from .serializers import (
    UserSerializer,
    GroupSerializer,
    ProjectSerializer,
    TaskSerializer,
    MessageSerializer,
)

# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all().order_by("-date_joined")


class GroupViewSet(viewsets.ModelViewSet):
    serializer_class = GroupSerializer
    queryset = Group.objects.all()


class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()


class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    queryset = Message.objects.all()
