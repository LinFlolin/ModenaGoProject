# Generated by Django 4.2.6 on 2024-01-30 10:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0005_appuser_is_active_appuser_is_staff'),
    ]

    operations = [
        migrations.DeleteModel(
            name='AppUser',
        ),
    ]