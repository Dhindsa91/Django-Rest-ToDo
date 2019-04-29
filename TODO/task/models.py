from django.db import models

# Create your models here.


Status = (

    ("In Progress", "In Progress"),
    ("To Do", "To Do"),
    ("Done", "Done")
   
)


class task(models.Model):

    id = models.AutoField(primary_key=True)
    status = models.CharField(max_length=100)
    dueDate = models.DateField()
    text = models.TextField()

    
  