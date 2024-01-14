
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from Api.views import LuoghiAttrazioneView, MappaView

routers = routers.DefaultRouter()
routers.register('LuoghiAtrazioni', LuoghiAttrazioneView,'LuoghiAtrazioni')
routers.register('Mappa', MappaView, 'Mappa')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(routers.urls)),
]

# urlpatterns = router.urls