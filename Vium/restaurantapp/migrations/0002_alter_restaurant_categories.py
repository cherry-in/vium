# Generated by Django 4.0.6 on 2022-08-19 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurantapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='categories',
            field=models.CharField(max_length=20),
        ),
    ]
