from django.contrib import admin
from .models import Marker, Percorso, Direction

class MarkerAdmin (admin.ModelAdmin):
    list_display = ('Nome', 'Indirizzo', 'Descrizione', 'Latitudine', 'Longitudine', 'Sfida', 'Immagine')

class PercorsoAdmin(admin.ModelAdmin):
    list_display=('Titolo')

class DirectionAdmin(admin.ModelAdmin):
    list_display = ('UserLat', 'UserLong')

# Register your models here.
    admin.site.register(Marker)
    admin.site.register(Percorso)

