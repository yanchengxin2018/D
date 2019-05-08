



let di_obj=$('#home_base');
let i=0;
setInterval(function () {

    i++;
    di_obj.css('transform',`rotateX(${i*1.5}deg) rotateY(${i*2}deg)`);
    // let a=i;
    // if(a>400)a=400;
    // di_obj.css('width',`${a}px`);
    // di_obj.css('height',`${a}px`);
},50);

















