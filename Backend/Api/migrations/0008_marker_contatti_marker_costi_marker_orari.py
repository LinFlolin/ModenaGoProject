# Generated by Django 5.0.1 on 2024-03-03 15:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0007_marker_desbrev'),
    ]

    operations = [
        migrations.AddField(
            model_name='marker',
            name='Contatti',
            field=models.TextField(default='', max_length=300),
        ),
        migrations.AddField(
            model_name='marker',
            name='Costi',
            field=models.TextField(default='', max_length=500),
        ),
        migrations.AddField(
            model_name='marker',
            name='Orari',
            field=models.TextField(default='', max_length=1000),
        ),
    ]
