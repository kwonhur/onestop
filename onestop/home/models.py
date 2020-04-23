from django.db import models
from django.contrib.auth.models import User, Group

# Create your models here.
class Project(models.Model):
    project_title = models.CharField(max_length=240, null=True)
    project_status = models.CharField(max_length=240, null=True)
    project_members = models.ManyToManyField(User)
    project_due_datetime = models.DateTimeField(null=True)
    project_created_datetime = models.DateTimeField(auto_now_add=True, null=True)


class Task(models.Model):
    task_title = models.CharField(max_length=240, null=True)
    task_description = models.TextField(null=True)
    task_status = models.TextChoices("Mark Complete", "Completed")
    assignee = models.ManyToManyField(User)
    task_creator = models.ForeignKey(
        User, related_name="tasks_i_created", on_delete=models.CASCADE, null=True
    )
    due_datetime = models.DateTimeField(null=True)
    task_created_datetime = models.DateTimeField(auto_now_add=True, null=True)
    sub_task = models.CharField(max_length=240, null=True)
    project = models.ForeignKey(
        Project, related_name="tasks_for_project", on_delete=models.CASCADE, null=True
    )
    attachment_url = models.FileField(blank=True, null=True, upload_to="attachments/")


class Message(models.Model):
    message_title = models.CharField(max_length=240, null=True)
    message_content = models.TextField(null=True)
    sender = models.ForeignKey(
        User, related_name="messages_i_sent", on_delete=models.CASCADE, null=True
    )
    received = models.ForeignKey(
        User, related_name="messages_i_received", on_delete=models.CASCADE, null=True
    )
    message_created_datetime = models.DateTimeField(auto_now_add=True, null=True)
