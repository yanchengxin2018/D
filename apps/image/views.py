from rest_framework.viewsets import GenericViewSet,mixins
from rest_framework.response import Response
from image.serializers import TriangleImageSerializer
import PIL.Image as I


#返回一个三角形图片
class TriangleImageViewSet(GenericViewSet,mixins.CreateModelMixin):

    serializer_class = TriangleImageSerializer

    def create(self, request, *args, **kwargs):
        request.data.get('',False)
        self.b_c = request.data.get('b_c',False)
        self.b_i = request.data.get('b_i',False)

        self.bk = request.data.get('bk',False)
        self.bk_px = request.data.get('bk_px',False)
        self.h = request.data.get('h',False)
        self.h_a = request.data.get('h_a',False)
        self.di = request.data.get('di',False)

        if self.b_i:
            back_path=self.get_back_image()
            return Response({'back_path':back_path})
        else:
            if self.b_c:
                back_path = self.get_back_color()
                return Response({'back_path':back_path})
            else:
                return Response('背景颜色及背景图片参数都是空的,服务器不需要处理任何数据',status=400)

    def get_back_color(self):
        img=I.new('RGBA',(int(self.di),int(self.h)),self.b_c)
        
        img.show()


        return 'path/back_color'

    def get_back_image(self):
        return 'path/back_image'















