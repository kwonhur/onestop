from django.db import models
from django.contrib.auth.models import User, Group
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

# Extending User Model Usage: user = User.objects.get(pk=primary key)
# user.profile.profile.pic = "https://address"
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.URLField()


# Define signals so that Profile model automaticlaly updates when User model updates
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


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
