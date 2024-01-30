
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from Api.views import LuoghiAttrazioneView, MappaView

routers = routers.DefaultRouter()
routers.register('LuoghiAtrazioni', LuoghiAttrazioneView, basename='LuoghiAtrazioni')
routers.register('Mappa', MappaView, basename='Mappa')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(routers.urls)), # forse servono gli apici per router.urls ma non ne sono sicuro
    #path('api/', include('Api.urls')),
    path('api/dj-rest-auth/', include('dj_rest_auth.urls')),
    path('api/dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
]

# urlpatterns =  router.urls