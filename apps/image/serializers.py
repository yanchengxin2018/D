from rest_framework import serializers


#三角形
class TriangleImageSerializer(serializers.Serializer):
    di=serializers.CharField(write_only=True,help_text='底边长')
    h=serializers.CharField(write_only=True,help_text='三角形的高')
    h_a = serializers.CharField(write_only=True, help_text='高在底边上的位置')

    b_c=serializers.CharField(write_only=True,help_text='背景颜色')
    b_i=serializers.CharField(write_only=True,help_text='背景图片')

    bk=serializers.CharField(write_only=True,help_text='边框颜色')
    bk_px=serializers.CharField(write_only=True,help_text='边框粗度')



