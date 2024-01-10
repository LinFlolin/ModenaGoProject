from django.contrib import admin
from .models import LuoghiAtrazione 

class LuoghiAtrazioneAdmin (admin.ModelAdmin):
    list_display =('titolo','descrizione','sfida')

# Register your models here.
    admin.site.register(LuoghiAtrazione,)

