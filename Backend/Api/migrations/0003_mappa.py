# Generated by Django 5.0.1 on 2024-01-14 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0002_luoghiattrazione_delete_luoghiatrazione'),
    ]

    operations = [
        migrations.CreateModel(
            name='Mappa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Luogo', models.CharField(max_length=50)),
                ('Latitudine', models.CharField(max_length=50)),
                ('Longitudine', models.CharField(max_length=50)),
            ],
        ),
    ]
