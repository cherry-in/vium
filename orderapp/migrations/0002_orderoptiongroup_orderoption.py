# Generated by Django 4.0.6 on 2022-08-19 06:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('orderapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='OrderOptionGroup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('mandatory', models.BooleanField(default=False)),
                ('order_menu', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_option_group', to='orderapp.ordermenu')),
            ],
        ),
        migrations.CreateModel(
            name='OrderOption',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('price', models.PositiveIntegerField()),
                ('order_option_group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_option', to='orderapp.orderoptiongroup')),
            ],
        ),
    ]