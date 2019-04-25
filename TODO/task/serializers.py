from rest_framework import serializers
from task.models import task


#turns task model into serializer
class taskSerializer(serializers.ModelSerializer):
    class Meta:
        model = task
        fields = '__all__'