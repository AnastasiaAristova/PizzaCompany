# Generated by Django 3.2.7 on 2021-10-09 16:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pizza_company', '0002_auto_20211009_1851'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='apartment',
        ),
        migrations.RemoveField(
            model_name='user',
            name='house',
        ),
        migrations.RemoveField(
            model_name='user',
            name='street',
        ),
    ]