# Generated by Django 5.0.1 on 2024-02-13 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0002_alter_mappa_latitudine_alter_mappa_longitudine_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Percorso',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Titolo', models.CharField(max_length=255)),
            ],
        ),
    ]
