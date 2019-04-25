from task.models import task
from rest_framework import viewsets, permissions
from .serializers import taskSerializer


# task Viewset full crud API without explicit methods

class taskViewSet(viewsets.ModelViewSet):
    queryset = task.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = taskSerializer