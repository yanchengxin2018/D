$(document).ready(function() {
    var steps = 20;
    $("img.flip").each(function() {
        var cur = $(this);
        var page = $("<div/>").addClass("flip-page");
        page.addClass(cur.attr("class"));
        page.removeClass("flip");

        var img = cur.attr("src");
        var w = cur.width();
        var h = cur.height();

        page.data("page-width", w);

        var lastStep = page;
        var stepW = w / steps;
        for (var i = 0; i < steps; i++) {
            var step = $("<div/>").addClass("flip-step");
            var frontside = $("<div/>").addClass("flip-side flip-frontside");
            step.append(frontside);
            frontside.css({
                background: "url(" + img + ")",
                backgroundPosition: (-(stepW) * i) + "px 0"
            });
            var frontshading = $("<div/>").addClass("flip-shading");
            frontside.append(frontshading);
            frontshading.css({
                opacity: 0.01
            });
            var backside = null;
            if (cur.data("flip-backside")) {
                step.addClass("flip-step-two-sided");
                backside = $("<div/>").addClass("flip-side flip-backside");
                step.append(backside);
                backside.css({
                    background: "url(" + cur.data("flip-backside") + ")",
                    backgroundPosition: ((stepW) * i) + "px 0"
                });
                var backshading = $("<div/>").addClass("flip-shading");
                backside.append(backshading);
                backshading.css({
                    opacity: 0.01
                });
            }



            var debug = $("<div/>").addClass("flip-debug");
            step.append(debug);

            step.css({
                width: stepW + (i < steps - 1 ? 2 : 0),
                height: h,
                left: i > 0 ? stepW : 0,
            })
            lastStep.append(step);
            lastStep = step;
        }

        cur.after(page);
        cur.remove();

        page.mousedown(function(event) {
            event.preventDefault();
            flippingPage = $(this);
            flippingStart = event.clientX;
            page.addClass("flip-dragged");
            return false;
        });


    })
    var flippingPage = null;
    var flippingStart = 0;
    var flippingAngle = 0;
    var max = 180 / steps;
    max -= max / steps;
    $(document).mousemove(function(event) {
        if (flippingPage != null) {
            var d = event.clientX - flippingStart;
            var minP = 0.05;
            var pSlope = 0.01;
            var p = Math.abs(d / (flippingPage.data("page-width") * 2));
            p *= Math.PI;
            p = Math.abs(Math.sin(p));

            console.log(p);
            d *= minP + (pSlope * p);
            setPageAngle(flippingPage, d);
        }
    })
    $(document).mouseup(function(event) {
        if (flippingPage != null) {
            var pageAngle = {
                v: flippingAngle
            };
            var page = flippingPage;
            TweenLite.to(pageAngle, 0.35, {
                v: 0,
                onUpdate: function() {
                    setPageAngle(page, pageAngle.v)
                }
            })
            flippingPage = null;

        }
    })

    function setPageAngle(page, d) {
        var last = page.children(".flip-step");
        flippingAngle = d;
        var a = 0;
        for (var i = 0; i < steps; i++) {
            var r = d;
            if (i > 0) {
                if (r > max) {
                    r = max + (max - r)
                } else if (r < -max) {
                    r = -max + (-max - r);
                }
            } else {
                if (r > max) {
                    r = r - ((max - r) * steps);
                } else if (r < -max) {
                    r = r - ((-max - r) * steps);
                }
            }
            last.css({
                transform: "rotateY(" + r + "deg)"
            })
            a += r;
            var curA = Math.abs(a);
            while (curA > 90) {
                curA = 90 - (curA - 90);
            }
            var shade = curA / 90;
            shade *= 100;
            shade = Math.round(shade);
            shade *= 0.01;
            last.children(".flip-side").children(".flip-shading").css({
                opacity: shade
            })
            last = last.children(".flip-step");
        }
    }
})