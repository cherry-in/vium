# Generated by Django 4.0.6 on 2022-08-19 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurantapp', '0002_alter_restaurant_categories'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='consumed_calorie',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
