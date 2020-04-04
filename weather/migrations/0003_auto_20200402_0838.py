# Generated by Django 3.0.4 on 2020-04-02 06:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('weather', '0002_auto_20200401_0928'),
    ]

    operations = [
        migrations.CreateModel(
            name='weather_data',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('request_text', models.CharField(max_length=200)),
                ('request_address', models.CharField(max_length=200)),
                ('request_date', models.DateTimeField(verbose_name='request date')),
                ('request_icon', models.CharField(max_length=50)),
                ('request_temp', models.CharField(max_length=5)),
                ('request_summ', models.CharField(max_length=200)),
            ],
        ),
        migrations.DeleteModel(
            name='weatherData',
        ),
    ]