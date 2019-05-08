from rest_framework.routers import DefaultRouter
from image import views

image_router=DefaultRouter()
image_router.register('triangle',views.TriangleImageViewSet,basename='image_triangle')


