# Generated by Django 3.0.4 on 2020-04-01 07:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('weather', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='weather_data',
            new_name='weatherData',
        ),
    ]
