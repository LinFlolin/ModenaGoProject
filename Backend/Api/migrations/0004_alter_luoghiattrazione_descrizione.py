# Generated by Django 4.2.7 on 2024-02-19 08:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0003_alter_luoghiattrazione_descrizione'),
    ]

    operations = [
        migrations.AlterField(
            model_name='luoghiattrazione',
            name='Descrizione',
            field=models.TextField(max_length=5000),
        ),
    ]
