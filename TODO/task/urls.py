from rest_framework import routers
from .api import taskViewSet

router = routers.DefaultRouter()
router.register('api/task', taskViewSet, 'task')


urlpatterns = router.urls