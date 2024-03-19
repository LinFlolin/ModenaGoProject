from django.contrib import admin
from .models import Marker, Percorso, User, Profile


class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email']


class ProfileAdmin(admin.ModelAdmin):
    #list_editable = ['verified']
    list_display = ['user', 'full_name']


admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)


class MarkerAdmin (admin.ModelAdmin):
    list_display = ('Nome', 'Indirizzo', 'Descrizione', 'Desbrev', 'Contatti', 'Orari', 'Costi', 'Latitudine', 'Longitudine', 'Sfida', 'Immagine','percorso')

class PercorsoAdmin(admin.ModelAdmin):
    list_display=('Titolo')

class DirectionAdmin(admin.ModelAdmin):
    list_display = ('UserLat', 'UserLong')

# Register your models here.
    admin.site.register(Marker)
    admin.site.register(Percorso)

