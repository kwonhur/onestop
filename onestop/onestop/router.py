from rest_framework import routers
from api.views import (
    UserViewSet,
    GroupViewSet,
    ProjectViewSet,
    TaskViewSet,
    MessageViewSet,
)

router = routers.DefaultRouter()
router.register("users", UserViewSet)
router.register("groups", GroupViewSet)
router.register("projects", ProjectViewSet)
router.register("tasks", TaskViewSet)
router.register("messages", MessageViewSet)

urlpatterns = router.urls
