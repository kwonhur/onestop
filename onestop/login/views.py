from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib import messages


def register(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(
                request, "Your account has been created! You are now able to log in"
            )
            return redirect("login")
        else:
            messages.warning(
                request,
                "Error creating account. Please try again with different credential",
            )
    else:
        form = UserCreationForm()
    return render(request, "login/register.html", {"form": form})
