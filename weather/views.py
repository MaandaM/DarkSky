from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from datetime import datetime

from .models import weather_data


def index(request):
    # history_weather = weather_data.objects
    # context = {'history_weather':history_weather}
    return render(request, 'weather/index.html')


def save(request):
    w = weather_data(request_address=request.POST['address'],
                     request_date=datetime.now(),
                     request_icon=request.POST['icon'],
                     request_temp=request.POST['temp'],
                     request_summ=request.POST['summ'], )
    w.save()
    return HttpResponseRedirect(reverse('index'))


def history(request):
    history_weather = weather_data.objects.order_by('-request_date')
    context = {'history_weather': history_weather}
    return render(request, 'weather/history.html', context)

