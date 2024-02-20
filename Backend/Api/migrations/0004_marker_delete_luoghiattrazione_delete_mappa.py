# Generated by Django 5.0.1 on 2024-02-15 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0003_percorso'),
    ]

    operations = [
        migrations.CreateModel(
            name='Marker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nome', models.CharField(max_length=255)),
                ('Indirizzo', models.CharField(max_length=255)),
                ('Descrizione', models.TextField(max_length=500)),
                ('Latitudine', models.CharField(max_length=255)),
                ('Longitudine', models.CharField(max_length=255)),
                ('Sfida', models.TextField(max_length=300)),
                ('Immagine', models.ImageField(blank=True, null=True, upload_to='images/')),
            ],
        ),
        migrations.DeleteModel(
            name='LuoghiAttrazione',
        ),
        migrations.DeleteModel(
            name='Mappa',
        ),
    ]