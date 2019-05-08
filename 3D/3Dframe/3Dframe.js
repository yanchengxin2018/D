base_rule=100;



init();
create_oblong({base:'screen',a:1,b:1,b_c:'#ff2121',X:45,Y:45});




//初始化
function init() {
    let screen_obj=$('#screen');
    screen_obj.css('width','500px');
    screen_obj.css('height','500px');
    screen_obj.css('left','300px');
    screen_obj.css('top','100px');
    screen_obj.css('position','absolute');
    screen_obj.css('transform-style','preserve-3d');
    screen_obj.css('border','red solid 1px');
    screen_obj.css('background-color','RGBA(0,255,0,0.5)');
    // screen_obj.css('transform','rotateX(45deg) rotateY(45deg)');
}


//创造一个长方形
function create_oblong(options) {
    let base=options.base;//基准板,
    let a=options.a || 0;//长
    let b=options.b || 0;//宽
    let x=options.x || 0;//x位移
    let y=options.y || 0;//y位移
    let z=options.z || 0;//z位移
    let X=options.X || 0;//x轴旋转角度
    let Y=options.Y || 0;//y轴旋转角度
    let Z=options.Z || 0;//z轴旋转角度
    let rule=options.rule || base_rule;//比例尺
    let b_c=options.b_c || false;//填充色
    let b_i=options.b_i || false;//背景图
    let b_m=options.b_m || 0;//背景图模式
    let bk=options.bk || false;//边框
    let bk_px=options.bk_px || 1;//边框粗度


    let base_obj=$(`#${base}`);
    //基准板设置绝对定位以及3d支持
    base_obj.css('position','absolute');
    base_obj.css('transform-style','preserve-3d');


    let oblong_id=`${base}_${get_rand(6)}`;
    base_obj.append(`<div id="${oblong_id}"></div>`);
    let oblong_obj=$(`#${oblong_id}`);

    //长方形设置绝对定位
    oblong_obj.css('position','absolute');

    //长方形设置尺寸
    oblong_obj.css('width',`${a*rule}px`);
    oblong_obj.css('height',`${b*rule}px`);

    //长方形设置坐标及角度
    let xyz=`translateX(${x*rule}px) translateY(${y*rule}px) translateZ(${z*rule}px)`;
    let XYZ=`rotateX(${X}deg) rotateY(${Y}deg) rotate(${Z}deg)`;
    let transform=xyz+' '+XYZ;
    oblong_obj.css('transform',transform);

    //设置背景色
    if(b_c!==false)
    {
        oblong_obj.css('background-color',b_c);
    }
    //设置背景图
    if(b_i!==false)
    {
        oblong_obj.css('background-image',`url("${b_i}")`);
    }
    //设置背景图模式
    if(b_m===0)
    {
        oblong_obj.css('background-size','100% auto');
        oblong_obj.css('background-repeat','no-repeat');
    }
    else if(b_m===1)
    {
        oblong_obj.css('background-size','100% 100%');
        oblong_obj.css('background-repeat','no-repeat');
    }
    //设置边框
    if(bk!==false)
    {
        oblong_obj.css('border',`${bk} solid ${bk_px}px`);
    }
    return oblong_obj;
}


//创建一个三角形
function create_triangle(options) {
    let base=options.base;//基准板,*
    let di=options.di || 0;//底长*
    let h=options.h || 0;//高*
    let h_a=options.h_a || 0;//高的位置*
    let x=options.x || 0;//x位移*
    let y=options.y || 0;//y位移*
    let z=options.z || 0;//z位移*
    let X=options.X || 0;//x轴旋转角度*
    let Y=options.Y || 0;//y轴旋转角度*
    let Z=options.Z || 0;//z轴旋转角度*
    let rule=options.rule || base_rule;//比例尺*
    let b_c=options.b_c || false;//填充色*
    let b_i=options.b_i || false;//背景图*
    let bk=options.bk || false;//边框*
    let bk_px=options.bk_px || 1;//边框粗度*


    let base_obj=$(`#${base}`);
    //基准板设置绝对定位以及3d支持
    base_obj.css('position','absolute');
    base_obj.css('transform-style','preserve-3d');


    //添加这个三角形
    let triangle_id=`${base}_${get_rand(6)}`;
    base_obj.append(`<div id="${triangle_id}"></div>`);
    let triangle_obj=$(`#${triangle_id}`);

    //三角形设置绝对定位
    triangle_obj.css('position','absolute');

    //三角形设置尺寸
    triangle_obj.css('width',`${di*rule}px`);
    triangle_obj.css('height',`${h*rule}px`);

    //三角形设置坐标及角度
    let xyz=`translateX(${x*rule}px) translateY(${y*rule}px) translateZ(${z*rule}px)`;
    let XYZ=`rotateX(${X}deg) rotateY(${Y}deg) rotate(${Z}deg)`;
    let transform=xyz+' '+XYZ;
    triangle_obj.css('transform',transform);

    //设置背景图
    if(b_c||b_i)
    {
        //发送请求    let h=options.h || 0;//高*
        //     let h_a=options.h_a || 0;//高的位置*
        let data={b_c:b_c,b_i:b_i,bk:bk,bk_px:bk_px,h:h,h_a:h_a,di:di};
        //post(url,data,success_function,fail_function)
    }


}


//随机数
function get_rand(n){
    var rnd="";
    for(var i=0;i<n;i++)
        rnd+=Math.floor(Math.random()*10);
    return rnd;
}





