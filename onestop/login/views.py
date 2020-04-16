from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages

def register(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}! Welcome to OneStop Project Management!')
            return redirect('user-home')
        else:
            messages.warning(request, 'Error creating account. Please try again with different credential')
    else:
        form = UserCreationForm()
    return render(request, 'login/register.html', {'form': form})

