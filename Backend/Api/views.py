
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import LuoghiAttrazioneSerialiazer
from .models import LuoghiAttrazione

class LuoghiAttrazioneView(viewsets.ModelViewSet):
    serializer_class= LuoghiAttrazioneSerialiazer
    queryset = LuoghiAttrazione.objects.all() 

    # def update(self, request, *args, **kwargs):
    #    partial = kwargs.pop('partial', False)
    #    instance = self.get_object()
    #    serializer = self.get_serializer(instance, data =request.data,partial=partial)
    #    serializer.is_valid(raise_exception=True)
    #    self.perform_update(serializer)
    #    return Response(serializer.data)
    
# class LuoghiAttrazioneModificaView(viewsets.ModelViewSet):

#     serializer_class= LuoghiAttrazioneSerialiazer
#     queryset = LuoghiAttrazione.objects.all() 

#     def update(self, request, *args, **kwargs):
#        partial = kwargs.pop('partial', False)
#        instance = self.get_object()
#        serializer = self.get_serializer(instance, data =request.data,partial=partial)
#        serializer.is_valid(raise_exception=True)
#        self.perform_update(serializer)
#        return Response(serializer.data)