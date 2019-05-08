// let i=0;
// let a=setInterval(function () {
//     if(i>800)clearInterval(a);
//     i++;
//     move_pic('pic_1',10,10,'1.png',50,90,1000-i,50+i,50+i);
//     let size=(1000-(1000-i))/1000;
//     if(size<0)size=0;
//     if(size>1)size=1;
//     move_pic('pic_2',10,10,'1.png',50+10*size,90,1000-i,50+i,50+i);
//     console.log('-->',size)
// },1);
//
//
//
//
//
//
//
// // 三维坐标及旋转角度
// function move_pic(id,w,h,back,x,y,z,X,Y) {
//     console.log(id,w,h,x,y,z,X,Y);
//     let pic_obj=$(`#${id}`);
//     pic_obj.css('width',`${w}%`);
//     pic_obj.css('height',pic_obj.css('width'));
//     pic_obj.css('left',`${x}%`);
//     pic_obj.css('top',`${100-y}%`);
//     pic_obj.css('border','red solid 1px');
//     pic_obj.css('position','absolute');
//     let size=(1000-z)/1000;
//     if(size<0)size=0;
//     if(size>1)size=1;
//     pic_obj.css('transform',`rotateX(${X}deg) rotateY(${Y}deg) scale(${size},${size})`);
//     pic_obj.css('background-image',`url("${back}")`);
//     pic_obj.css('background-size',`100% 100%`);
//     pic_obj.css('background-repeat',`no-repeat`);
// }
//



create_cube('dimian');

// 建造一个立方体
function create_cube(di) {
    let di_obj=$(`#${di}`);
    let w=di_obj.css('width').replace('px','');
    let h=di_obj.css('height').replace('px','');


        let id=`${di}_${1}`;
        di_obj.append(`<div id=${id}></div>`);
        let temp_obj=$(`#${id}`);
        temp_obj.css('width',`100%`);
        temp_obj.css('height',`100%`);
        temp_obj.css('border','#000000 solid 1px');
        temp_obj.css('position','absolute');
        temp_obj.css('transform',`rotateY(90deg) rotateX(0deg)  translateZ(-${w/2}px)`);
        temp_obj.css('background-color','rgba(0,0,255,0.7)');
        temp_obj.css('background-image','url("nan_0.png")');
        temp_obj.css('background-size','100% 100%');


        id=`${di}_${2}`;
        di_obj.append(`<div id=${id}></div>`);
        temp_obj=$(`#${id}`);
        temp_obj.css('width',`100%`);
        temp_obj.css('height',`100%`);
        temp_obj.css('border','#000000 solid 1px');
        temp_obj.css('position','absolute');
        temp_obj.css('transform',`rotateY(90deg) rotateX(0deg)  translateZ(${w/2}px)`);
        temp_obj.css('background-color','rgba(255,0,0,0.7)');
        temp_obj.css('background-image','url("nan_2.png")');
        temp_obj.css('background-size','100% 100%');

        id=`${di}_${3}`;
        di_obj.append(`<div id=${id}></div>`);
        temp_obj=$(`#${id}`);
        temp_obj.css('width',`100%`);
        temp_obj.css('height',`100%`);
        temp_obj.css('border','#000000 solid 1px');
        temp_obj.css('position','absolute');
        temp_obj.css('transform',`rotateY(0deg) rotateX(90deg)  translateZ(-${w/2}px)`);
        temp_obj.css('background-color','rgba(0,255,0,0.7)');
        temp_obj.css('background-image','url("nan_1.png")');
        temp_obj.css('background-size','100% 100%');


        id=`${di}_${4}`;
        di_obj.append(`<div id=${id}></div>`);
        temp_obj=$(`#${id}`);
        temp_obj.css('width',`100%`);
        temp_obj.css('height',`100%`);
        temp_obj.css('border','#000000 solid 1px');
        temp_obj.css('position','absolute');
        temp_obj.css('transform',`rotateY(0deg) rotateX(90deg)  translateZ(${w/2}px)`);
        temp_obj.css('background-color','rgba(255,255,0,0.7)');
        temp_obj.css('background-image','url("nan_2.png")');
        temp_obj.css('background-size','100% 100%');

        id=`${di}_${5}`;
        di_obj.append(`<div id=${id}></div>`);
        temp_obj=$(`#${id}`);
        temp_obj.css('width',`100%`);
        temp_obj.css('height',`100%`);
        temp_obj.css('border','#000000 solid 1px');
        temp_obj.css('position','absolute');
        temp_obj.css('transform',`rotateY(0deg) rotateX(0deg)  translateZ(${w/2}px)`);
        temp_obj.css('background-color','rgba(255,255,255,0.7)');
        temp_obj.css('background-image','url("nan_2.png")');
        temp_obj.css('background-size','100% 100%');

        id=`${di}_${6}`;
        di_obj.append(`<div id=${id}></div>`);
        temp_obj=$(`#${id}`);
        temp_obj.css('width',`100%`);
        temp_obj.css('height',`100%`);
        temp_obj.css('border','#000000 solid 1px');
        temp_obj.css('position','absolute');
        temp_obj.css('transform',`rotateY(0deg) rotateX(0deg)  translateZ(-${w/2}px)`);
        temp_obj.css('background-color','rgba(0,255,255,0.7)');
        temp_obj.css('background-image','url("nan_2.png")');
        temp_obj.css('background-size','100% 100%');
}

let di_obj=$('#dimian');
let i=0;
setInterval(function () {

    i++;
    di_obj.css('transform',`rotateX(${i}deg) rotateY(${i}deg)`);
    let a=i;
    if(a>400)a=400;
    di_obj.css('width',`${a}px`);
    di_obj.css('height',`${a}px`);
},50);











