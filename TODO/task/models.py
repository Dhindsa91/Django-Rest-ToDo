from django.db import models

# Create your models here.

class task(models.Model):

    id = models.AutoField(primary_key=True)
    status = models.CharField(max_length=100)
    dueDate = models.DateTimeField(blank=True)
    text = models.TextField()

    
  