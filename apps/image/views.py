from rest_framework.viewsets import GenericViewSet,mixins
from rest_framework.response import Response
from image.serializers import TriangleImageSerializer
import PIL.Image as I


#返回一个三角形图片
class TriangleImageViewSet(GenericViewSet,mixins.CreateModelMixin):

    serializer_class = TriangleImageSerializer

    def create(self, request, *args, **kwargs):
        data=request.data
        self.height=data.get('height',None)
        self.height_position=data.get('height_position',None)
        self.bottom_width=data.get('bottom_width',None)
        self.back_color=data.get('back_color',None)

        if self.height_position<0:
            self.width=self.bottom_width+abs(self.height_position)
            self.x1=0
            self.x2=abs(self.height_position)
            self.x3=self.width
        elif self.height_position>self.bottom_width:
            self.width=self.height_position
            self.x1=self.width
            self.x2=0
            self.x3=self.bottom_width
        else:
            self.width=self.bottom_width
            self.x1=self.height_position
            self.x2=0
            self.x3=self.bottom_width
        self.y1=0
        self.y2=self.height
        self.y3=self.height
        self.img=Image.new('RGBA',(self.width,self.height),(255,255,255,0))
        draw_triang()

    def draw_triang(self):
        img=self.img
        L,H=img.size
        for l in range(L):
            for h in range(H):
                if self.is_in_triang(l,H-h):
                    img.putpixel((l,h),(0,0,0,255))
        self.img = img.transpose(Image.FLIP_TOP_BOTTOM)
        return self.img

    # 判断这个点是不是在这个三角形内部
    def is_in_triang(self,x,y):
        left_line_y=self.left_line(x)
        right_line_y=self.right_line(x)
        if self.height_position<0:
            status_1=False if y>left_line_y else True
            status_2=False if y<right_line_y else True
        elif self.height_position>self.bottom_width:
            status_1=False if y<left_line_y else True
            status_2=False if y>right_line_y else True 
        else:
            status_1=False if y<left_line_y else True
            status_2=False if y<right_line_y else True 
        return True if status_1 and status_2 else False


    # 左边那条两点式
    def left_line(self,x):
        x1=self.x1
        x2=self.x2
        y1=self.y1
        y2=self.y2
        y=(x-x1)*(y2-y1)/(x2-x1)+y1
        return y
    
    # 右边那条两点式
    def right_line(self,x):
        x1=self.x1
        x2=self.x3
        y1=self.y1
        y2=self.y3
        y=(x-x1)*(y2-y1)/(x2-x1)+y1
        return y













