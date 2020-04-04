from django.db import models

class weather_data(models.Model):
    request_text = models.CharField(max_length=200)
    def __str__(self):
        return self.request_text

    request_address = models.CharField(max_length=200)
    def __str__(self):
        return self.request_address

    request_date = models.DateTimeField('request date')

    request_icon = models.CharField(max_length=50)
    def __str__(self):
        return self.request_icon

    request_temp = models.CharField(max_length=5)
    def __str__(self):
        return self.request_temp
    request_summ = models.CharField(max_length=200)
    def __str__(self):
        return self.request_summs
