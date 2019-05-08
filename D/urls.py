from django.contrib import admin
from django.urls import path
from django.conf.urls import url,include
from image.image_urls import image_router


urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'image/',include(image_router.urls)),
]
