$(document).ready(function(){var c=function(){var p=50;
var q=f;
var s=0+k;
var r=j;
var t=a;
var m=i;
var n=g;
var l=d;
var o=b;
var u={mode:e,speed:q,startSlide:s,randomStart:m,controls:n,auto:l,pause:r,autoHover:o,autoDelay:t,adaptiveHeight:true,onSlideAfter:function(){$(".bx-pager-link").each(function(){var v=$(this).data("slide-index")+1;
$(this).attr("title","Slide "+v)
})
},onSliderLoad:function(){$(".bxslider .hero").eq(1).addClass("active-slide")
},onSlideBefore:function(w,v,x){$(".active-slide").removeClass("active-slide");
$(".bxslider .hero").eq(x+1).addClass("active-slide")
}};
return u
};
var e=$(".sun-product-carousel .sun-product-carousel-slide-list").attr("data-mode");
var f=$(".sun-product-carousel .sun-product-carousel-slide-list").attr("data-speed");
var k=$(".sun-product-carousel .sun-product-carousel-slide-list").attr("data-startslide");
var j=$(".sun-product-carousel .sun-product-carousel-slide-list").attr("data-pause");
var a=$(".sun-product-carousel .sun-product-carousel-slide-list").attr("data-autodelay");
var i=$(".sun-product-carousel .sun-product-carousel-slide-list").attr("data-randomstart");
var g=$(".sun-product-carousel .sun-product-carousel-slide-list").attr("data-controls");
if(g=="true"){g=true
}else{g=false
}if(i=="true"){i=true
}else{i=false
}var d=$(".sun-product-carousel .sun-product-carousel-slide-list").attr("data-auto");
var b=$(".sun-product-carousel .sun-product-carousel-slide-list").attr("data-autohover");
if(d=="true"){d=true
}else{d=false
}if(b=="true"){b=true
}else{b=false
}$("ul.bxslider").append("<div class='bxslider'> </div>");
var h=$(".bxslider div.hero").detach();
$("ul.bxslider").removeClass("bxslider");
$(".bxslider").append(h);
setTimeout(function(){$(".bxslider").one().bxSlider(c())
},500);
$(".bx-prev").attr("title","Previous Slide");
$(".bx-prev").attr("aria-label","Previous Slide");
$(".bx-next").attr("title","Next Slide");
$(".bx-next").attr("aria-label","Next Slide")
});