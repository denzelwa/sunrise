$(document).ready(function(){var o=$("#suntrust-page");
var f=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;
var u=navigator.appName=="Microsoft Internet Explorer"||!!(navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/rv:11/))||(typeof $.browser!=="undefined"&&$.browser.msie==1);
var h=/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor);
$(document).keypress(function(aC){var aB=aC.keyCode?aC.keyCode:aC.which;
if(aB==13){var az=$(":focus");
if(az.is("button, input[type=button], input[type=submit],.suntrust-main-links")){az.click()
}}if(f){var aA=$(document.activeElement).attr("href");
if(aB==13&&aA!=undefined){if(aA.is("a")){aA.click()
}}}});
$(document).on("touchstart",".location_fax_details p,.search_result_location_fax_details p",function(){return false
});
if($(".newWindowpopup").length==0){$("#suntrust-page").append('<div class="newWindowpopup">Opens a new window</div>')
}setTimeout(function(){if(window.innerWidth>767){if($("header").innerHeight()>70){$("body").css("padding-top",$("header").innerHeight()+"px")
}}if(h){if(window.innerWidth>1024){if($("header").innerHeight()>70){$("body").css("padding-top",$("header").innerHeight()+"px")
}}}},800);
$(window).resize(function(){if(window.innerWidth>767){if($("header").innerHeight()>70){$("body").css("padding-top",$("header").innerHeight()+"px")
}}else{$("body").css("padding-top","70px")
}ae()
});
$(document).on("click","#bbNavList a",function(){var e=$($(this).attr("href")).offset().top-189;
$("#bbNavList a").removeClass("active");
$(this).addClass("active");
$("body, html").animate({scrollTop:e},1000)
});
var W=0;
$(document).on("scroll",w);
function w(az){var aB=$(document).scrollTop()+280;
if($("#bbNavList").is(":visible")==true){$("#bbNavList a").each(function(){var aC=$(this);
if(aC.attr("href")!=undefined&&aC.attr("href").indexOf("/")==-1){var aD=$(aC.attr("href"));
if(aC.attr("href")!="#"){if(aD.offset().top<=aB&&aD.offset().top+aD.height()>aB){$("#bbNavList a").removeClass("active");
aC.addClass("active")
}else{aC.removeClass("active")
}}}})
}if($("#bbMobileMenu").is(":visible")==true){var e=$(this).scrollTop();
var aA=0;
if($(".suntrust-heroHeadlineHolder").is(":visible")==true){aA=$(".suntrust-heroHeadlineHolder").innerHeight()+80
}else{aA=80
}if(e>W){if(e>=80){$(".suntrust-heroHeadlineHolder").parent().addClass("openAccountHeroFixed");
$("#bbMobileMenu").addClass("fixed");
$(".suntrust-heroHeadlineHolder").parent().css("top","0");
$("#bbMobileMenu").css("top",$(".suntrust-heroHeadlineHolder").innerHeight()+"px")
}}else{if(e>=80){$(".suntrust-heroHeadlineHolder").parent().css("top","70px");
$("#bbMobileMenu").css("top",($(".suntrust-heroHeadlineHolder").innerHeight()+70)+"px")
}else{$(".suntrust-heroHeadlineHolder").parent().removeClass("openAccountHeroFixed");
$("#bbMobileMenu").removeClass("fixed");
$(".suntrust-heroHeadlineHolder").parent().css("top","auto");
$("#bbMobileMenu").css("top","auto")
}}W=e
}}$(document).on("click","#bbMobileOptionsContainer a",function(){var e;
if($(window).scrollTop()==0){e=$($(this).attr("href")).offset().top-530
}else{e=$($(this).attr("href")).offset().top-200
}$("#bbMobileOptionsContainer a").removeClass("active");
$(this).addClass("active");
$("body, html").animate({scrollTop:e},1000);
$(this).parents("#bbMobileOptionsContainer").prev("#bbMobileGrayBar").find("#bbCloseBox").toggleClass("bbRotate");
$(this).parents("#bbMobileOptionsContainer").slideToggle()
});
$(".newAccount_Col").each(function(){$(this).parents("section").find(".openNewAccount_mobileNav .HeaderNavContaner").html($(this).find(".container-fluid .row").html());
$(this).find(".container-fluid").remove()
});
var B=0;
$(".openaccountcontresp .openNewAccount_mobileNav").each(function(){if(B!=0){$(this).remove()
}B++
});
if($("#bbStickyNavBox").is(":visible")==true){ae()
}function ae(){var e=0;
var az=0;
var aB=0;
if($("header").is(":visible")==true){e=$("header").innerHeight()
}if($(".heroheadline").is(":visible")==true){az=$(".heroheadline").innerHeight()
}var aA=0;
$(".openaccountcontresp").each(function(){if(aA==0){aB=$(this).find(".suntrust-compare-section-heading").innerHeight()+65;
var aC=$(this).find(".suntrust-accounts-comparison-list li:first-child").innerWidth();
$("li#bbStickyNavBox").attr("style","width: "+aC+"px")
}aA++
});
$("li#bbStickyNavBox").css("top",(e+az+aB)+"px")
}function P(az){try{var aA=new KJUR.crypto.MessageDigest({alg:"sha256",prov:"cryptojs"});
aA.updateString(az);
return aA.digest()
}catch(aB){if(console){console.log(aB)
}return""
}}function aj(az){var e=az.split("&");
if(e.length==3){return Q(e[2])
}return null
}function T(az){var aB=az+"=";
var e=document.cookie.split(";");
for(var aA=0;
aA<e.length;
aA++){var aC=e[aA];
while(aC.charAt(0)==" "){aC=aC.substring(1,aC.length)
}if(aC.indexOf(aB)==0){return aC.substring(aB.length,aC.length)
}}return null
}function Q(az){var e;
if(az!=undefined){var e=az.split("=");
if(e.length==2&&e[1]!=undefined){return e[1]
}else{return null
}}}function D(){var az=$("#showTranscript .suntrust-video-transcript-accordion");
var e,aD;
function aB(){e.parent("#showTranscript").next("#hideTranscript").show();
e.parent("#showTranscript").next("#hideTranscript").find(".suntrust-video-accordion-section").show();
e.parent("#showTranscript").next("#hideTranscript").find(".suntrust-video-transcript-accordion").addClass("active");
e.parent("#showTranscript").hide()
}function aC(){aD.parent("#hideTranscript").prev("#showTranscript").show();
aD.parent("#hideTranscript").hide();
aD.parent("#hideTranscript").find(".suntrust-video-accordion-section").hide();
e.parent("#hideTranscript").find(".suntrust-video-transcript-accordion").removeClass("active")
}az.on("click",function(){e=$(this);
aB(e)
});
var aA=$("#hideTranscript .suntrust-video-transcript-accordion");
aA.on("click",function(){aD=$(this);
aC(aD)
});
az.on("keypress",function(aE){if(aE.which==13){e=$(this);
aB(e)
}});
aA.on("keypress",function(aE){if(aE.which==13){aD=$(this);
aC(aD)
}})
}D();
$("h2.sun-product-carousel-heading,p.sun-product-carousel-products-intro").each(function(){if($(this).text().length>150){$(this).html($(this).html().substring(0,150)+"...")
}});
$("h2.sun-product-carousel-heading,p.sun-product-carousel-products-intro").each(function(){if($(this).text().length>80){$("h2.sun-product-carousel-heading").addClass("adjustFont");
$("p.sun-product-carousel-products-intro").addClass("adjustFont")
}});
$(document).on("click",".find_us .find_search.suntrust-secondary-button",function(aA){aA.preventDefault();
var az=$(".find_us .suntrust_find_input").val().trim();
var aB=$(this).attr("href");
if(az!=""&&aB!=undefined){window.location.href=aB+"?searchTerm="+encodeURIComponent(az)+"#locations"
}});
$(document).on("keypress",function(aA){if(aA.keyCode===13){if($(".find_us .find_search.suntrust-secondary-button").length>0){aA.preventDefault();
var az=$(".find_us .suntrust_find_input").val().trim();
var aB=$(".find_us .find_search.suntrust-secondary-button").attr("href");
if(az!=""&&aB!=undefined){window.location.href=aB+"?searchTerm="+encodeURIComponent(az)+"#locations"
}}}});
o.on("click",".find_us .find_input a.find_search",function(aB){aB.preventDefault();
var az=$(this).attr("href");
var aA=$(this).closest(".find_input").find(".suntrust_find_input").val().trim();
aA=encodeURIComponent(aA).replace(/%20/g,"+");
if(az!=""){az=az+"?searchTerm="+aA+"#locations";
window.open(az,"_self")
}});
$(document).on("keypress",".find_us .find_input .suntrust_find_input",function(az){if(az.keyCode===13){$(this).blur();
$(".find_us .find_input a.find_search").trigger("click")
}});
$(document).on("click",".suntrust-modal-window .suntrust-nav-search .suntrust-orange-button",function(aD){aD.preventDefault();
var az=$(".suntrust-modal-window .suntrust-nav-search #header-search-input.suntrust-nav-search-input").val().trim();
var aE=$(this).attr("href");
var aA=typeof($(this).data("search-tab"))=="undefined"?"all_results":$(this).data("search-tab");
var aC=window.location.href.split("#")[0];
if(az!=""&&aE!=undefined){if(aE.indexOf("?")>=0){var aB=window.location.protocol+"//"+window.location.hostname+aE.split("?")[0]+"?searchTerm="+encodeURIComponent(az).replace(/%20/g,"+");
if(aC==aB){window.location.href=aE.split("?")[0]+"?searchTerm="+encodeURIComponent(az).replace(/%20/g,"+")+"#"+aA;
window.location.reload()
}else{window.location.href=aE.split("?")[0]+"?searchTerm="+encodeURIComponent(az).replace(/%20/g,"+")+"#"+aA
}}else{var aB=window.location.protocol+"//"+window.location.hostname+aE+"?searchTerm="+encodeURIComponent(az).replace(/%20/g,"+");
if(aC==aB){window.location.href=aE+"?searchTerm="+encodeURIComponent(az).replace(/%20/g,"+")+"#"+aA;
window.location.reload()
}else{window.location.href=aE+"?searchTerm="+encodeURIComponent(az).replace(/%20/g,"+")+"#"+aA
}}}});
$(document).on("keypress",function(aE){if(aE.keyCode===13){if($(".suntrust-modal-window .suntrust-nav-search .suntrust-orange-button").length>0){aE.preventDefault();
var aA=$(".suntrust-modal-window .suntrust-nav-search #header-search-input.suntrust-nav-search-input").val().trim();
var aF=$(".suntrust-modal-window .suntrust-nav-search .suntrust-orange-button").attr("href");
var az=$(".suntrust-modal-window .suntrust-nav-search .suntrust-orange-button");
var aB=typeof(az.data("search-tab"))=="undefined"?"all_results":az.data("search-tab");
var aD=window.location.href.split("#")[0];
if(aA!=""&&aF!=undefined){if(aF.indexOf("?")>=0){var aC=window.location.protocol+"//"+window.location.hostname+aF.split("?")[0]+"?searchTerm="+encodeURIComponent(aA).replace(/%20/g,"+");
if(aD==aC){window.location.href=aF.split("?")[0]+"?searchTerm="+encodeURIComponent(aA).replace(/%20/g,"+")+"#"+aB;
window.location.reload()
}else{window.location.href=aF.split("?")[0]+"?searchTerm="+encodeURIComponent(aA).replace(/%20/g,"+")+"#"+aB
}}else{var aC=window.location.protocol+"//"+window.location.hostname+aF+"?searchTerm="+encodeURIComponent(aA).replace(/%20/g,"+");
if(aD==aC){window.location.href=aF+"?searchTerm="+encodeURIComponent(aA).replace(/%20/g,"+")+"#"+aB;
window.location.reload()
}else{window.location.href=aF+"?searchTerm="+encodeURIComponent(aA).replace(/%20/g,"+")+"#"+aB
}}}}}});
$(document).on("click",".suntrust-modal-window .suntrust-nav-location .suntrust-orange-button",function(aD){aD.preventDefault();
var az=$(".suntrust-modal-window .suntrust-nav-location #locations.suntrust-nav-location-input").val().trim();
var aE=$(this).attr("href");
var aA=typeof($(this).data("search-tab"))=="undefined"?"all_results":$(this).data("search-tab");
var aC=window.location.href.split("#")[0];
if(az!=""&&aE!=undefined){if(aE.indexOf("?")>=0){var aB=window.location.protocol+"//"+window.location.hostname+aE.split("?")[0]+"?searchTerm="+encodeURIComponent(az).replace(/%20/g,"+");
if(aC==aB){window.location.href=aE.split("?")[0]+"?searchTerm="+encodeURIComponent(az).replace(/%20/g,"+")+"#"+aA;
window.location.reload()
}else{window.location.href=aE.split("?")[0]+"?searchTerm="+encodeURIComponent(az).replace(/%20/g,"+")+"#"+aA
}}else{var aB=window.location.protocol+"//"+window.location.hostname+aE+"?searchTerm="+encodeURIComponent(az).replace(/%20/g,"+");
if(aC==aB){window.location.href=aE+"?searchTerm="+encodeURIComponent(az).replace(/%20/g,"+")+"#"+aA;
window.location.reload()
}else{window.location.href=aE+"?searchTerm="+encodeURIComponent(az).replace(/%20/g,"+")+"#"+aA
}}}});
$(document).on("keypress",function(aE){if(aE.keyCode===13){if($(".suntrust-modal-window .suntrust-nav-location .suntrust-orange-button").length>0){aE.preventDefault();
var aA=$(".suntrust-modal-window .suntrust-nav-location #locations.suntrust-nav-location-input").val().trim();
var aF=$(".suntrust-modal-window .suntrust-nav-location .suntrust-orange-button").attr("href");
var az=$(".suntrust-modal-window .suntrust-nav-location .suntrust-orange-button");
var aB=typeof(az.data("search-tab"))=="undefined"?"all_results":az.data("search-tab");
var aD=window.location.href.split("#")[0];
if(aA!=""&&aF!=undefined){if(aF.indexOf("?")>=0){var aC=window.location.protocol+"//"+window.location.hostname+aF.split("?")[0]+"?searchTerm="+encodeURIComponent(aA).replace(/%20/g,"+");
if(aD==aC){window.location.href=aF.split("?")[0]+"?searchTerm="+encodeURIComponent(aA).replace(/%20/g,"+")+"#"+aB;
window.location.reload()
}else{window.location.href=aF.split("?")[0]+"?searchTerm="+encodeURIComponent(aA).replace(/%20/g,"+")+"#"+aB
}}else{var aC=window.location.protocol+"//"+window.location.hostname+aF+"?searchTerm="+encodeURIComponent(aA).replace(/%20/g,"+");
if(aD==aC){window.location.href=aF+"?searchTerm="+encodeURIComponent(aA).replace(/%20/g,"+")+"#"+aB;
window.location.reload()
}else{window.location.href=aF+"?searchTerm="+encodeURIComponent(aA).replace(/%20/g,"+")+"#"+aB
}}}}}});
$(".suntrust-resource-tags-list").each(function(az){$(this).find("span:last").remove()
});
$(".sun-checkbox-input-container").on("click",function(az){if($(this).hasClass("sun-checkbox-disabled")){az.preventDefault()
}else{if($("body .search_result_categories").length==0){$(this).find("span").toggleClass("sun-checked")
}}});
window.onpageshow=function(e){if(e.persisted){window.location.reload()
}};
var ak=navigator.userAgent.match(/iPad/i)!=null;
var h=/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor);
if(h){$(".suntrust-contactUs .suntrust-supportCall .suntrust-supportNumber").css({top:"0"});
$(".suntrust-contactUs .suntrust-supportMail .suntrust-supportEmail, .suntrust-contactUs .suntrust-supportLiveChat .suntrust-supportChat,.suntrust-contactUs .suntrust-supporthelpCenter .suntrust-supportHelpcenter").css({top:"0"});
$(".suntrust-mail .suntrust-mailPara span").css({top:"0"});
$(".suntrust-transferInstructions .suntrust-transferPara span").css({"margin-top":"0"});
$(".suntrust-contactUsCallCenter .suntrust-callcenterPara span").css({top:"0"});
$(".contactUsLstcontSec .suntrust-supportNumber").css({"line-height":"28px"});
$(".suntrust-ContactHeadTxt span").css({"vertical-align":"baseline"});
$(".suntrust-transferInstructions .suntrust-instructions .suntrust-instructionBgwhite").css({padding:"5px 5px 9px 12px"});
$(".find_input .find_search").css({padding:"12px 0 15px 0"});
$(".suntrust-promoTop .suntrust-color-border-orange").css({top:"-10px"});
$(".suntrust-promoTop .suntrust-color-border-green").css({top:"-10px"});
$(".suntrust-promoTop .suntrust-color-border-yellow").css({top:"-10px"});
$(".suntrust-promoTop .suntrust-color-border-blue").css({top:"-10px"});
$(".suntrust-promoTop .suntrust-color-border-skyblue").css({top:"-10px"});
$(".suntrust-promoTop .suntrust-color-border-pink").css({top:"-10px"});
$(".suntrust-promoTopImage .suntrust-color-border-orange").css({top:"-10px"});
$(".suntrust-promoTopImage .suntrust-color-border-green").css({top:"-10px"});
$(".suntrust-promoTopImage .suntrust-color-border-yellow").css({top:"-10px"});
$(".suntrust-promoTopImage .suntrust-color-border-blue").css({top:"-10px"});
$(".suntrust-promoTopImage .suntrust-color-border-skyblue").css({top:"-10px"});
$(".suntrust-promoTopImage .suntrust-color-border-pink").css({top:"-10px"});
$(".location_tog span").css({"margin-top":"-10px"});
$(".location_tog span.HideLoc").css({"margin-top":"-10px"});
if(window.innerWidth<768){$("#loadingMask").prev("div").find("section:first-child .container-fluid .search_result_heading").css({padding:"0 10px"});
$("#loadingMask").prev("div").find("section:not(:first-child) .row:first-child").css({padding:"0 10px"})
}}$(".suntrust-directory-horizontal-menu-item a").each(function(){var e=$(this).attr("href").trim();
if(!$(e).length){e=e.replace("#suntrust-branch-directory-","");
$(this).closest(".suntrust-directory-horizontal-menu-item").text(e)
}});
var ai;
function l(){navigator.geolocation.getCurrentPosition(function(e){startLat=e.coords.latitude;
startLng=e.coords.longitude;
$.ajax({type:"POST",url:"https://www.mapquestapi.com/geocoding/v1/address?key=Gmjtd%7Clu6zn1ua2d%2C70%3Do5-l0850&outFormat=json&location="+startLat+","+startLng,dataType:"json",success:function(aA){$.each(aA.results,function(){$.each(this,function(aB,aD){if(aB!=null&&aB!=undefined&&aB=="locations"){var aC=aD;
street=aC[0].street;
city=aC[0].adminArea5;
state=aC[0].adminArea3;
zip=aC[0].postalCode
}})
});
var az={address:street+","+city+","+state+","+zip};
console.log(az.address);
ai=az.address
},error:function(aA,az,aB){ajaxError()
}})
});
return ai
}if($("body .search_result_categories").length==0){ai=l()
}setTimeout(function(){var e=$(".branch_atm_schList").length;
$(".branch_atm_schList").each(function(az){if(az>5){return false
}var aB=$(this).attr("id").trim();
var aA=$(this).data("branch-atm-path");
aA=aA.trim()+".search.html?searchString="+encodeURIComponent(ai);
$(this).load(aA);
if(az<5&&az<(e-1)){$(this).after(" <div class='atm_schList_divider'></div>")
}if(e>6){$("div.location_result_show_more_results").show()
}})
},2000);
$("div.location_result_show_more_results a").on("click",function(){var az=$(".search_result_description_details").length;
var aB=$(".branch_atm_schList").length;
var e=5;
var aA=true;
if(az===aB){aA=false;
$("div.location_result_show_more_results").remove()
}if(aA){$(".branch_atm_schList").each(function(aC){if(aC<az){return true
}else{if(aC>(az+e)){return false
}}if(aB<=(az+e+1)){$("div.location_result_show_more_results").remove()
}if(aC===az){$(this).before(" <div class='atm_schList_divider'></div>")
}var aE=$(this).attr("id").trim();
var aD=$(this).data("branch-atm-path");
aD=aD.trim()+".search.html?searchString="+encodeURIComponent(ai);
$(this).load(aD);
if(aC!=(az+e)&&aC<(aB-1)){$(this).after(" <div class='atm_schList_divider'></div>")
}})
}});
var ac=$(".people_right_about").text().length;
ah();
$(document).on("click",".people_right_about .suntrust-secondary-button",function(){$(this).parent().parent().addClass("people_right_about_reading")
});
$(window).resize(function(){ah();
if($("header").innerHeight()>70){$("body").css("padding-top",$("header").innerHeight()+"px")
}});
function ah(){if(window.innerWidth<768){if(ac>500){$(".people_right_about .suntrust-secondary-button").parent().show()
}else{$(".people_right_about .suntrust-secondary-button").parent().hide()
}}else{$(".people_right_about .suntrust-secondary-button").parent().hide()
}}var d="";
var m=0;
$(".suntrust_account_find").each(function(){var az=0;
d=$(this).find("input[name=compareTableType]").val();
m=0;
if(d=="comparison"){$(this).find(".table_compare").each(function(){az=$(this).innerWidth();
m=$(this).find("tbody > tr:first-child td").length;
$(this).find("th.account_bg_grey").each(function(){$(this).parent().find("td").remove();
for(var aJ=0;
aJ<m;
aJ++){$(this).parent().append('<td class="account_bg_grey">&nbsp;</td>')
}});
$(this).find("th.account_bg_grey").each(function(){var aJ;
var aK;
if($(this).find("div").hasClass("table_heading_content")){aJ=$(this).find(".table_heading_content").innerHeight();
aK=aJ+30
}else{aJ=$(this).innerHeight();
aK=aJ+10
}if(h){if(aK>=70){$(this).parent().css("height",aK+"px");
$(this).css("height",aK+"px")
}}if(ak){if(aK>=70){$(this).parent().css("height",aK+"px");
$(this).css("height",aK+"px")
}}else{if(aK>50){$(this).parent().css("height",aK+"px");
$(this).css("height",aK+"px")
}else{$(this).parent().css("height","auto");
$(this).css("height","auto")
}}});
var aF=m-1;
var aE=m-3;
var aB=0;
var aH=0;
if(!$(this).parents().hasClass("suntrust-section3A")&&m>4){aH=az/5;
$(this).find("td").css("width",aH+"px");
$(this).find("tr td:nth-child(5)").css("width",(aH-2)+"px");
$(this).find("tr td:nth-child(5)").css("border-right","0");
$(this).find("th").css("width",(aH+1)+"px");
$(this).parent().css("margin-left",aH+"px")
}else{if($(this).parents().hasClass("suntrust-section3A")&&m>3){aH=az/4;
$(this).find("td").css("width",aH+"px");
$(this).find("th").css("width",(aH+2)+"px");
$(this).parent().css("margin-left",aH+"px");
if(f){$(this).find("tr td:nth-child(4)").css("width",(aH)+"px");
$(this).find("th").css("width",(aH+3)+"px");
$(this).find("tr td:nth-child(4)").css("border-right","0")
}else{$(this).find("tr td:nth-child(4)").css("width",(aH)+"px");
$(this).find("tr td:nth-child(4)").css("border-right","0")
}}else{aH=az/(m+1);
$(this).find("td").css("width",aH+"px");
$(this).find("tr td:last-child").css("width",(aH-2)+"px");
$(this).find("th").css("width",aH+"px")
}}var aI=$(this).find("tr:first-child > th").innerWidth();
$(this).parent().parent().prev().find("div:first-child").css("width",(az-aI)+"px");
if(($(this).parents().hasClass("suntrust-section3A")&&m>3)||!$(this).parents().hasClass("suntrust-section3A")&&m>4){if($(this).parent().parent().prev().hasClass("table_compare_more")){$(this).parent().parent().prev().show()
}$(".table_compare_more .table_compare_left").addClass("disabled");
$(this).removeClass("noViewMore");
if($(this).parent().hasClass("table_scroller")){$(this).parent().addClass("table_row_height")
}}else{if(($(this).parents().hasClass("suntrust-section3A")&&$(this).parent().parent().prev().hasClass("table_compare_more")&&m<=3)||(!$(this).parents().hasClass("suntrust-section3A")&&$(this).parent().parent().prev().hasClass("table_compare_more")&&m<=4)){$(this).parent().parent().prev().hide()
}}var aG=0;
if($(this).find("tr:last-child th > div").hasClass("table_heading_content")){aG=$(this).find("tr:last-child th div.table_heading_content").innerHeight();
$(this).find("tr:last-child th").css("height",(aG+31)+"px");
$(this).find("tr:last-child").css("height",(aG+31)+"px")
}else{aG=$(this).find("tr:last-child").innerHeight();
$(this).find("tr:last-child th").css("height",(aG+1)+"px");
$(this).find("tr:last-child").css("height",(aG+1)+"px")
}var aC=$(this).find("tr:nth-child(1) td:nth-child(2)").innerHeight();
var aD=$(this).find("tr:nth-child(2) td:nth-child(2)").innerHeight();
$(this).find("tr:nth-child(1) th").css("height",aC+"px");
$(this).find("tr:nth-child(2) th").css("height",aD+"px")
})
}else{var aA=0;
var e=0;
$(this).find(".table_compare").each(function(){$(this).addClass("tableComparison_Static");
$(this).find("tr").each(function(){if(!$(this).hasClass("account_bg_grey")){if($(this).find("td").length>aA){aA=$(this).find("td").length
}}if(!$(this).find("th").hasClass("account_bg_grey")){if($(this).find("td:nth-child(3)").text()!=""){e++
}}});
m=aA;
$(this).find("th.account_bg_grey").each(function(){$(this).parent().find("td").remove();
for(var aE=0;
aE<m;
aE++){$(this).parent().append('<td class="account_bg_grey">&nbsp;</td>')
}});
if(e==0){$(this).find("td:nth-child(2)").attr("colspan","2");
$(this).find("td:nth-child(3)").remove()
}$(this).find("th.account_bg_grey").each(function(){var aE;
var aF;
if($(this).find("div").hasClass("table_heading_content")){aE=$(this).find(".table_heading_content").innerHeight();
aF=aE+30
}else{aE=$(this).innerHeight();
aF=aE+10
}if(h){if(aF>=70){$(this).parent().css("height",aF+"px");
$(this).css("height",aF+"px")
}}if(ak){if(aF>=70){$(this).parent().css("height",aF+"px");
$(this).css("height",aF+"px")
}}else{if(aF>50){$(this).parent().css("height",aF+"px");
$(this).css("height",aF+"px")
}}});
var aD=m-1;
var aC=m-3;
var aB=0;
if(m>3){if($(this).parent().parent().prev().hasClass("table_compare_more")){$(this).parent().parent().prev().show()
}$(".table_compare_more .table_compare_left").addClass("disabled");
$(this).find("td").css("width","250px");
if($(this).parent().hasClass("table_scroller")){$(this).parent().addClass("table_row_height")
}}else{if($(this).parent().parent().prev().hasClass("table_compare_more")&&m<=3){$(this).parent().parent().prev().hide()
}}});
if(d=="static"&&window.innerWidth<768){$(this).find(".table_compare_mobile").show();
$(this).find(".table_compare_mobile td").removeClass("hide");
$(this).find(".table_compare_mobile td.account_bg_grey").attr("colspan",m);
$(this).find(".table_compare_mobile tr.account_odd_row td").attr("colspan",m);
if(m==1){$(this).find(".table_compare_mobile tr.account_even_row td").addClass("text-center")
}else{$(this).find(".table_compare_mobile tr.account_even_row td").removeClass("text-center");
$(this).find(".table_compare_mobile td").css("width","50%")
}}else{if(window.innerWidth<768&&($('input[name="compareTableProductCount"]').val()<=2)){$(this).find(".product_selection_details").hide();
$(this).find(".table_compare_mobile").show();
$(this).find(".table_compare_mobile").css("margin-top","0");
$(this).find(".table_compare_mobile td").removeClass("hide");
if($(this).find('input[name="compareTableProductCount"]').val()==2){$(this).find(".table_compare_mobile td").css("width","50%")
}if($(this).find('input[name="compareTableProductCount"]').val()==1){$(this).find(".table_compare_mobile td").addClass("text-center")
}}else{$(this).find(".table_compare_mobile").hide()
}}$(this).find(".table_compare_mobile").each(function(){e=0;
$(this).find("tr.account_even_row").each(function(){if($(this).find("td:last-child").text()!=""){e++
}});
if(e==0){$(this).find("tr.account_even_row td").css("text-align","center");
$(this).find("tr.account_even_row td:last-child").remove()
}});
tableCompare(d)
}});
$(".table_compare_more a.disabled").click(function(az){az.preventDefault()
});
$(".table_compare_left").click(function(){$(this).parents(".table_compare_more").next().find(".table_scroller").animate({scrollLeft:0})
});
var K=0;
$(".table_compare_right").click(function(){var aA=$(this).parents(".table_compare_more").next().find("tbody > tr:first-child td").length;
var e=$(this).parents(".table_compare_more").next().find(".table_compare tr:first-child > th").css("width");
var az=parseInt(e,10);
$(this).parents(".table_compare_more").next().find(".table_scroller").animate({scrollLeft:"+="+az});
if(!$(this).parents().hasClass("suntrust-section3A")&&aA>4){if(K<=6){K=6
}$(this).parents(".table_compare_more").next().find("tr td:nth-child("+(K-1)+")").css("border-right","1px solid #d8d8d8");
$(this).parents(".table_compare_more").next().find("tr td:nth-child("+K+")").css("border-right","0")
}else{if($(this).parents().hasClass("suntrust-section3A")&&aA>3){if(K<=5){K=5
}if(f){$(this).parents(".table_compare_more").next().find("tr td:nth-child("+(K-1)+")").css("border-right","1px solid #d8d8d8");
$(this).parents(".table_compare_more").next().find("tr td:nth-child("+K+")").css("border-right","0")
}else{$(this).parents(".table_compare_more").next().find("tr td:nth-child("+(K-1)+")").css("border-right","1px solid #d8d8d8");
$(this).parents(".table_compare_more").next().find("tr td:nth-child("+K+")").css("border-right","0")
}}else{$(this).parents(".table_compare_more").next().find("tr td:last-child").css("width",(az+2)+"px")
}}K++
});
$(function(){var e=0;
$(".table_scroller").scroll(function(){var az=$(".table_scroller");
var aC=az.scrollLeft(),aB=az.outerWidth(),aA=az.get(0).scrollWidth+1;
if(aA-aC==aB){$(this).parent().prev().find(".table_compare_right").addClass("disabled")
}else{$(this).parent().prev().find(".table_compare_right").removeClass("disabled")
}if(aC===0){$(this).parent().prev().find(".table_compare_left").addClass("disabled")
}else{$(this).parent().prev().find(".table_compare_left").removeClass("disabled")
}e=aC
})
});
$(".product_selection_details table.visible-xs").hide();
$(".compare_accounts .sun-checkbox-input-container input:checkbox").attr("checked",false);
$(".sun-checkbox-input-container input:checkbox").click(function(){d=$(this).parents(".suntrust_account_find").find("input[name=compareTableType]").val();
if(d=="comparison"){var az=$(this).parents(".compare_accounts").find(".sun-checkbox-input-container input:checkbox:checked").length;
var e;
$(this).parents(".compare_accounts").next().next().find(".table_compare_mobile").find("tr.account_even_row td").addClass("hide");
$(".sun-checkbox-input-container input:checkbox:checked").each(function(){e=parseInt($(this).attr("index"))+1;
$(this).parents(".compare_accounts").next().next().find(".table_compare_mobile").find("tr td:nth-child("+e+")").removeClass("hide")
});
if(az>0){$(this).parents(".compare_accounts").next().next().find(".table_compare_mobile").show()
}else{$(".table_compare_mobile").hide()
}if(az>=2){$('.sun-checkbox-input-container input:checkbox:not(":checked")').parents(".sun-checkbox-input-container").addClass("sun-checkbox-disabled");
$('.sun-checkbox-input-container input:checkbox:not(":checked")').attr("disabled",true)
}else{$('.sun-checkbox-input-container input:checkbox:not(":checked")').parents(".sun-checkbox-input-container").removeClass("sun-checkbox-disabled");
$('.sun-checkbox-input-container input:checkbox:not(":checked")').attr("disabled",false)
}$(this).parents(".compare_accounts").find(".table_compare_mobile td.account_bg_grey").attr("colspan",az);
$(this).parents(".compare_accounts").find(".table_compare_mobile tr.account_odd_row td").attr("colspan",az);
if(az==1){$(this).parents(".compare_accounts").next().next().find(".table_compare_mobile").find("tr.account_even_row td").addClass("text-center");
$(this).parents(".compare_accounts").next().next().find(".table_compare_mobile").css("width","99.99%");
$(this).parents(".compare_accounts").next().next().find(".table_compare_mobile").find("tr.account_even_row td").css("width","100%")
}else{if(az==2){$(this).parents(".compare_accounts").next().next().find(".table_compare_mobile").find("tr.account_even_row td").removeClass("text-center");
$(this).parents(".compare_accounts").next().next().find(".table_compare_mobile").find("tr.account_even_row td").css("width","50%")
}}}});
$(window).resize(function(){$(".suntrust_account_find").each(function(){tableStyleState=$(this).find("input[name=compareTableType]").val();
var e=0;
var az=0;
if(tableStyleState=="static"&&window.innerWidth<768){$(this).find(".table_compare_mobile tbody tr").each(function(){if(!$(this).hasClass("account_bg_grey")){if($(this).find("td").length>e){e=$(this).find("td").length
}}});
$(this).find(".table_compare_mobile").show();
$(this).find(".table_compare_mobile td").removeClass("hide");
$(this).find(".table_compare_mobile td.account_bg_grey").attr("colspan",e);
$(this).find(".table_compare_mobile tr.account_odd_row td").attr("colspan",e);
if(az==1){$(this).find(".table_compare_mobile tr.account_even_row td").addClass("text-center")
}else{$(this).find(".table_compare_mobile tr.account_even_row td").removeClass("text-center");
$(this).find(".table_compare_mobile td").css("width","50%")
}tableCompare(tableStyleState)
}else{if((tableStyleState=="static"||tableStyleState=="comparison")&&window.innerWidth>=768){if(tableStyleState=="comparison"){$(this).find(".table_compare").each(function(){$(this).find("th").css("width","auto");
$(this).find("td").css("width","auto");
comparisonWidth=$(this).parent().parent().innerWidth();
az=$(this).find("tbody > tr:first-child td").length;
var aA=0;
if(!$(this).parents().hasClass("suntrust-section3A")&&az>4){aA=comparisonWidth/5;
$(this).find("td").css("width",aA+"px");
$(this).find("tr td:nth-child(5)").css("width",(aA-2)+"px");
$(this).find("tr td:nth-child(5)").css("border-right","0");
$(this).find("th").css("width",(aA+1)+"px");
$(this).parent().css("margin-left",aA+"px")
}else{if($(this).parents().hasClass("suntrust-section3A")&&az>3){aA=comparisonWidth/4;
$(this).find("td").css("width",aA+"px");
$(this).find("th").css("width",(aA+2)+"px");
$(this).parent().css("margin-left",aA+"px");
if(f){$(this).find("tr td:nth-child(4)").css("width",(aA)+"px");
$(this).find("th").css("width",(aA+3)+"px");
$(this).find("tr td:nth-child(4)").css("border-right","0")
}else{$(this).find("tr td:nth-child(4)").css("width",(aA)+"px");
$(this).find("tr td:nth-child(4)").css("border-right","0")
}}else{aA=comparisonWidth/(az+1);
$(this).find("td").css("width",aA+"px");
$(this).find("tr td:last-child").css("width",(aA-2)+"px");
$(this).find("th").css("width",aA+"px")
}}var aB=$(this).find("tr:first-child > th").innerWidth();
$(this).parent().parent().prev().find("div:first-child").css("width",(comparisonWidth-aB)+"px");
if(($(this).parents().hasClass("suntrust-section3A")&&az>3)||!$(this).parents().hasClass("suntrust-section3A")&&az>4){if($(this).parent().parent().prev().hasClass("table_compare_more")){$(this).parent().parent().prev().show()
}$(".table_compare_more .table_compare_left").addClass("disabled");
$(this).removeClass("noViewMore");
if($(this).parent().hasClass("table_scroller")){$(this).parent().addClass("table_row_height")
}}else{if(($(this).parents().hasClass("suntrust-section3A")&&$(this).parent().parent().prev().hasClass("table_compare_more")&&az<=3)||(!$(this).parents().hasClass("suntrust-section3A")&&$(this).parent().parent().prev().hasClass("table_compare_more")&&az<=4)){$(this).parent().parent().prev().hide()
}}})
}$(this).find(".table_compare_mobile").hide()
}else{if(window.innerWidth<768&&($(this).find('input[name="compareTableProductCount"]').val()<=2)){$(this).find(".product_selection_details").hide();
$(this).find(".table_compare_mobile").show();
$(this).find(".table_compare_mobile").css("margin-top","0");
$(this).find(".table_compare_mobile td").removeClass("hide");
if($(this).find('input[name="compareTableProductCount"]').val()==2){$(this).find(".table_compare_mobile td").css("width","50%")
}if($(this).find('input[name="compareTableProductCount"]').val()==1){$(this).find(".table_compare_mobile td").addClass("text-center")
}}}}})
});
$(document).on("click",".location_tog",function(){$(this).next().slideToggle();
if($(this).find("strong").text()=="Show Locations"){$(this).find("strong").text("Hide Locations");
$(this).find("span").text("-");
$("span").removeClass("HideLoc")
}else{if($(this).find("strong").text()=="Hide Locations"){$(this).find("strong").text("Show Locations");
$(this).find("span").text("+");
$("span").addClass("HideLoc")
}}});
$(document).on("click",'[data-suntrust-class="suntrust-nav-search"]',function(){$(".suntrust-modal-window,.suntrust-nav-search").show().focus();
$(".suntrust-nav-location").hide()
});
$(document).on("click",'[data-suntrust-class="suntrust-nav-location"]',function(){$(".suntrust-modal-window,.suntrust-nav-location").show().focus();
$(".suntrust-nav-search").hide()
});
$(document).on("click",'[data-suntrust-class="suntrust-modal-close"]',function(){$(this).parents(".suntrust-modal-window").hide();
$(this).parents(".suntrust-modal-window").find('[type="search"]').typeahead("val","");
$(this).parents(".suntrust-modal-window").find('[data-sun-class="search-cancel-button"]').removeClass("sun-active");
if($(this).parents(".suntrust-nav-search").is(".suntrust-nav-search")){$('[data-suntrust-class="suntrust-nav-search"]').focus()
}else{$('[data-suntrust-class="suntrust-nav-location"]').focus()
}});
searchTxt=$(".suntrust-nav-search,.suntrust-nav-location,.search_text_box_reset");
searchTxt.find('[data-sun-type="search-cancel-button"]').click(function(aA){var az=$(this);
aA.preventDefault(),az.removeClass("sun-active"),az.prev().find("input").typeahead("val","").focus(),$(".suntrust-autocomplete").empty()
}),searchTxt.find('[type="search"]').keyup(function(){var e=$(this),az=$(this).parent().next(),aA=e.val().length;
aA>0?az.addClass("sun-active"):az.removeClass("sun-active")
});
var q=500,ad;
$(document).on("mouseenter hover",".suntrust-subMenu li.suntrust-subMenuList",function(){console.log("On Mouse Hover before timeOut function");
var e=$(this);
ad=setTimeout(function(){console.log("On Mouse Hover >>inside<< timeOut function");
$(".suntrust-overlayContent").addClass("hide");
$(".suntrust-topArrow").addClass("hide");
e.find(".suntrust-overlayContent").removeClass("hide");
e.find(".suntrust-topArrow").removeClass("hide");
if($(this).find(".col-lg-12 .col-lg-3").length==3){$(this).find(".suntrust-emptydiv .col-lg-3:first-child").css("margin-left","135px")
}else{$(this).find(".suntrust-emptydiv .col-lg-3:first-child").css("margin-left","0px")
}$(".suntrust-comboBoxloans").blur()
},q)
});
$(document).on("focus",".suntrust-subMenu li.suntrust-subMenuList",function(){$(".suntrust-overlayContent").addClass("hide");
$(".suntrust-topArrow").addClass("hide");
$(this).find(".suntrust-overlayContent").removeClass("hide");
$(this).find(".suntrust-topArrow").removeClass("hide");
if($(this).find(".col-lg-12 .col-lg-3").length==3){$(this).find(".suntrust-emptydiv .col-lg-3:first-child").css("margin-left","135px")
}else{$(this).find(".suntrust-emptydiv .col-lg-3:first-child").css("margin-left","0px")
}$(".suntrust-comboBoxloans").blur()
});
$(document).on("mouseleave",".suntrust-subMenu li.suntrust-subMenuList",function(){clearTimeout(ad);
$(this).children().next(".suntrust-overlayContent").addClass("hide");
$(this).children().next(".suntrust-topArrow").addClass("hide")
});
$(document).keyup(function(az){if(az.keyCode===27){$(".suntrust-overlayContent").addClass("hide");
$(".suntrust-topArrow").addClass("hide")
}});
$(".suntrust-overlayContent").on("focus","h4",function(){$(this).removeClass("active");
$(this).addClass("active");
$(this).prev().removeClass("active");
$(this).next().children().removeClass("listactive")
}).on("blur","h4",function(az){$(this).removeClass("active");
$(".suntrust-headingText").next().children().removeClass("listactive")
}).on("keydown","h4",function(az){$this=$(this);
if(az.keyCode==40){$this.next().focus();
return false
}else{if(az.keyCode==38){$this.prev().focus();
return false
}}});
$(".suntrust-overlayContent").on("focus","li",function(){$(this).removeClass("listactive");
$(":last-child").removeClass("listactive");
$(this).prev().removeClass("listactive");
$(this).next().removeClass("listactive");
$(this).addClass("listactive");
$(this).parent().prev().removeClass("active");
$(this).parent().next().removeClass("active")
}).on("blur","li",function(az){$(this).removeClass("active");
$(".suntrust-headingText").next().children().removeClass("listactive")
}).on("keydown","li",function(az){$this=$(this);
if(az.keyCode==40){$this.next().focus();
return false
}else{if(az.keyCode==38){$this.prev().focus();
return false
}}});
var aq=$(".suntrust-overlayContent .suntrust-column-width").last();
var I=aq.children("h4").last();
var ab=aq.children("ul").children().last();
if(I.siblings().children().size()===0){I.on("focusout",function(){$(".suntrust-overlayContent").addClass("hide");
$(".suntrust-topArrow").addClass("hide")
})
}else{ab.on("focusout",function(){$(".suntrust-overlayContent").addClass("hide");
$(".suntrust-topArrow").addClass("hide")
})
}var U=$(".suntrust-subMenuList:first-child a").first();
U.keydown(function(az){if(az.shiftKey&&az.keyCode==9){$(".suntrust-overlayContent").addClass("hide");
$(".suntrust-topArrow").addClass("hide")
}});
var G=$(".suntrust-headingText");
G.keydown(function(az){if(az.shiftKey&&az.keyCode==9){$(this).removeClass("active")
}});
$("html").on("click",function(){$(".suntrust-overlayContent").addClass("hide");
$(".suntrust-topArrow").addClass("hide");
if(ak){if(h){if($(".rowcontainerresp .video").is(":visible")){setTimeout(function(){var e=$(".s7innercontainer").attr("mode");
if(e=="fullscreen"){$(".suntrust-wrapperContainer, .suntrust-rowContainer").css({overflow:"visible"})
}else{$(".suntrust-wrapperContainer, .suntrust-rowContainer").css({overflow:"hidden"})
}e=""
},500)
}}}});
$(document).on("click",".suntrust-overlayContent .suntrust-overlayItem ul li",function(){$(".suntrust-overlayContent .suntrust-overlayItem ul li").removeClass("suntrust-selected");
$(this).addClass("suntrust-selected");
$(".suntrust-subMenuList").removeClass("active")
});
$(document).on("click",".suntrust-overlayContent .suntrust-overlayItem .suntrust-headingText",function(){$(".suntrust-overlayContent .suntrust-overlayItem .suntrust-headingText").removeClass("suntrust-selected");
$(this).addClass("suntrust-selected");
$(".suntrust-subMenuList").removeClass("active")
});
$(document).on("click",".suntrust-subMenu li.suntrust-subMenuList",function(){window.location=$(this).find("a.suntrust-subMenuanchor").first().attr("href");
$(".suntrust-subMenu li").removeClass("active");
$(this).addClass("active");
$(".suntrust-overlayContent").addClass("hide");
$(".suntrust-activeList").show()
});
$(document).on("click",".suntrust-levelHolder .suntrust-levelBodysection .suntrust-levelBodyItems.suntrust-levelOne li",function(){$(".suntrust-levelHolder .suntrust-levelBodysection .suntrust-levelBodyItems.suntrust-levelOne li").removeClass("selected");
$(this).parent().hide();
$(this).addClass("selected")
});
$(document).on("click",".suntrust-levelTwo .suntrust-viewBack",function(){$(this).parent().hide();
$(this).parents().find(".suntrust-levelBodysection").children().eq(0).show()
});
$(document).on("click",".suntrust-levelHolder .suntrust-levelBodysection .suntrust-levelBodyItems.suntrust-levelTwo li",function(){$(".suntrust-levelHolder .suntrust-levelBodysection .suntrust-levelBodyItems.suntrust-levelTwo li").removeClass("selected");
$(this).parent().hide();
$(this).addClass("selected")
});
$(window).resize(function(){$("ul.suntrust-dynamic-width").each(function(){var az=-1;
var e=$(this).find("li").length;
var aA=$(this);
suntrustdynamicwidth(e,aA,az)
});
$("ul.suntrust-feature-list-details.suntrust-four-col-info").each(function(){var aA=$(this);
var az=-1;
var e=$(this).find("li").length;
setTimeout(function(){suntrustfourcolwidth(e,aA,az)
},400)
})
});
$("ul.suntrust-dynamic-width").each(function(){var az=-1;
var e=$(this).find("li").length;
var aA=$(this);
suntrustdynamicwidth(e,aA,az)
});
$("ul.suntrust-feature-list-details.suntrust-four-col-info").each(function(){var aA=$(this);
var az=-1;
var e=$(this).find("li").length;
setTimeout(function(){suntrustfourcolwidth(e,aA,az)
},400)
});
if($("body").height()<=$(window).height()){$(".scroll-arrow-indicator").hide()
}var p=250;
if($("#scroll-indicator").length>0){$(document).on("click","#scroll-indicator",function(az){az.preventDefault();
if(($(this).data("isClicked")=="undefined")||!$(this).data("isClicked")){var e=$(this);
e.data("isClicked",true);
$("html, body").animate({scrollTop:"+="+$(window).height()},1000);
setTimeout(function(){e.removeData("isClicked")
},1000);
setTimeout(function(){if(document.body.scrollTop+p>document.body.scrollHeight){$("#scroll-indicator").hide()
}else{}},p)
}})
}$(window).scroll(function(){if(document.body.scrollTop+p<document.body.scrollHeight){$(".scroll-arrow-indicator").show()
}if((window.innerHeight+window.scrollY)>=document.body.offsetHeight){$(".scroll-arrow-indicator").hide()
}});
$(".suntrust-waive-component-vertical").each(function(){var e=$(this).find(".sun-bodytext-conjunction_item").length;
if(e==2){if(window.innerWidth>600){$(this).find(".sun-bodytext-conjunction_item").each(function(){$(this).css({width:"47%"})
})
}}});
$(window).resize(function(){$(".suntrust-waive-component-vertical").each(function(){var e=$(this).find(".sun-bodytext-conjunction_item").length;
if(e==2){if(window.innerWidth>600){$(this).find(".sun-bodytext-conjunction_item").each(function(){$(this).css({width:"47%"})
})
}else{$(this).find(".sun-bodytext-conjunction_item").each(function(){$(this).css({width:"100%"})
})
}}})
});
$(".suntrust-stepsContainer ul").each(function(){var az=$(this).find("li").length;
var e;
if(window.innerWidth>767){if(az>=2&&az<4){e=(100/az)
}else{if(az==1){e=100
}}$(this).find("li").css("width",e+"%")
}});
$(window).resize(function(){$(".suntrust-stepsContainer ul").each(function(){var az=$(this).find("li").length;
var e;
if(window.innerWidth>767){if(az>=2&&az<4){e=(100/az)
}else{if(az==1){e=100
}}$(this).find("li").css("width",e+"%")
}else{$(this).find("li").removeAttr("style")
}})
});
$(".find_search").click(function(){var e=$(this).closest(".find_input").find(".suntrust_find_input");
var az=e.val();
if(az.trim()==""){e.addClass("no-valid")
}else{e.removeClass("no-valid")
}});
setTimeout(function(){if(($("span, div").hasClass("suntrust-invoca-hide"))){$("span.suntrust-invoca-hide, div.suntrust-invoca-hide").removeClass("suntrust-invoca-hide")
}},1800);
$("div.featuredcontresp").last().addClass("bottomMargin");
$("div.featuredcontresp").first().addClass("topMargin");
$("header.navbar-fixed-top").autoHidingNavbar({showOnBottom:false});
$(".suntrust-search-form").on("submit",function(az){az.preventDefault()
});
$(".component-dynamic-summarylist").each(function(){var az=$(this).find("li").length;
var e=parseInt($(this).find(".load-more button").attr("data-visible-items-limit"));
$(this).find("li:lt("+e+")").show();
if(az<=e){$(this).find(".load-more").hide()
}});
$(".suntrust-load-more").click(function(){var az=parseInt($(this).attr("data-visible-items-limit"));
var e=$(this).parents(".component-dynamic-summarylist").find("li:visible").length;
var aA=$(this).parents(".component-dynamic-summarylist").find("li").length;
e=(e+az<=aA)?e+az:aA;
$(this).parents(".component-dynamic-summarylist").find("li:lt("+e+")").show();
if(e>=aA){$(this).parent(".load-more").hide()
}});
var al=$("#showTranscript .suntrust-video-transcript-accordion");
var F,v;
function ay(){F.parent("#showTranscript").next("#hideTranscript").show();
F.parent("#showTranscript").next("#hideTranscript").find(".suntrust-video-accordion-section").show();
F.parent("#showTranscript").next("#hideTranscript").find(".suntrust-video-transcript-accordion").addClass("active");
F.parent("#showTranscript").hide()
}function k(){v.parent("#hideTranscript").prev("#showTranscript").show();
v.parent("#hideTranscript").hide();
v.parent("#hideTranscript").find(".suntrust-video-accordion-section").hide();
F.parent("#hideTranscript").find(".suntrust-video-transcript-accordion").removeClass("active")
}al.on("click",function(){F=$(this);
ay(F)
});
var au=$("#hideTranscript .suntrust-video-transcript-accordion");
au.on("click",function(){v=$(this);
k(v)
});
al.on("keypress",function(az){if(az.which==13){F=$(this);
ay(F)
}});
au.on("keypress",function(az){if(az.which==13){v=$(this);
k(v)
}});
var C=$("#showAudioTranscript .suntrust-audio-transcript-accordion");
var ar,an;
C.on("click",function(){ar=$(this);
ag(ar)
});
C.on("keypress",function(az){if(az.which==13){ar=$(this);
ag(ar)
}});
var Y=$("#hideAudioTranscript .suntrust-audio-transcript-accordion");
Y.on("click",function(){an=$(this);
ap(an)
});
Y.on("keypress",function(az){if(az.which==13){an=$(this);
ap(an)
}});
function ag(){ar.parent("#showAudioTranscript").next("#hideAudioTranscript").show();
ar.parent("#showAudioTranscript").next("#hideAudioTranscript").find(".suntrust-audio-accordion-section").show();
ar.parent("#showAudioTranscript").next("#hideAudioTranscript").find(".suntrust-audio-transcript-accordion").addClass("active");
ar.parent("#showAudioTranscript").hide()
}function ap(){an.parent("#hideAudioTranscript").prev("#showAudioTranscript").show();
an.parent("#hideAudioTranscript").prev("#showAudioTranscript").find(".suntrust-audio-accordion-section").show();
an.parent("#hideAudioTranscript").hide()
}if($(".contactus").is(":visible")){var j=$(".suntrust-mailPara img").attr("aria-label");
if(j!=null&&j!=undefined){j=j.toLowerCase()
}if(j==="mail"){$(".suntrust-mailQuestions").next().addClass("suntrust-mailAddress")
}else{$(".suntrust-mailQuestions").next().removeClass("suntrust-mailAddress").addClass("suntrust-mailWithout")
}}function z(){$(document).on("click",'[data-suntrust-class="suntrust-menu-trigger"]',function(){bA();
$(".suntrust-levelHolder").show().animate({left:"0px"});
setTimeout(function(){$("body").addClass(aH)
},350)
});
$(document).on("click",".suntrust-onclose",function(){$(".suntrust-levelHolder").animate({left:"-320px"});
$("body").removeClass(aH)
});
$('[data-suntrust-class="header"] select, .suntrust-main-content select, .suntrust-select,.suntrust-bank-segment ').uniform({selectClass:"sun-select-container",selectAutoWidth:false}).each(function(){$(this).siblings("span").attr("aria-hidden",true)
});
function bC(){(function(){document.cookie="___tk89230="+encodeURIComponent(new Date().valueOf())+";path=/;domain=suntrust.com"
})();
(function(){var bK=document,bL=window,bI=bL.location.protocol,bH=bK.createElement("script"),bJ=bK.getElementsByTagName("head")[0];
bH.src=(bI=="https:"?"https://":"http://")+"www7-test.suntrust.com/89230/assets.js?r="+Math.random();
bH.async=true;
setTimeout(function(){bH.type="text/javascript";
bJ.appendChild(bH)
},0)
})();
(function(){var bL=window,bK=document,bI=bL.location.protocol,bJ=bK.getElementsByTagName("head")[0],bH=bK.createElement("script");
bH.src=(bI=="https:"?"https://":"http://")+"wex8-test.suntrust.com/exfolder/topHeader.js?r="+Math.random();
bH.async=true;
setTimeout(function(){bH.type="text/javascript";
bJ.appendChild(bH)
},0)
})()
}function a8(){(function(){document.cookie="___tk89231="+encodeURIComponent(new Date().valueOf())+";path=/;domain=suntrust.com"
})();
(function(){var bK=document,bL=window,bI=bL.location.protocol,bH=bK.createElement("script"),bJ=bK.getElementsByTagName("head")[0];
bH.src=(bI=="https:"?"https://":"http://")+"www7.suntrust.com/89231/assets.js?r="+Math.random();
bH.async=true;
setTimeout(function(){bH.type="text/javascript";
bJ.appendChild(bH)
},0)
})();
(function(){var bL=window,bK=document,bI=bL.location.protocol,bJ=bK.getElementsByTagName("head")[0],bH=bK.createElement("script");
bH.src=(bI=="https:"?"https://":"http://")+"wex8.suntrust.com/exfolders/topHeader.js?r="+Math.random();
bH.async=true;
setTimeout(function(){bH.type="text/javascript";
bJ.appendChild(bH)
},0)
})()
}function bl(){var bH=$("select.suntrust-bank-segment").val();
if(bH=="signonblade-OLB"){$("#suntrust-login-form .suntrust-login-onlinebanking-form,.online-banking").removeClass("hidden");
$("#suntrust-login-form .suntrust-login-onlinecashmanager-form,.online-cash-manager").addClass("hidden")
}else{if(bH=="signonblade-OCM"){$("#suntrust-login-form .suntrust-login-onlinecashmanager-form,.online-cash-manager").removeClass("hidden");
$("#suntrust-login-form .suntrust-login-onlinebanking-form,.online-banking").addClass("hidden");
if($("div#SignOn-signonblade-OCM").attr("data-ocm-trusteer-enabled")=="enabled"){if($("div#SignOn-signonblade-OCM").hasClass("aem-runmode-non-prod-ocm")){bC()
}else{if($("div#SignOn-signonblade-OCM").hasClass("aem-runmode-prod-ocm")){a8()
}}}}}}bl();
$("select.suntrust-bank-segment").change(function(){bl()
});
var bg=$('div[data-suntrust-class="suntrust-main"]');
if(bg.length>0){var aX=$("#suntrust-page");
var bm=$("#suntrust-login-form-herosignon");
var bp=false;
var aW;
if($("html").hasClass("ie8")||$("body").hasClass("ie8")){aW=true
}else{aW=false
}$.uniform.update("#segment");
var bu={olbCookie:get_cookieNoUnescape("OLBRMdata"),olbMaskedValue:"",olbEncryptedValue:"",olbValid:false,optionCookie:getCookie("HeroSignOnOption"),optionValid:false,olbIsEncrypted:function(){if(bu.olbCookie!=null&&bu.olbCookie!=""&&bu.olbEncryptedValue!=""&&bu.olbMaskedValue!=""){return true
}return false
}};
var aZ=bm.find("input.suntrust-bank-segment-herosignon-radio");
if(aZ.length>0){if(bu.optionCookie==null||bu.optionCookie==""){console.log("1");
aZ[0].checked=true
}else{for(i=0;
i<aZ.length;
i++){if(aZ[i].id==bu.optionCookie){console.log("2");
aZ[i].checked=true;
break
}else{console.log("3");
aZ[0].checked=true
}}}if(bu.optionCookie!=null&&bu.optionCookie!=""){var be=bu.optionCookie;
var aM=be.split("-");
var aG=bm.find("#SignOn-"+be);
var aY=$(".suntrust-more-services-wrapper[id=OtherServices-signonblade-"+aM[1]+"]");
var bi=$(".suntrust-app-banner-wrapper[id=MobileApps-"+be+"]");
if(aG.length>0){bm.find("div.suntrust-signon-login-form").addClass("hidden-hero-signon");
aG.removeClass("hidden-hero-signon");
$("div.suntrust-more-services-wrapper").addClass("hidden-hero-signon");
aY.removeClass("hidden-hero-signon");
$("div.suntrust-app-banner-wrapper").addClass("hidden-hero-signon");
bi.removeClass("hidden-hero-signon");
aZ.val(be)
}}$.uniform.update(aZ);
if(bu.olbCookie!=null&&bu.olbCookie!=""){var bq=bu.olbCookie.replace("maskedValue=","").replace("encryptedValue=","").split("&");
if(bq.length>=2){bu.olbMaskedValue=bq[0];
bu.olbEncryptedValue=bq[1];
if(bu.olbIsEncrypted()){bu.olbValid=true;
var bo=$(".signOnLoginForm[data-apptype='OLB']");
var by=$(".signOnLoginForm[data-apptype='OLB'][data-appid='"+bu.optionCookie+"']");
var az=bo.find(".suntrust-login-user-input");
if(bu.optionValid&&bu.optionCookie=="OLB"){$(function(){var bH=by.find(".suntrust-login-password-herosignon");
bH.siblings("label").hide()
})
}az.val(bu.olbMaskedValue);
az.siblings(".suntrust-login-hidden-user-id").val(bu.olbEncryptedValue);
az.siblings(".suntrust-login-input-is-encrypted").val("true");
az.siblings("label").hide();
var a9=bo.find(".suntrust-login-checkbox");
if(a9.length>0){a9.attr("checked",true);
$.uniform.update(a9)
}}}}bm.find(".suntrust-login-input").click(function(){$(this).select()
});
aZ.change(function(){var bN=this.id;
var bM=bN.split("-");
var bI=bm.find("#SignOn-"+bN);
var bJ=$(".suntrust-more-services-wrapper[id=OtherServices-signonblade-"+bM[1]+"]");
var bH=$(".suntrust-app-banner-wrapper[id=MobileApps-"+bN+"]");
if(bI.length>0){bm.find("div.suntrust-signon-login-form").addClass("hidden-hero-signon");
bI.removeClass("hidden-hero-signon");
$("div.suntrust-more-services-wrapper").addClass("hidden-hero-signon");
bJ.removeClass("hidden-hero-signon");
$("div.suntrust-app-banner-wrapper").addClass("hidden-hero-signon");
bH.removeClass("hidden-hero-signon")
}if(aW){var bK=document.getElementsByTagName("head")[0],bL=document.createElement("style");
bL.type="text/css";
bL.styleSheet.cssText=":before,:after{content:none !important";
bK.appendChild(bL);
setTimeout(function(){bK.removeChild(bL)
},0)
}});
var bs=bm.find(".suntrust-login-button-herosignon");
bs.off("click").on("click",function(b3){b3.preventDefault();
aG=$(this).closest("form.signOnLoginForm");
var bZ=true;
aG.find(".suntrust-login-input").removeClass("sun-error");
aG.find(".suntrust-login-input").each(function(){var b4=$(this);
if($.trim(b4.val()).length==0||(b4.is(".suntrust-login-user-input")&&$.trim(b4.val())==b4.attr("placeholder"))){b4.addClass("sun-error");
bZ=false
}});
if(bZ){console.log("Sign on click after propagation");
$(this).attr("disabled",true);
var bY={expire:30,secure:window.location.protocol=="https:"?true:false,domain:null,path:"/"};
var bR=aG.data("appid");
var bJ=aG.data("apptype");
var bO=aG.data("gateway");
setCookie("HeroSignOnOption",bR,bY.expire,bY.path,bY.domain,bY.secure);
var bN=aG.find(".suntrust-login-password-herosignon");
var bQ=aG.find(".suntrust-login-user-input");
var bH=aG.find(".suntrust-login-hidden-user-id");
var bS=aG.find(".suntrust-trk-input");
var bX=aG.find(".suntrust-login-input-is-encrypted");
var bW=bN.siblings(".hiddenPublicKey");
if(bO=="11g"&&bW.length>0){var bK=KEYUTIL.getRSAKeyFromPublicPKCS8PEM(bW.val());
var bI=bK.encrypt(bN.val());
bI=hex2b64(bI);
bN.siblings(".hiddenPassword").val(bI);
if(bX.val()=="true"&&bQ.val()!=bu.olbMaskedValue){var bL=bK.encrypt(bQ.val());
bL=hex2b64(bL);
bQ.siblings(".suntrust-login-hidden-user-id").val(bL);
bS.val(P(bQ.val()))
}else{if(bX.val()=="false"){if(bQ.val()!=bu.olbMaskedValue){bQ.siblings(".suntrust-login-hidden-user-id").val(bQ.val());
bS.val(P(bQ.val()))
}else{var bL=bK.encrypt(bQ.val());
bL=hex2b64(bL);
bQ.siblings(".suntrust-login-hidden-user-id").val(bL);
var bP=P(bH.val());
var b0=T("OLBRMdata");
if(b0!=undefined){var b2=aj(b0);
if(b2!=null){bP=b2
}}bS.val(bP)
}}}}else{bN.siblings(".hiddenPassword").val(bN.val())
}var bM=aG.find(".suntrust-login-user-input");
if(bX.val()=="true"&&(bu.olbCookie!=null&&bu.olbCookie!="")&&bM.val()==bu.olbMaskedValue){$('form[name="herosignon-OLB"] input[name="rmUsernameSet"]').val("true");
var bP=P(bH.val());
var b0=T("OLBRMdata");
if(b0!=undefined){var b2=aj(b0);
if(b2!=null){bP=b2
}}bS.val(bP)
}if(bJ!="OLB"){bM.siblings(".suntrust-login-hidden-user-id").val(bM.val());
bM.siblings(".suntrust-login-input-is-encrypted").val("false")
}var bV=aG.find(".suntrust-login-checkbox");
if(bV.length>0&&bJ=="OLB"){var bU=bV.closest(".suntrust-remember-me-field").find(".suntrust-login-checkbox-hidden");
if(bV.is(":checked")){bU.val("true")
}else{bU.val("false");
delete_cookie("OLBRMdata")
}}var b1="";
try{b1=getDeviceDetails()
}catch(bT){console.log("Exception caught in calling getDeviceDetails() : "+bT.message)
}if(b1!=null){$('form[name="loginForm-herosignon-OCM"] input[name="devicedetails"]').val(b1)
}else{$('form[name="loginForm-herosignon-OCM"] input[name="devicedetails"]').val("")
}aG.submit()
}});
$(document).on("keypress","#SignOn-herosignon-OLB .suntrust-login-input, #SignOn-herosignon-OCM .suntrust-login-input",function(bH){if(bH.which==13){bs.trigger("click");
$(".suntrust-login-button-herosignon, #SignOn-herosignon-OLB .suntrust-login-input, #SignOn-herosignon-OCM .suntrust-login-input").attr("disabled",true);
bH.stopImmediatePropagation()
}})
}}var aF={init:function(bI){aF.config={isIE8:$("body").hasClass("ie8"),isLtIE10:$("body").hasClass("lt-ie10"),throttleTime:250,calcFormDataSet:{dataElements:["PropertyPrice","PropertyDownPayment","CurrentValueOfHome","AmountToRefinance"],PropertyPrice:{inputDefault:0,min:0,max:5000000,decPoints:2},PropertyDownPayment:{inputDefault:0,min:0,max:10000000,decPoints:2},CurrentValueOfHome:{inputDefault:0,min:0,max:10000000,decPoints:2},AmountToRefinance:{inputDefault:0,min:0,max:100000000,decPoints:2}}};
if(aF.config.isIE8){aF.reloadIcons()
}aF.initSkipNavigation();
var bJ=$("#container-header");
if(bJ.length>0&&bJ.hasClass("sun-header")){aF.initHeader()
}aF.initSearch();
aF.initUniform();
aF.initDropdownCTA();
aF.initVideo();
aF.initFAQ();
aF.initSlider();
var bH=$(window).width();
aF.initGeolocation();
aF.initContactUs();
aF.initLoadMore();
if(typeof deviceDetection!=="undefined"){$(deviceDetection.selector).removeClass("sun-global-app-element")
}$("div.suntrust-embed-form").each(function(){aF.initExternalForm($(this))
});
$("form.sun-right-rail-promo-calculator-form").each(function(){aF.initCalculatorPromo($(this))
});
$("form.suntrust-validation-form").each(function(){aF.initValForm($(this))
});
$("form.suntrust-people-finder-promotion").each(function(){aF.initPeopleFinderPromo($(this))
});
$("form.sun-right-rail-advisor-promo").each(function(){aF.initLOFinderPromo($(this))
});
aF.initComparisonChart();
$("a[data-popup-window]").click(function(bL){bL.preventDefault();
var bK=$(this);
aF.openWindow(bK.attr("href"),bK.data("popup-window"))
});
aF.initAccordion()
},reloadIcons:function(){var bH=document.getElementsByTagName("head")[0],bI=document.createElement("style");
bI.type="text/css";
bI.styleSheet.cssText=":before,:after{content:none !important";
bH.appendChild(bI);
setTimeout(function(){bH.removeChild(bI)
},0)
},initSkipNavigation:function(){var bH=$("#skip-nav");
bH.find(".skip-nav-link").focus(function(){$("#skip-nav").addClass("sun-active")
});
bH.find(".skip-nav-link").blur(function(){$("#skip-nav").removeClass("sun-active")
})
},initHeader:function(){$('[data-sun-class="search-and-mobile-menu-container-toggle"]').on("click",$(document),function(){var bI=$(this),bH=$('[data-sun-class="search-and-mobile-menu-container"]');
bI.toggleClass("sun-active");
bH.toggleClass("sun-active")
});
$('[data-sun-class="sun-header-search-form-toggle"]').on("click",$(document),function(){var bH=$('[data-sun-class="sun-header-search-form"]');
bH.toggleClass("sun-active");
if(aF.config.isIE8){aF.reloadIcons()
}});
$("[data-sun-toggle-overlay-target]").on("click",$(document),function(){var bJ=$(this),bH=bJ.data("sun-toggle-overlay-target"),bI=$('[data-sun-class="toggle-overlay"]');
bI.addClass("sun-active").data("sun-target",bH)
});
$('[data-sun-class="toggle-overlay"]').on("click",$(document),function(){var bI=$(this),bH=$('[data-sun-class="'+bI.data("sun-target")+'"]');
bI.removeClass("sun-active");
bH.removeClass("sun-active");
if(aF.config.isIE8){aF.reloadIcons()
}$(".sun-header-search-cancel-button").removeClass("sun-active")
})
},initSearch:function(){var bI;
$('[data-sun-type="search-cancel-button"]').on("click",$(document),function(bK){var bJ=$(this);
bK.preventDefault();
bJ.removeClass("sun-active");
bJ.prev("input").val("").focus();
$(".suntrust-autocomplete").empty()
});
$('[type="search"]').on({keyup:function(){var bK=$(this),bJ=bK.val().length;
if(bJ>0){bI.addClass("sun-active")
}else{bI.removeClass("sun-active")
}},focus:function(){var bJ=$(this);
bI=bJ.next('[data-sun-class="search-cancel-button"]');
bJ.closest(".suntrust-header-search-container").addClass("search-active")
},blur:function(){var bJ=$(this);
if($(this).val().length>0){return false
}else{bJ.closest(".suntrust-header-search-container").removeClass("search-active")
}}},$(document));
if(document.activeElement.attributes.type){if(document.activeElement.attributes.type.value==="search"){var bH=$(document.activeElement);
bI=$('[data-sun-class="search-cancel-button"]')
}}},initValForm:function(bH){bH.submit(function(bJ){var bI=true;
bH.find("input").removeClass("no-valid");
bH.find(".suntrust-form-required").each(function(){var bK=$(this);
if($.trim(bK.val()).length==0){bK.addClass("no-valid");
bI=false
}});
if(!bI){bJ.preventDefault()
}})
},initUniform:function(){$('label.sun-radio-label [type="radio"]').uniform({radioClass:"sun-radio-input-container",checkedClass:"sun-checked"});
$('label.sun-checkbox-label [type="checkbox"]').uniform({checkboxClass:"sun-checkbox-input-container",checkedClass:"sun-checked"});
$('[data-suntrust-class="suntrust-checkbox"]').uniform({checkboxClass:"sun-checkbox-input-container",checkedClass:"sun-checked",focusClass:"sun-focused"});
$('[data-suntrust-class="suntrust-checkbox-alt"]').uniform({checkboxClass:"sun-checkbox-input-container-alt",checkedClass:"sun-checked",focusClass:"sun-focused"});
$('[data-suntrust-class="suntrust-checkbox-tertiary"]').uniform({checkboxClass:"sun-checkbox-input-container-tertiary",checkedClass:"sun-checked"});
$('[data-suntrust-class="suntrust-checkbox-toggle"]').uniform({checkboxClass:"suntrust-checkbox-toggle-container",checkedClass:"sun-checked"});
$("select").uniform({selectClass:"sun-select-container",selectAutoWidth:false}).each(function(){$(this).siblings("span").attr("aria-hidden",true)
})
},initExternalForm:function(bI){function bH(){var bK=bI.find("[type='radio']");
bK.uniform({radioClass:"sun-radio-input-container",checkedClass:"sun-checked",focusClass:"sun-focused"});
var bJ=bI.find("[type='checkbox']");
bJ.uniform({checkboxClass:"sun-checkbox-input-container",checkedClass:"sun-checked",focusClass:"sun-focused"})
}bH();
if(bI.hasClass("suntrust-salesforce-form")){$(".sun-checkbox-input-container").prev("br").css({display:"block"});
$(".sun-checkbox-input-container").next("br").css({display:"block","margin-top":"5px","margin-bottom":"5px"})
}else{if(bI.hasClass("suntrust-eloqua-form")){bI.find(".sun-checkbox-input-container").closest("p").addClass("suntrust-eloqua-checkbox-row")
}}},initContactUs:function(){$("div.component-contactus").each(function(){var bH=$(this);
if(Cookies.getJSON("LoanOfficer")!=null){var bJ=Cookies.getJSON("LoanOfficer");
var bI=bJ.phone;
bH.find("a.sun-contact-options-list-item-link.lo-data-persist").each(function(){$(this).attr("href","tel:"+bI);
$(this).find("span").html(bI)
});
bH.find("div.sun-contact-options-list-item-text.lo-data-persist").each(function(){$(this).html(bI)
})
}})
},initDropdownCTA:function(){$("select.suntrust-lookup-form-selector,select.suntrust-select-account,select.sun-body-select-cta").change(function(bK){var bM=$("option:selected",this),bH=bM.val(),bI=bM.data("overlay");
if(bH!=""){if(bI!=""&&bI!=undefined){bI=bI.replace("overlay--","");
var bJ=980;
switch(bI){case"small":bJ=470;
break;
case"medium":bJ=788;
break;
default:break
}$.fancybox({href:bH,maxWidth:bJ,width:bJ,closeClick:false,type:"iframe"})
}else{if(bM.is("[data-popup-window-params]")){aF.openWindow(bH,bM.data("popup-window-params"))
}else{if(bM.data("target")=="_blank"){var bL=window.open(bH,"_blank");
bL.focus()
}else{window.location.href=bH
}}}}})
},initVideo:function(){$("a[data-overlay-video]").click(function(bI){bI.preventDefault();
var bH=$(this);
$.ajax({type:"POST",url:"/Mortgage/GetOverlayVideo",data:"id="+bH.data("overlay-video"),success:function(bL){var bJ=$(bL);
var bK=$(window).width();
if(bK<=1400){$("#overlayvideo").html(bL).modalWindow({size:"small",$trigger:bH})
}else{bJ.modalWindow({size:"small",$trigger:bH})
}speedbumpCheck(bJ);
$(".suntrust-transcript-button").click(function(bM){bM.preventDefault();
var bN=$(this);
bN.hide();
bN.siblings(".suntrust-transcript").show();
aF.centerOverlay()
})
},error:function(bK,bJ,bL){ajaxError()
}})
});
$(".video-container").each(function(bJ,bK){var bH=$(this);
if(bH.children("table").length>0){var bL=bH.attr("data-image");
var bI="";
if(bL!=undefined&&bL!=""){bI="<img src='"+bH.attr("data-image")+"' alt='Alternate image content: Unable to play video due to browser player constraints not meet' /><br/>"
}bH.html("<span>"+bI+"In order to view this video content you need a browser that supports flash  9.0.124 or html5.</span>")
}})
},centerOverlay:function(){var bI=$(".suntrust-modal-container");
var bH=bI.outerHeight()/-2;
bI.css({"margin-top":bH})
},initFAQ:function(){},initSlider:function(){$("ul.bxslider").each(function(){var bH=$(this);
bH.bxSlider({speed:bH.data("speed"),nextText:"<span>Next</span>",prevText:"<span>Prev</span>",auto:bH.data("lapse")>0,pause:bH.data("lapse"),autoHover:true,onSliderLoad:function(){$(".suntrust-carousel .suntrust-carouselcomponent").css("visibility","visible");
bH.find("a").attr("tabindex","-1")
},onSlideAfter:function(bJ){if(typeof(LimelightPlayerUtil)!="undefined"){var bI=bJ.find(".video-container");
bI.css("width","99.99%");
setTimeout(function(){bI.css("width","100%")
},0)
}}})
})
},initCalculatorPromo:function(bH){bH.find(".sun-right-rail-promo-calculator-selector").change(function(){var bI=$(this).val();
if(bI=="newhomebuyer"){bH.addClass("newhomebuyer-active")
}else{bH.removeClass("newhomebuyer-active")
}});
bH.submit(function(){var bO=aF.config.calcFormDataSet.dataElements;
for(var bL=0,bJ=bO.length;
bL<bJ;
bL++){var bM=bO[bL],bN=aF.config.calcFormDataSet[bO[bL]].inputDefault,bK=aF.config.calcFormDataSet[bO[bL]].min,bP=aF.config.calcFormDataSet[bO[bL]].max,bR=aF.config.calcFormDataSet[bO[bL]].decPoints;
var bQ=bH.find('input[name="'+bM+'"]');
var bI=bQ.val();
bI=bI.replace(/[^0-9\.]+/g,"");
bI=parseFloat(bI);
if(!bI){bQ.val(bN.toFixed(bR))
}else{if(bI<bK){bQ.val(bK.toFixed(bR))
}else{if(bI>bP){bQ.val(bP.toFixed(bR))
}else{bQ.val(bI.toFixed(bR))
}}}}if(bH.hasClass("newhomebuyer-active")){bH.attr("action","https://lfgs.suntrust.com/solutions/suntrust/goal/newhomebuyer")
}else{bH.attr("action","https://lfgs.suntrust.com/solutions/suntrust/goal/refinance")
}})
},initGeolocation:function(){o.on("click",".suntrust-input-location-button",function(bH){var bI=$(this);
if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function(bJ){aF.showLocation(bI,bJ)
},function(bJ){alert("Geolocation produced and error. Code: "+bJ.code+". Message: "+bJ.message)
})
}else{alert("Geolocation is not supported by this browser.")
}})
},showLocation:function(bM,bN){var bO=bN.coords.latitude;
var bH=bN.coords.longitude;
var bP=bM.siblings("span").find("input");
var bQ,bK,bL,bI,bJ;
$.ajax({type:"POST",url:"https://www.mapquestapi.com/geocoding/v1/address?key=Gmjtd%7Clu6zn1ua2d%2C70%3Do5-l0850&outFormat=json&location="+bO+","+bH,dataType:"json",success:function(bS){$.each(bS.results,function(){$.each(this,function(bT,bV){if(bT!=null&&bT!=undefined&&bT=="locations"){var bU=bV;
bK=bU[0].street;
bL=bU[0].adminArea5;
bI=bU[0].adminArea3;
bJ=bU[0].postalCode
}})
});
var bR={address:bK+","+bL+","+bI+","+bJ,zip:bJ,city:bL,state:bI};
bS=JSON.parse(JSON.stringify(bR));
aF.updateLocationFields(bS,bP);
if($(".suntrust-input-location-button-map").length>0){updateLocationFields(bS,$(".suntrust-input-location-button-map").siblings("input:first"))
}},error:function(bS,bR,bT){ajaxError()
}})
},updateLocationFields:function(bK,bN){if(bK.address!=""){bN.typeahead("val",bK.address);
bN.focus();
if(bN.data("linked-id")){var bI=$("#"+bN.data("linked-id"));
if(bI.length>0){bI.val(bK.address)
}}}if(bK.zip!=""||bK.city!=""||bK.state!=""){var bL=bN.siblings("input.suntrust-input-location-zip");
if(bK.zip!=""&&bL.length>0){bL.val(bK.zip)
}var bJ=bN.siblings("input.suntrust-input-location-city");
if(bK.city!=""&&bJ.length>0){bJ.val(bK.city)
}var bM=bN.siblings("input.suntrust-input-location-state");
if(bK.state!=""&&bM.length>0){bM.val(bK.state)
}var bH=bN.siblings("input.suntrust-input-location-field");
if(bH.length>0){bN.keydown(function(bO){if(bO.keyCode==9||bO.keyCode==27||bO.keyCode==13||(bO.keyCode==65&&bO.ctrlKey===true)||(bO.keyCode>=35&&bO.keyCode<=39)){return
}else{bH.val("")
}})
}}},initPeopleFinderPromo:function(bJ){function bI(bN){var bL=bN.siblings("input.suntrust-input-location-zip");
var bK=bN.siblings("input.suntrust-input-location-city");
var bM=bN.siblings("input.suntrust-input-location-state");
return(bL.length>0&&$.trim(bL.val()).length!=0)||(bK.length>0&&$.trim(bK.val()).length!=0)||(bM.length>0&&$.trim(bM.val()).length!=0)
}function bH(bM){var bN=bJ.find("input.suntrust-form-required").removeClass("no-valid");
if(bM||bI(bN)){var bK=bJ.attr("action")+"#"+bJ.find("input[value!=''],select").serialize();
if(bJ.data("target")=="_blank"){var bL=window.open(bK,"_blank");
bL.focus()
}else{window.location.href=bK
}}else{bN.addClass("no-valid")
}}bJ.submit(function(bK){bK.preventDefault();
var bL=bJ.find("input.suntrust-form-required").removeClass("no-valid");
if($.trim(bL.val()).length==0){bL.addClass("no-valid")
}else{$.ajax({type:"POST",url:"/FindUs/GetAddress",data:"location="+bL.val(),beforeSend:function(){showLoadingMask()
},success:function(bM){aF.updateLocationFields(bM,bL)
},error:function(bN,bM,bO){ajaxError();
bL.addClass("no-valid")
},complete:function(){bH(false);
hideLoadingMask()
}})
}})
},initLOFinderPromo:function(bH){aF.setZipCodeField(bH.find("input.sun-right-rail-promo-zip-code-field"));
bH.submit(function(bL){bL.preventDefault();
var bN=true,bK=$(this).find(".sun-val-form-input"),bI=$(this).find(".sun-right-rail-promo-zip-code-field");
$(this).find(".sun-error").removeClass("sun-error");
if(bK.filter(function(){return this.value!=""
}).length==0){bN=false;
bK.closest(".sun-field").addClass("sun-error")
}else{if(bI.val().length>0&&bI.val().length<5){bN=false;
bI.closest(".sun-field").addClass("sun-error")
}}if(bN){var bJ=$(this).attr("action")+"#"+$(this).serialize();
if($(this).data("target")=="_blank"){var bM=window.open(bJ,"_blank");
bM.focus()
}else{window.location.href=bJ
}}})
},setZipCodeField:function(bH){bH.keydown(function(bI){if(bI.keyCode==46||bI.keyCode==8||bI.keyCode==9||bI.keyCode==27||bI.keyCode==13||(bI.keyCode==65&&bI.ctrlKey===true)||(bI.keyCode>=35&&bI.keyCode<=39)){return
}else{if(bI.shiftKey||(bI.keyCode<48||bI.keyCode>57)&&(bI.keyCode<96||bI.keyCode>105)){bI.preventDefault()
}else{if(isTextSelected($(this)[0])){$(this).val("")
}if($(this).val().length==5){bI.preventDefault()
}}}});
bH.click(function(){$(this).select()
})
},initComparisonChart:function(){$("div.component-comparisonchart").each(function(){var bM=$(this),bI=bM.find('ul[data-suntrust-class="compare-account-list"]');
var bL=function(){var bN=bI.find(".suntrust-accounts-comparison-list-item-wrapper"),bO=bN.find(".suntrust-compare-header"),bQ=0,bP=0;
bN.css("height","auto");
bO.css("height","auto");
bO.each(function(){var bR=$(this);
if(bR.height()>bP){bP=bR.height()
}});
bO.css("height",bP+"px");
bN.each(function(){var bR=$(this);
if(bR.height()>bQ){bQ=bR.height()
}});
bN.css("height",bQ+"px")
};
bL();
$(window).resize(_.throttle(bL,aF.throttleTime));
var bH=bM.find('[data-suntrust-class="compare-button"]'),bJ=bM.find(".sun-comparison-chart-form");
var bK=0;
bJ.each(function(){var bP=$(this);
var bO=bP.find('[data-suntrust-class="compare-button"] .suntrust-accessible-text');
var bN=bO.text();
var bQ=bP.find(".suntrust-compare-checkbox");
function bR(){var bS=bQ.filter(":checked").length;
bK=bS;
if(bS>=2){bO.text("Continue selecting accounts to compare or Compare Now");
bH.removeClass("suntrust-disabled").removeAttr("disabled")
}else{if(bO.text()!==bN){bO.text(bN);
bH.addClass("suntrust-disabled").attr("disabled")
}}}bQ.on("change",bR)
});
bJ.submit(function(bO){var bN=$(this);
bO.preventDefault();
if(bK<2){return false
}$.ajax({type:"POST",url:bN.attr("action"),data:bN.serialize(),success:function(bQ){var bP=$(bQ);
bP.find("h2.suntrust-modal-header_overlay-title").append(bN.data("overlay-title"));
bP.modalWindow({$trigger:bN.find("button.suntrust-compare")});
var bS=bP.find(".suntrust-compare-title-row");
if(bS.length>0){bS.each(function(){var bU=$(this).find(".suntrust-compare-title"),bT=bU.innerHeight()-1;
$(this).height(bT)
})
}var bR=bP.find('[data-suntrust-class="compare-table-row"]');
bR.each(function(){var bU=$(this).outerHeight()+"px",bT=$(this).find($('[data-suntrust-class="first-column"]'));
bT.css("height",bU)
});
speedbumpCheck(bP)
},error:function(bQ,bP,bR){ajaxError()
}})
})
})
},initLoadMore:function(){$("ul.suntrust-loadmore-list").each(function(){var bH=$(this),bI=1;
bH.find("button.suntrust-load-more").click(function(bL){bI++;
var bJ=bH.data("page-size"),bN=bI*bJ,bK=bH.find(".suntrust-article-list-item"),bM=$(this);
bL.preventDefault();
bK.filter(":lt("+bN+")").show();
if(bN+1>=bK.length){bM.hide()
}})
})
},initAccordion:function(){$('section[data-suntrust-class="accordion"]').each(function(){var bH=$(this),bI=bH.find('[data-suntrust-class="accordion-trigger"]');
bI.each(function(){$(this).click(function(){var bM=$(this),bN=bM.index(".suntrust-accordion-trigger"),bL=bM.next('section[data-suntrust-class="accordion-section"]'),bJ=($(window).width()<=768&&bL.hasClass("suntrust-closed-section"));
bH.find('section[data-suntrust-class="accordion-section"]').addClass("suntrust-closed-section");
if(bM.hasClass("suntrust-open")){bI.removeClass("suntrust-open")
}else{bI.removeClass("suntrust-open");
bM.addClass("suntrust-open");
bL.removeClass("suntrust-closed-section").attr({tabIndex:"-1"}).focus();
bL[0].focus()
}if(bJ){var bO=bM.offset().top,bK=$(window).scrollTop()>=bO?bO-80:bO;
$("html, body").stop().animate({scrollTop:bK,easing:"ease"},400)
}});
$(this).focus(function(){$(this).toggleClass("suntrust-accordion-trigger-focus",true)
});
$(this).blur(function(){$(this).toggleClass("suntrust-accordion-trigger-focus",false)
})
})
})
},openWindow:function(bI,bL){var bH=aF.getParameter(bL,"name");
if($.browser.msie){bH="_blank"
}if($.browser.webkit||($.browser.msie&&!aF.config.isIE8)){bL=aF.updateParameter(bL,"status","0")
}var bK=((window.screen.width-aF.getParameter(bL,"width"))/2);
var bJ=((window.screen.height-aF.getParameter(bL,"height"))/2);
bL+=",top="+bJ+",left="+bK;
window.open(bI,bH,bL,false)
},updateParameter:function(bL,bH,bK){if(bL.indexOf(bH)>=0){var bI=new RegExp("(,)?"+bH+"=[_-a-z0-9]*");
var bJ=bH+"="+bK;
if(bL.indexOf(bH)!=0){bJ=","+bJ
}return bL.replace(bI,bJ)
}else{return""
}},getParameter:function(bJ,bH){if(bJ.indexOf(bH)>=0){var bI=new RegExp(bH+"=[_-a-z0-9]*");
return bJ.match(bI)[0].replace(bH+"=","")
}else{return""
}},getRateByLoanType:function(bI,bH){var bJ=0;
if(bI==undefined||bH==undefined){return bJ
}$(strLightStreamJSON).each(function(bK,bL){if(bL.LoanPurpose==bI){if(bH=="Max"){bJ=bL.MaxRate
}else{if(bH=="Min"){bJ=bL.MinRate
}}bJ=(parseFloat(bJ)*100).toFixed(2);
return bJ
}});
return bJ
}};
$(function(){aF.init()
});
var a1=$('[data-suntrust-class="suntrust-main"]');
var a0=$('[data-suntrust-class="suntrust-page"]'),aD=$('[data-suntrust-class="suntrust-menu-trigger"]'),aV=$('[data-suntrust-class="suntrust-user-trigger"]'),aE=$('[data-suntrust-class="suntrust-menu-close"]'),aN=$('[data-suntrust-class="change-bank-account"]'),bh=$('[data-suntrust-class="suntrust-submenu-back"]'),bn=$(".suntrust-submenu"),a5=$("[data-suntrust-ltr-triggers] li"),bc=$("[data-suntrust-rtl-triggers] li"),aL=$('[data-suntrust-class="submenu-triggers"] li'),aP=$('[data-suntrust-class="banking-menu"]'),ba=$('[data-suntrust-class="user-menu"]'),aO=$('[data-suntrust-class="header"]'),aT="suntrust-hover",e="active",aS=$('[data-suntrust-class="banking-links-container"]'),aH="no-scrollbars";
var aR;
if($("html").hasClass("touch")){aR=true
}else{aR=false
}var bt=window.navigator.userAgent,bk=(bt.indexOf("MSIE")!==-1)||(bt.indexOf("Trident")!==-1),aC=bk&&!$("html").hasClass("lt-ie10")&&!$("body").hasClass("lt-ie10");
if(aC){$("html").addClass("ie10")
}var aW;
if($("html").hasClass("ie8")||$("body").hasClass("ie8")){aW=true
}else{aW=false
}$('[data-suntrust-class="submenu-triggers"]').hover(function(){if($(window).width()>768&&!aW){a0.addClass(aT)
}},function(){if(!aW){a0.removeClass(aT)
}if(aW){a0.removeClass(aT);
bn.removeClass(e)
}});
$(".suntrust-banking-overview-link").hover(function(){if(aW){bn.removeClass(e)
}});
aL.hover(function(){if(aW){aP.addClass(aH);
a0.addClass(aT);
$(this).prev("li").find(".suntrust-submenu").removeClass(e);
$(this).next("li").find(".suntrust-submenu").removeClass(e);
$(this).find(".suntrust-submenu").addClass(e)
}},function(){aP.removeClass(aH)
});
$(".suntrust-segment-switch, .suntrust-bank-segment").val(0);
$("[data-suntrust-account-type]").change(function(){var bJ=document.getElementById("segment"),bH=bJ.options[bJ.selectedIndex].index,bI=$(this).val();
aS.addClass("suntrust-hidden");
aS.eq(bH).removeClass("suntrust-hidden")
});
function bx(){a5.removeClass("touch-active");
bc.removeClass("touch-active");
a0.removeClass("submenu-rtl-active active");
bn.removeClass("active")
}var a7=false,aQ=false,bE=500,br="swing";
function aK(){if(($("#divsuntrustmobileview").css("display")=="block")){if(!a7){aP.show();
aP.animate({left:"0px"},bE,br);
a7=true;
$("body").addClass(aH)
}else{aJ()
}}else{if(!a7){aP.show();
aP.animate({top:"78px"},bE,br);
a7=true;
$("body").addClass(aH)
}else{aJ()
}}}function aJ(){if(($("#divsuntrustmobileview").css("display")=="block")){if(a7){aP.animate({left:"-320px"},bE,br,function(){a7=false;
aP.hide();
$("body").removeClass(aH)
})
}}else{if(a7){aP.animate({top:"-720px"},bE,br,function(){a7=false;
aP.hide();
$("body").removeClass(aH)
});
$(".suntrust-levelHolder").animate({left:"-320px"});
$("body").removeClass(aH)
}}}function aB(){if(!aQ){ba.show();
ba.animate({right:"0"},bE,br);
aQ=true;
$("body").addClass(aH)
}}function bA(){if(aQ){ba.animate({right:"-320px"},bE,br,function(){aQ=false;
ba.hide();
$("body").removeClass(aH);
$("html,body").removeClass("ios-cursor")
})
}}aD.click(function(){a0.removeClass("suntrust-hover suntrust-user-menu-active");
bx();
setTimeout(function(){$("body").addClass(aH)
},350);
a0.addClass("suntrust-bank-menu-active active");
if(a7){a0.removeClass("suntrust-bank-menu-active active");
aJ()
}else{aK()
}if(aQ){bA()
}$(".banking-menu-accessibility-trigger").focus();
$(this).addClass("banking-button-triggered")
});
aV.click(function(){$(".suntrust-levelHolder").animate({left:"-320px"});
if(!$(".suntrust-header-signon-block").is(":empty")){var bK=Object.prototype.toString.call(window.operamini)==="[object OperaMini]";
var bJ="placeholder" in document.createElement("input")&&!bK;
var bH="placeholder" in document.createElement("textarea")&&!bK;
if(bJ&&bH){a0.removeClass("suntrust-hover suntrust-bank-menu-active");
bx();
aB();
if(a7){aJ()
}setTimeout(function(){$("body").addClass(aH);
if(h){if(window.innerWidth<768){$("html,body").addClass("ios-cursor")
}}},350);
a0.addClass("suntrust-user-menu-active active");
$(".user-menu-accessibility-trigger").focus();
$(this).addClass("user-button-triggered")
}else{var bI=this.attributes["data-nojs-url"].value;
window.location=bI
}}});
$(document).on("click",function(bH){if(!$(bH.target).parents().is("header")&&!$(bH.target).parents().is(".suntrust-hero-signon-desktop-black")&&!$(bH.target).is(".newWindowpopup")){bH.stopPropagation();
if(a0.hasClass(e)){a0.removeClass("active suntrust-bank-menu-active suntrust-user-menu-active submenu-rtl-active suntrust-hover")
}bx();
if(aV.hasClass("user-button-triggered")){aV.focus().removeClass("user-button-triggered")
}if(aD.hasClass("banking-button-triggered")){aD.focus().removeClass("banking-button-triggered")
}if(a7){aJ()
}if(aQ){bA()
}}});
aE.click(function(){a0.removeClass("active suntrust-user-menu-active suntrust-bank-menu-active suntrust-hover");
bx();
$(this).parents("[data-suntrust-hidden-navs]").prev().focus();
if(a7){aJ()
}if(aQ){bA()
}});
$(".suntrust-menu-close.signon-end").focusout(function(){bx();
bA()
});
bh.click(function(bH){bH.stopPropagation();
a0.removeClass("submenu-rtl-active");
bn.removeClass(e);
ba.removeClass(aH);
aP.removeClass(aH)
});
function a4(){a0.removeClass("active suntrust-user-menu-active suntrust-bank-menu-active submenu-rtl-active suntrust-hover");
bn.removeClass(e);
bx();
if(a7){aJ()
}else{if(aQ){bA()
}}}a5.each(function(){$(this).children(".suntrust-main-links").click(function(){$(this).next(".suntrust-submenu").addClass(e);
$(this).find("a").first().focus();
aP.scrollTop(0);
aP.addClass(aH);
if($(window).width()>768){a0.addClass(aT)
}return false
})
});
bc.each(function(){$(this).children(".suntrust-main-links").click(function(){a0.addClass("submenu-rtl-active");
$(this).next(".suntrust-submenu").addClass(e);
$(this).find("a").first().focus();
ba.scrollTop(0);
ba.addClass(aH);
if($(window).width()>768){a0.addClass(aT)
}return false
})
});
$("[data-suntrust-login-button],[data-suntrust-logout-button]").click(function(){$("[data-suntrust-logged-in], [data-suntrust-login-form]").toggleClass("suntrust-state-hidden");
$('[data-suntrust-class="suntrust-page"]').toggleClass("suntrust-header-signed-in");
$(".suntrust-my-settings-text, .suntrust-default-sign-on-text").toggle()
});
$("[data-suntrust-login-button]").click(function(){$('[data-suntrust-class="suntrust-user-menu-state"]').html("You have successfully signed in. The Sign On menu has been changed to My Settings menu.")
});
$("[data-suntrust-logout-button]").click(function(){$('[data-suntrust-class="suntrust-user-menu-state"]').html("You have successfully signed off. The My Settings menu has been changed to the Sign On menu.")
});
$('[data-suntrust-class="show-authenticated"]').click(function(bH){bH.preventDefault();
$('[data-suntrust-class="authenticated-dotcom"]').hide();
$('[data-suntrust-class="authenticated-olb"]').show();
$('[data-suntrust-class="suntrust-page"]').toggleClass("suntrust-header-signed-in");
$(".suntrust-my-settings-text, .suntrust-default-sign-on-text").toggle()
});
var bd=function(bJ){var bH=$(bJ);
var bI=bH.attr("placeholder");
bH.val(bI);
bH.focus(function(){if(bH.val()===bI){bH.val("")
}});
bH.focusout(function(){if(bH.val().trim().length===0){bH.val(bI)
}})
};
$("#mobile-global-search").focus(function(){if(aR){$('[data-suntrust-class="nav-safety"]').show();
$(".suntrust-header-alt").addClass("no-shadow")
}});
$("#mobile-global-search").blur(function(){if(aR){$('[data-suntrust-class="nav-safety"]').hide();
$(".suntrust-header-alt").removeClass("no-shadow")
}});
var bb=$("header.suntrust-header-alt");
if(bb.length>0){bb.find("select").uniform({selectClass:"sun-select-container",selectAutoWidth:false});
bb.find('[data-suntrust-class="suntrust-checkbox"]').uniform({checkboxClass:"sun-checkbox-input-container",checkedClass:"sun-checked"});
bb.find('[data-sun-type="search-cancel-button"]').click(function(bI){var bH=$(this);
bI.preventDefault();
bH.removeClass("sun-active");
bH.prev("input").val("").focus();
$(".suntrust-autocomplete").empty()
});
bb.find('[type="search"]').keyup(function(){var bI=$(this),bH=bI.val().length;
if(bH>0){$currentCancelButton.addClass("sun-active")
}else{$currentCancelButton.removeClass("sun-active")
}});
bb.find('[type="search"]').focus(function(){var bH=$(this);
$currentCancelButton=bH.next('[data-sun-class="search-cancel-button"]');
bH.closest(".suntrust-header-search-container").addClass("search-active")
});
bb.find('[type="search"]').blur(function(){var bH=$(this);
if($(this).val().length>0){return false
}else{bH.closest(".suntrust-header-search-container").removeClass("search-active")
}})
}var bz=$('div[data-suntrust-class="suntrust-page"]');
if(bz.length>0){var a0=$("#suntrust-page");
var bb=$("header.suntrust-header-alt");
var aA=$("#suntrust-login-form");
var bF=false;
var aW;
if($("html").hasClass("ie8")||$("body").hasClass("ie8")){aW=true
}else{aW=false
}$(".suntrust-search-input").focus(function(){$(this).select()
});
if(bb.length>0){if(typeof deviceDetection!=="undefined"&&typeof(aF)=="undefined"){bb.find(deviceDetection.selector).removeClass("sun-global-app-element")
}var bB=bb.find(".suntrust-menu-alert-top-container");
bB.each(function(){var bH=$(this);
if(bH.children().not(".sun-global-app-element").length==0){bH.hide()
}});
if(bb.length>0){}if(aA.length>0){bb.find(".suntrust-user-icon-button").removeClass("hidden-element")
}}$.uniform.update("#segment");
var bG=aA.find("select.suntrust-bank-segment");
if(bG.length>0){var bD={olbCookie:get_cookieNoUnescape("OLBRMdata"),olbMaskedValue:"",olbEncryptedValue:"",olbValid:false,optionCookie:getCookie("SignOnOption"),optionValid:false,olbIsEncrypted:function(){if(bD.olbCookie!=null&&bD.olbCookie!=""&&bD.olbEncryptedValue!=""&&bD.olbMaskedValue!=""){return true
}return false
}};
if(bD.optionCookie!=null&&bD.optionCookie!=""){var be=bD.optionCookie;
var bv=aA.find("#SignOn-"+be);
var aU=$(".suntrust-more-services-wrapper[id=OtherServices-"+be+"]");
var bf=$(".suntrust-app-banner-wrapper[id=MobileApps-"+be+"]");
if(bv.length>0){aA.find("div.suntrust-signon-login-form").addClass("hidden");
bv.removeClass("hidden");
$("div.suntrust-more-services-wrapper").addClass("hidden");
aU.removeClass("hidden");
$("div.suntrust-app-banner-wrapper").addClass("hidden");
bf.removeClass("hidden");
bG.val(be)
}}$.uniform.update(bG);
if(bD.olbCookie!=null&&bD.olbCookie!=""){var a2=bD.olbCookie.replace("maskedValue=","").replace("encryptedValue=","").split("&");
if(a2.length>=2){bD.olbMaskedValue=a2[0];
bD.olbEncryptedValue=a2[1];
if(bD.olbIsEncrypted()){bD.olbValid=true;
var bj=$(".signOnLoginForm[data-apptype='OLB']");
var bw=$(".signOnLoginForm[data-apptype='OLB'][data-appid='"+bD.optionCookie+"']");
var a3=bj.find(".suntrust-login-user-input");
if(bD.optionValid&&bD.optionCookie=="OLB"){$(function(){var bH=bw.find(".suntrust-login-password");
bH.siblings("label").hide()
})
}a3.val(bD.olbMaskedValue);
a3.siblings(".suntrust-login-hidden-user-id").val(bD.olbEncryptedValue);
a3.siblings(".suntrust-login-input-is-encrypted").val("true");
a3.siblings("label").hide();
var aI=bj.find(".suntrust-login-checkbox");
if(aI.length>0){aI.attr("checked",true);
$.uniform.update(aI)
}}}}aA.find(".suntrust-login-input").click(function(){$(this).select()
});
bG.change(function(){var bM=this.value;
var bI=aA.find("#SignOn-"+bM);
var bH=$(".suntrust-more-services-wrapper[id=OtherServices-"+bM+"]");
var bL=$(".suntrust-app-banner-wrapper[id=MobileApps-"+bM+"]");
if(bI.length>0){aA.find("div.suntrust-signon-login-form").addClass("hidden");
bI.removeClass("hidden");
$("div.suntrust-more-services-wrapper").addClass("hidden");
bH.removeClass("hidden");
$("div.suntrust-app-banner-wrapper").addClass("hidden");
if(!bH.find(".suntrust-submenu.suntrust-rtl").hasClass("active")){a0.removeClass("submenu-rtl-active")
}$("a.suntrust-main-links").hover(function(bN){return false;
bN.preventDefault()
});
bL.removeClass("hidden")
}if(aW){var bJ=document.getElementsByTagName("head")[0],bK=document.createElement("style");
bK.type="text/css";
bK.styleSheet.cssText=":before,:after{content:none !important";
bJ.appendChild(bK);
setTimeout(function(){bJ.removeChild(bK)
},0)
}});
var a6=aA.find(".suntrust-login-button");
a6.off("click").on("click",function(b2){b2.preventDefault();
bv=$(this).closest("form.signOnLoginForm");
var bY=true;
bv.find(".suntrust-login-input").removeClass("sun-error");
bv.find(".suntrust-login-input").each(function(){var b4=$(this);
if($.trim(b4.val()).length==0||(b4.is(".suntrust-login-user-input")&&$.trim(b4.val())==b4.attr("placeholder"))){b4.addClass("sun-error");
bY=false
}});
if(bY){console.log("Sign on blade after propagation");
$(this).attr("disabled",true);
var bW={expire:30,secure:window.location.protocol=="https:"?true:false,domain:window.location.host,path:"/"};
var bP=bv.data("appid");
var bI=bv.data("apptype");
var bM=bv.data("gateway");
setCookie("SignOnOption",bP,bW.expire,bW.path,bW.domain,bW.secure);
var bL=bv.find(".suntrust-login-password");
var bO=bv.find(".suntrust-login-user-input");
var bH=bv.find(".suntrust-login-hidden-user-id");
var bQ=bv.find(".suntrust-trk-input");
var bV=bv.find(".suntrust-login-input-is-encrypted");
var bU=bL.siblings(".hiddenPublicKey");
if(bM=="11g"&&bU.length>0){var bJ=KEYUTIL.getRSAKeyFromPublicPKCS8PEM(bU.val());
var b3=bJ.encrypt(bL.val());
b3=hex2b64(b3);
bL.siblings(".hiddenPassword").val(b3);
if(bV.val()=="true"&&bO.val()!=bD.olbMaskedValue){var bK=bJ.encrypt(bO.val());
bK=hex2b64(bK);
bO.siblings(".suntrust-login-hidden-user-id").val(bK);
bQ.val(P(bO.val()))
}else{if(bV.val()=="false"){if(bO.val()!=bD.olbMaskedValue){bO.siblings(".suntrust-login-hidden-user-id").val(bO.val());
bQ.val(P(bO.val()))
}else{var bK=bJ.encrypt(bO.val());
bK=hex2b64(bK);
bO.siblings(".suntrust-login-hidden-user-id").val(bK);
var bN=P(bH.val());
var bZ=T("OLBRMdata");
if(bZ!=undefined){var b1=aj(bZ);
if(b1!=null){bN=b1
}}bQ.val(bN)
}}}}else{bL.siblings(".hiddenPassword").val(bL.val())
}var bX=bv.find(".suntrust-login-user-input");
if(bV.val()=="true"&&(bD.olbCookie!=null&&bD.olbCookie!="")&&bX.val()==bD.olbMaskedValue){$('form[name="loginForm-signonblade-OLB"] input[name="rmUsernameSet"]').val("true");
var bN=P(bH.val());
var bZ=T("OLBRMdata");
if(bZ!=undefined){var b1=aj(bZ);
if(b1!=null){bN=b1
}}bQ.val(bN)
}if(bI!="OLB"){bX.siblings(".suntrust-login-hidden-user-id").val(bX.val());
bX.siblings(".suntrust-login-input-is-encrypted").val("false")
}var bT=bv.find(".suntrust-login-checkbox");
if(bT.length>0&&bI=="OLB"){var bS=bT.closest(".suntrust-remember-me-field").find(".suntrust-login-checkbox-hidden");
if(bT.is(":checked")){bS.val("true")
}else{bS.val("false");
delete_cookie("OLBRMdata")
}}var b0="";
try{b0=getDeviceDetails()
}catch(bR){console.log("Exception caught in calling getDeviceDetails() : "+bR.message)
}if(b0!=null){$('form[name="loginForm-signonblade-OCM"] input[name="devicedetails"]').val(b0)
}else{$('form[name="loginForm-signonblade-OCM"] input[name="devicedetails"]').val("")
}bv.submit()
}});
$(document).on("keypress","#SignOn-signonblade-OCM .suntrust-login-input, #SignOn-signonblade-OLB .suntrust-login-input",function(bH){if(bH.which==13){a6.trigger("click");
$(".suntrust-login-button, #SignOn-signonblade-OCM .suntrust-login-input, #SignOn-signonblade-OLB .suntrust-login-input").attr("disabled",true);
bH.stopImmediatePropagation()
}})
}}}z();
$(".sun-feature-tabs_tabset").responsiveTabs();
$(".suntrust-accordion-trigger").each(function(){var e=$(this).attr("data-expand");
if(e=="true"){$(this).addClass("suntrust-open");
$(this).next().show()
}});
$(document).on("change",".suntrust-select.suntrust-comboBoxloans",function(){if($(this).val()!=""){window.location=$(this).val();
var e=window.location.href;
var aB=e.split("#");
var aA=aB[aB.length-1];
var az=$("body").find('[data-anchor="'+aA+'"]').offset().top;
$("html, body").animate({scrollTop:az},"slow")
}});
var r,O,b;
try{r=window.location.href;
O=r.split("#");
b=O[O.length-1];
if($("[data-anchor='"+b+"']").parent().hasClass("tabset-nav-list")){af(b)
}else{if($("[data-anchor='"+b+"']").parent().hasClass("suntrust-mortgagetablewrapper")){ao(b)
}else{if($("[data-anchor='"+b+"']").parents("ul.faq").hasClass("faq")&&!$("[data-anchor='"+b+"']").parents("ul.suntrust-faqs-list").hasClass("suntrust-faqs-list")){n(b)
}else{y(b)
}}}}catch(av){}$(document).on("click",'a[href^="#"]',function(){var e=$(this).attr("href").split("#");
b=e[1];
if($("[data-anchor='"+b+"']").parent().hasClass("tabset-nav-list")){af(b)
}else{if($("[data-anchor='"+b+"']").parent().hasClass("suntrust-mortgagetablewrapper")){ao(b)
}else{if($("[data-anchor='"+b+"']").parents("ul.faq").hasClass("faq")&&!$("[data-anchor='"+b+"']").parents("ul.suntrust-faqs-list").hasClass("suntrust-faqs-list")){n(b)
}else{y(b)
}}}});
function af(){try{$("li[data-anchor='"+b+"']>a").click();
var az=$("li[data-anchor='"+b+"']").offset().top-150;
$("html,body").stop().animate({scrollTop:az},"slow")
}catch(aA){}}function n(){$("li[data-anchor='"+b+"'] > div").click();
$("html,body").animate({scrollTop:$("li[data-anchor='"+b+"'] > div").offset().top},"slow")
}function y(){$('a[data-anchor="'+b+'"]').each(function(){$(this).addClass("sun-active");
$(this).next().addClass("sun-active");
if($(this).parents().hasClass("suntrust-faqs-list")){$(this).parents(".suntrust-faqs-list").prev().addClass("suntrust-open");
$(this).parents(".suntrust-faqs-list").show()
}$("html, body").animate({scrollTop:$(this).offset().top},"slow")
})
}function ao(){var e=$('[data-anchor="'+b+'"]').offset().top;
$("html, body").animate({scrollTop:e},"slow");
$("html, body").animate({scrollTop:e},"slow")
}setTimeout(function(){var az="";
var aB=0;
var aA=0;
var e=0;
$(".suntrust_account_find").each(function(){az=$(this).find("input[name=compareTableType]").val();
if(az=="comparison"||az=="static"){$(this).find("table.table_compare tr").each(function(){if(!$(this).find("th").hasClass("account_bg_grey")){aB=0;
aA=0;
e=0;
$(this).find("th").wrapInner("<div class='table_heading_content'></div>");
$(this).find("td").each(function(){aB=Math.max($(this).innerHeight(),aB)
});
aA=$(this).find("th .table_heading_content").innerHeight();
e=aA+30;
if(e>aB){$(this).css("height",e+"px")
}}});
$(this).find("th.account_bg_grey").each(function(){var aD=0;
var aE=0;
if($(this).find("div").hasClass("table_heading_content")){aD=$(this).find(".table_heading_content").innerHeight();
aE=aD+30
}else{aD=$(this).innerHeight();
aE=aD+10
}if(ak){if(aE>=70){$(this).parent().css("height",aE+"px");
$(this).css("height",aE+"px")
}}if(h){if(aE>70){$(this).parent().css("height",aE+"px");
$(this).css("height",aE+"px")
}else{$(this).parent().css("height","auto");
$(this).css("height","auto")
}}else{if(aE>50){$(this).parent().css("height",aE+"px");
$(this).css("height",aE+"px")
}}});
if(az=="comparison"){var aC=0;
if($(this).find("table.table_compare tr:last-child th > div").hasClass("table_heading_content")){aC=$(this).find("tr:last-child th div.table_heading_content").innerHeight();
if(aC==0){aC=20
}$(this).find("tr:last-child").css("height",(aC+30)+"px");
if(u){$(this).find("tr:last-child th").css("height",(aC+30)+"px")
}else{$(this).find("tr:last-child th").css("height",(aC+31)+"px")
}}else{aC=$(this).find("table.table_compare tr:last-child").innerHeight();
$(this).find("tr:last-child th").css("height",(aC+1)+"px");
$(this).find("tr:last-child").css("height",aC+"px")
}if(f){$(this).find("table.table_compare").css("margin-left","1px")
}}}})
},600);
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){if(!$(".suntrust-hero-signon-mobile-block").is(":visible")){$(".sun-product-carousel.signon_enabled").css("display","block")
}else{if($(".suntrust-hero-signon-mobile-block").is(":visible")){$(".sun-product-carousel.signon_enabled").css("display","none !important")
}}}var H;
$(document).off("click",'[data-suntrust-class="suntrust-content-modalWindow"]').on("click",'[data-suntrust-class="suntrust-content-modalWindow"]',function(){H=$(this);
A(H)
});
$(document).on("keypress",'[data-suntrust-class="suntrust-content-modalWindow"]',function(az){H=$(this);
if(az.keyCode===13){A(H)
}});
$(document).on("keypress",'[data-suntrust-class="close-modal"]',function(az){if(az.keyCode===13){$(".suntrust-modal").removeClass("active");
$('[data-suntrust-class="suntrust-modal-inner"]').empty()
}});
function A(){$('[data-suntrust-class="suntrust-modal-inner"]').empty();
var az=H.data("anchor");
if(window.location.href.indexOf("cms")>-1){az+="?wcmmode=disabled"
}var e=H.data("modal");
$.ajax({url:az,dataType:"text",cache:false,success:function(aD){$("div.sun-faqs-component-list").find('[data-sun-class="faqs-page-list-item-header"]').off("click");
var aB=$(aD).filter("#suntrust-page");
$('[data-suntrust-class="suntrust-modal-inner"]').html(aB);
$('[data-suntrust-class="example-modal"]').modalWindow();
if(e=="_smallmodal"){$('[data-suntrust-class="example-modal"]').removeClass("suntrust-medium-window");
$('[data-suntrust-class="example-modal"]').removeClass("suntrust-large-window");
$('[data-suntrust-class="example-modal"]').addClass("suntrust-small-window")
}if(e=="_mediummodal"){$('[data-suntrust-class="example-modal"]').removeClass("suntrust-small-window");
$('[data-suntrust-class="example-modal"]').removeClass("suntrust-large-window");
$('[data-suntrust-class="example-modal"]').addClass("suntrust-medium-window")
}if(e=="_largemodal"){$('[data-suntrust-class="example-modal"]').removeClass("suntrust-small-window");
$('[data-suntrust-class="example-modal"]').removeClass("suntrust-medium-window");
$('[data-suntrust-class="example-modal"]').addClass("suntrust-large-window")
}var aA=$(".suntrust-modal .suntrust-modal-inner #suntrust-page").innerHeight();
if(aA<575){$(".suntrust-modal-container").addClass("suntrust-modal-container-newHeight")
}else{$(".suntrust-modal-container").removeClass("suntrust-modal-container-newHeight")
}var aC=$(window).outerHeight();
var aE=$(".suntrust-modal-container").outerHeight();
var aI=aC-aE;
var aF=aI/2;
$(".suntrust-modal-container").css({"margin-top":aF});
var aH=$(".suntrust-modal-inner .video");
var aG=aH.is(":visible");
if(aG===true){D();
$(".suntrust-modal-container").addClass("suntrust-modal-container-new");
$(".suntrust-modal-container").removeClass("suntrust-modal-container-newHeight")
}else{$(".suntrust-modal-container").removeClass("suntrust-modal-container-new")
}$(".suntrust-modal .suntrust-modal-container .suntrust-close").focus()
}})
}if($("body").find(".rowContainer-RemoveTop-Border")){$(".rowContainer-RemoveTop-Border").parents(".rowContFullWidthBGborderTop").css("border","0px")
}$(".suntrust-feature-links").each(function(){if($(this).is(":visible")){$(this).parents(".featuredcontent").addClass("suntrust-SLfeature")
}});
if($("#modecheck").val()==undefined){am();
$(window).resize(function(){am()
})
}function am(){if($(window).innerWidth()>=768){var aA=0;
var az=0;
$(".suntrust-SLfeature .suntrust-feature-header").each(function(){if($(this).innerHeight()>az){az=$(this).innerHeight()
}});
$(".suntrust-SLfeature .rteelement").each(function(){if($(this).innerHeight()>aA){aA=$(this).innerHeight()
}});
var e=aA;
$(".suntrust-SLfeature .rteelement").each(function(){aA=e;
var aB=$(this).parents(".suntrust-user-path-container").find(".suntrust-feature-header").height();
if(az>aB){aA=aA+(az-aB)
}$(this).height(aA)
})
}else{$(".suntrust-SLfeature .rteelement").css("height","auto")
}}$(document).on("click","#Search, #PeopleSearch, #ProdSearch, #FaqSearch, #allresultsSearch",function(){var e=$(this);
M(e)
});
$(document).on("keypress","#Search, #PeopleSearch, #ProdSearch, #FaqSearch, #allresultsSearch",function(az){if(az.keyCode===13){var aA=$(this);
M(aA)
}});
function M(az){$formSearch=az.closest("form.form-wealth-advisor");
$formSearch.find('input[name="searchTerm"]').removeClass("sun-error");
var e=$formSearch.find('input[name="searchTerm"]').val();
if(!(/[a-zA-Z0-9]/.test(e))){$formSearch.find('input[name="searchTerm"]').addClass("sun-error").focus();
event.preventDefault()
}else{$formSearch.submit()
}}$(".zip-radius-search input").focus(function(){$(this).parents(".suntrust-wrapperContainer, .suntrust-rowContainer").css("overflow","visible")
}).blur(function(){$(this).parents(".suntrust-wrapperContainer, .suntrust-rowContainer").css("overflow","hidden")
});
V();
$(window).resize(function(){V()
});
function V(){$(".newAccount_Col").each(function(){var aA=$(this),az=aA.find('ul[data-suntrust-class="compare-account-list"]'),e=function(){var aE=az.find(".suntrust-accounts-comparison-list-item-wrapper"),aD=aE.find(".suntrust-compare-header"),aC=0,aB=0;
aE.css("height","auto"),aD.css("height","auto"),aD.each(function(){var aF=$(this);
aF.height()>aB&&(aB=aF.height())
}),aD.css("height",aB+"px"),aE.each(function(){var aF=$(this);
aF.height()>aC&&(aC=aF.height())
}),aE.css("height",aC+"px")
};
e()
})
}$(document).off("click","#bbCloseBox");
$(document).on("click","#bbCloseBox",function(){$(this).toggleClass("bbRotate");
$(this).parent().next().slideToggle()
});
var g=$(".openaccountcontresp").length;
$(document).scroll(function(){$("li").each(function(){if($(this).attr("id")=="bbStickyNavBox"){if($(window).scrollTop()>=($("#suntrust-page .openaccountcontresp:last").offset().top+150)){$("#bbStickyNavBox").hide()
}else{$("#bbStickyNavBox").show()
}}})
});
speedBumpCheck();
var t,S;
t=$("#modecheck").val();
if(t=="edit"){S="?wcmmode=disabled"
}else{S="?"
}if($(".suntrust-hero-signon-desktop-block").is(":visible")){var R,N;
if($(".maintenancemode").val()=="true"){if(t=="edit"){R="&maintenance-mode-override=true"
}else{R="maintenance-mode-override=true"
}N=$(".signonpageconfig").val()+".hero_desktop.html"+S+R
}else{N=$(".signonpageconfig").val()+".hero_desktop.html"+S
}$.ajax({url:N,dataType:"text",cache:false,success:function(az){var e=$(az).find("#desktopherosignon").html();
$(".suntrust-hero-signon-desktop-block").html(e);
z();
speedBumpCheck($(".suntrust-hero-signon-desktop-block"));
allowParameter($(".suntrust-hero-signon-desktop-block"))
}})
}$(".suntrust-hero-signon-desktop-block").on("click","input#herosignon-OCM",function(){if($("div#SignOn-herosignon-OCM").attr("data-ocm-trusteer-enabled")=="enabled"){if($("div#SignOn-herosignon-OCM").hasClass("aem-runmode-non-prod-ocm")){(function(){document.cookie="___tk89230="+encodeURIComponent(new Date().valueOf())+";path=/;domain=suntrust.com"
})();
(function(){var aB=document,aC=window,az=aC.location.protocol,e=aB.createElement("script"),aA=aB.getElementsByTagName("head")[0];
e.src=(az=="https:"?"https://":"http://")+"www7-test.suntrust.com/89230/assets.js?r="+Math.random();
e.async=true;
setTimeout(function(){e.type="text/javascript";
aA.appendChild(e)
},0)
})();
(function(){var aC=window,aB=document,az=aC.location.protocol,aA=aB.getElementsByTagName("head")[0],e=aB.createElement("script");
e.src=(az=="https:"?"https://":"http://")+"wex8-test.suntrust.com/exfolder/topHeader.js?r="+Math.random();
e.async=true;
setTimeout(function(){e.type="text/javascript";
aA.appendChild(e)
},0)
})()
}else{if($("div#SignOn-herosignon-OCM").hasClass("aem-runmode-prod-ocm")){(function(){document.cookie="___tk89231="+encodeURIComponent(new Date().valueOf())+";path=/;domain=suntrust.com"
})();
(function(){var aB=document,aC=window,az=aC.location.protocol,e=aB.createElement("script"),aA=aB.getElementsByTagName("head")[0];
e.src=(az=="https:"?"https://":"http://")+"www7.suntrust.com/89231/assets.js?r="+Math.random();
e.async=true;
setTimeout(function(){e.type="text/javascript";
aA.appendChild(e)
},0)
})();
(function(){var aC=window,aB=document,az=aC.location.protocol,aA=aB.getElementsByTagName("head")[0],e=aB.createElement("script");
e.src=(az=="https:"?"https://":"http://")+"wex8.suntrust.com/exfolders/topHeader.js?r="+Math.random();
e.async=true;
setTimeout(function(){e.type="text/javascript";
aA.appendChild(e)
},0)
})()
}}}});
if($(".suntrust-hero-signon-mobile-block").is(":visible")){var ax,aa;
if($(".maintenancemode").val()=="true"){if(t=="edit"){ax="&maintenance-mode-override=true"
}else{ax="maintenance-mode-override=true"
}aa=$(".signonpageconfig").val()+".hero_mobile.html"+S+ax
}else{aa=$(".signonpageconfig").val()+".hero_mobile.html"+S
}$.ajax({url:aa,dataType:"text",cache:false,success:function(az){var e=$(az).find("#mobileherosignon").html();
$(".suntrust-hero-signon-mobile-block").html(e);
z();
speedBumpCheck($(".suntrust-hero-signon-mobile-block"));
allowParameter($(".suntrust-hero-signon-mobile-block"))
}})
}var c,aw;
if($("#globalmaintenancemode").val()=="true"){c="&maintenance-mode-override=true";
if(t=="edit"){c="&maintenance-mode-override=true"
}else{c="maintenance-mode-override=true"
}aw=$("#globalsignonconfig").val()+".signon.html"+S+c
}else{aw=$("#globalsignonconfig").val()+".signon.html"+S
}if($("#globalsignonconfig").val()!=""&&$("#globalsignonconfig").val()!=undefined){$.ajax({url:aw,dataType:"text",cache:false,success:function(az){var e=$(az).find("#globalSignon").html();
$(".suntrust-header-signon-block").html(e);
z();
speedBumpCheck($(".suntrust-header-signon-block"));
allowParameter($(".suntrust-header-signon-block"))
}})
}var X="personal-banking";
var Z="";
var J="";
var E="";
var at="";
allowParameter()
});
$("div.sun-faqs-component-list").find('[data-sun-class="faqs-page-list-item-header"]').click(function(c){c.preventDefault();
var e=$(this),d=e.closest('[data-sun-class="faqs-page-list-item"]'),b=d.find('[data-sun-class="faqs-page-list-item-detail"]');
e.toggleClass("sun-active");
b.toggleClass("sun-active");
e.focus()
});
$(document).on("click",".faq .suntrust-faq-title",function(){var c=$(this).parents(".faq").attr("data-collapse");
if(c=="true"){c=true
}else{c=false
}if($(this).hasClass("suntrust-open")){$(this).removeClass("suntrust-open");
$(this).next("ul.suntrust-faqs-list").hide()
}else{if(c&&!$(this).parents().hasClass("contactUs_accordion")){$(".accordion > div > ul.faq .suntrust-faq-title").removeClass("suntrust-open");
$(".accordion > div > ul.faq ul.suntrust-faqs-list").hide();
$(this).addClass("suntrust-open");
$(this).next("ul.suntrust-faqs-list").toggle()
}else{if(c&&$(this).parents().hasClass("contactUs_accordion")){$(".contactUs_accordion .suntrust-faq-title").removeClass("suntrust-open");
$(".contactUs_accordion ul.suntrust-faqs-list").hide();
$(this).addClass("suntrust-open");
$(this).next("ul.suntrust-faqs-list").toggle()
}else{$(this).addClass("suntrust-open");
$(this).next("ul.suntrust-faqs-list").toggle()
}}var d=$(this).parent("li").offset().top,b=$(window).scrollTop()>=d?d-100:d;
$("html, body").stop().animate({scrollTop:b,easing:"slow"},400)
}});
$(document).on("keypress",".faq .suntrust-faq-title",function(d){if(d.which==13){var f=$(this).parents(".faq").attr("data-collapse");
var c=$(".suntrust-faq-title").attr("data-expand");
if(f=="true"){f=true
}else{f=false
}if($(this).hasClass("suntrust-open")){$(this).removeClass("suntrust-open");
$(this).next("ul.suntrust-faqs-list").hide()
}else{if(f&&!$(this).parents().hasClass("contactUs_accordion")){$(".accordion > div > ul.faq .suntrust-faq-title").removeClass("suntrust-open");
$(".accordion > div > ul.faq ul.suntrust-faqs-list").hide();
$(this).addClass("suntrust-open");
$(this).next("ul.suntrust-faqs-list").toggle()
}else{if(f&&$(this).parents().hasClass("contactUs_accordion")){$(".contactUs_accordion .suntrust-faq-title").removeClass("suntrust-open");
$(".contactUs_accordion ul.suntrust-faqs-list").hide();
$(this).addClass("suntrust-open");
$(this).next("ul.suntrust-faqs-list").toggle()
}else{$(this).addClass("suntrust-open");
$(this).next("ul.suntrust-faqs-list").toggle()
}}var g=$(this).parent("li").offset().top,b=$(window).scrollTop()>=g?g-100:g;
$("html, body").stop().animate({scrollTop:b,easing:"slow"},400)
}}});
$(document).on("click",".suntrust-faqs-list-item-header",function(){$(this).toggleClass("suntrust-active");
$(this).next(".suntrust-faqs-list-item-detail").toggle()
});
function getCookie(c){var b="",e=new Array();
e=document.cookie.split("; ");
for(var f=0;
f<e.length;
f++){var d;
d=new Array();
d=e[f].split("=");
if(d[0]==c){b=unescape(d[1])
}}return b
}function get_cookieNoUnescape(c){var b=document.cookie.match("(^|;) ?"+c+"=([^;]*)(;|$)");
if(b){return b[2]
}else{return null
}}function delete_cookie(b){document.cookie=b+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}function printCookies(b){var c="",e=new Array();
e=document.cookie.split("; ");
for(var f=0;
f<e.length;
f++){var d=new Array();
d=e[f].split("=");
if(d[0]){c+=d[0]+"="+unescape(d[1])+"; "
}}return c
}function setCookie(c,e,b,g,d,f){document.cookie=c+"="+escape(e)+(b?"; expires="+setExpiration(b):"")+(g?"; path="+g:"")+(d?"; domain="+d:"")+(f?"; secure;":"")
}function setCookieNoEscape(c,e,b,g,d,f){document.cookie=c+"="+e+(b?"; expires="+setExpiration(b):"")+(g?"; path="+g:"")+(d?"; domain="+d:"")+(f?"; secure;":"")
}function setExpiration(c){var b=new Date();
var d=new Date(b.getTime()+c*24*60*60*1000);
return d.toGMTString()
}function speedBumpCheck(c){var b=c?c:$(document);
var e="/dotcom/external?clickedUrl=";
var f="www.suntrust.com";
var g;
b.find("a[href^='https://']").each(function(h){g=$(this).attr("href");
if(g.toLocaleLowerCase().indexOf(f)==-1){$(this).attr("href",e+g);
$(this).attr("target","_blank")
}});
b.find("a[href^='http://']").each(function(h){g=$(this).attr("href");
if(g.toLocaleLowerCase().indexOf(f)==-1){$(this).attr("href",e+g);
$(this).attr("target","_blank")
}});
b.find("a[href^='www.']").each(function(h){g=$(this).attr("href");
if(g.toLocaleLowerCase().indexOf(f)==-1){$(this).attr("href",e+g);
$(this).attr("target","_blank")
}});
if($(".newWindowAlertSwitch").val()=="true"){var d="<span class='suntrust-accessible-text'>Opens a new window</span>";
b.find('a[target="_blank"]').each(function(){if(!$(this).hasClass("langLink")){$(this).addClass("newWindow").append(d)
}});
b.find(".newWindow").on("mouseenter",function(){var j=$(this).offset().top+$(this).innerHeight();
var h=$(this).offset().left;
if($(this).hasClass("suntrust-rtl-links")){h+=64
}$(".newWindowpopup").css({top:j,left:h,display:"block"})
}).on("mouseleave",function(){$(".newWindowpopup").css({display:"none"})
});
b.find(".newWindow").focus(function(){var j=$(this).offset().top+$(this).innerHeight();
var h=$(this).offset().left;
if($(this).hasClass("suntrust-rtl-links")){h+=64
}$(".newWindowpopup").css({top:j,left:h,display:"block"})
}).blur(function(){$(".newWindowpopup").css({display:"none"})
})
}}function allowParameter(e){function d(j){url=window.location.href;
j=j.replace(/[\[\]]/g,"\\$&");
var l=new RegExp("[?&]"+j+"(=([^&#]*)|&|#|$)"),k=l.exec(url);
if(!k){return null
}if(!k[2]){return""
}return k[2].replace(/\+/g," ")
}var h=d("type");
var g=d("accounttype");
var b=d("accountnumber");
var f="suntrust.com/UI/login";
var c=e?e:$(document);
if(h!=null&&h!=undefined&&h!=""&&g!=null&&g!=undefined&&g!=""&&b!=null&&b!=undefined&&b!=""){c.find('a[href*="suntrust.com/UI/login"]').each(function(){var j=$(this).attr("href");
if(j.indexOf(f)!=-1){$(this).attr("href","https://onlinebanking.suntrust.com/UI/enrollment?type="+h+"&accounttype="+g+"&accountnumber="+b)
}})
}}function suntrustdynamicwidth(d,e,c){if(e.parents(".suntrust-section3A").is(".suntrust-section3A")){if(d<9){var b=100;
if(window.innerWidth>940){if(d>=5){b=(100/5)
}else{b=(100/d)
}}else{if(window.innerWidth<=940&&window.innerWidth>=601){b=(100/3)
}else{if(window.innerWidth<=600){b=100
}}}e.find("li").css("width",b+"%");
if(window.innerWidth>639){e.find("li").each(function(){c=c>$(this).height()?c:$(this).height()
});
e.find("li").each(function(){$(this).height(c)
})
}else{e.find("li").each(function(){$(this).height("auto")
})
}}}else{if(d>2&d<9){var b=100;
if(window.innerWidth>940){b=(100/d)
}else{if(window.innerWidth<=940&&window.innerWidth>=601){b=(100/3)
}else{if(window.innerWidth<=600){b=100
}}}e.find("li").css("width",b+"%");
if(window.innerWidth>639){e.find("li").each(function(){c=c>$(this).height()?c:$(this).height()
});
e.find("li").each(function(){$(this).height(c)
})
}else{e.find("li").each(function(){$(this).height("auto")
})
}}}}function suntrustfourcolwidth(d,e,c){if(d<9){var b=100;
if(window.innerWidth>800){if(e.parents(".suntrust-section3A").is(".suntrust-section3A")){if(d>=2){b=(100/2)
}else{b=100
}}else{if(d>=4){b=(100/4)
}else{b=(100/d)
}}}else{if(window.innerWidth<=768){b=100;
$(this).find("li").each(function(){$(this).css("height","auto !important")
})
}}e.find("li").css("width",b+"%");
if(window.innerWidth>800){e.find("li").each(function(){c=c>$(this).height()?c:$(this).height()
});
e.find("li").each(function(){$(this).height(c)
})
}else{e.find("li").each(function(){$(this).height("auto")
})
}}}function tableCompare(b){if(window.innerWidth<768){if(b=="static"){$(this).parent(".suntrust_account_find").find(".table_compare_mobile").show();
var c=$(this).parent(".suntrust_account_find").find(".table_compare_mobile").find("tr:nth-child(2) td").length;
if(c==1){$(this).parent(".suntrust_account_find").find(".table_compare_mobile").find("td").addClass("text-center")
}else{$(this).parent(".suntrust_account_find").find(".table_compare_mobile").find("td").removeClass("text-center")
}}}else{$(".table_compare_mobile").hide()
}}var HashSearch=new function(){var b;
this.set=function(c,d){b[c]=d;
this.push()
};
this.remove=function(c,d){delete b[c];
this.push()
};
this.get=function(c,d){return b[c]
};
this.keyExists=function(c){return b.hasOwnProperty(c)
};
this.push=function(){var e=[],c,d;
for(c in b){if(b.hasOwnProperty(c)){c=escape(c),d=escape(b[c]);
e.push(c+((d!=="undefined")?"="+d:""))
}}window.location.hash=e.join("&")
};
(this.load=function(){b={};
var f=window.location.hash,d,c;
f=f.substring(1,f.length);
d=f.split("&");
for(var e=0;
e<d.length;
e++){c=d[e].split("=");
b[unescape(c[0])]=(typeof c[1]!="undefined")?(unescape(c[1])).replace(/\+/g," "):c[1]
}})()
};
$(".sun-product-carousel-slide-wrapper a, .suntrust-login-form-hero-signon input, div.suntrust-hero-signon-desktop-black, div.suntrust-hero-mobile-signon").click(function(b){b.stopPropagation()
});
var FlashDetect=new function(){var b=this;
b.installed=false;
b.raw="";
b.major=-1;
b.minor=-1;
b.revision=-1;
b.revisionStr="";
var c=[{name:"ShockwaveFlash.ShockwaveFlash.7",version:function(j){return e(j)
}},{name:"ShockwaveFlash.ShockwaveFlash.6",version:function(l){var j="6,0,21";
try{l.AllowScriptAccess="always";
j=e(l)
}catch(k){}return j
}},{name:"ShockwaveFlash.ShockwaveFlash",version:function(j){return e(j)
}}];
var e=function(l){var j=-1;
try{j=l.GetVariable("$version")
}catch(k){}return j
};
var h=function(j){var l=-1;
try{l=new ActiveXObject(j)
}catch(k){l={activeXError:true}
}return l
};
var d=function(k){var j=k.split(",");
return{raw:k,major:parseInt(j[0].split(" ")[1],10),minor:parseInt(j[1],10),revision:parseInt(j[2],10),revisionStr:j[2]}
};
var g=function(m){var k=m.split(/ +/);
var l=k[2].split(/\./);
var j=k[3];
return{raw:m,major:parseInt(l[0],10),minor:parseInt(l[1],10),revisionStr:j,revision:f(j)}
};
var f=function(j){return parseInt(j.replace(/[a-zA-Z]/g,""),10)||b.revision
};
b.majorAtLeast=function(j){return b.major>=j
};
b.minorAtLeast=function(j){return b.minor>=j
};
b.revisionAtLeast=function(j){return b.revision>=j
};
b.versionAtLeast=function(k){var l=[b.major,b.minor,b.revision];
var j=Math.min(l.length,arguments.length);
for(i=0;
i<j;
i++){if(l[i]>=arguments[i]){if(i+1<j&&l[i]==arguments[i]){continue
}else{return true
}}else{return false
}}};
b.FlashDetect=function(){if(navigator.plugins&&navigator.plugins.length>0){var m="application/x-shockwave-flash";
var l=navigator.mimeTypes;
if(l&&l[m]&&l[m].enabledPlugin&&l[m].enabledPlugin.description){var j=l[m].enabledPlugin.description;
var n=g(j);
b.raw=n.raw;
b.major=n.major;
b.minor=n.minor;
b.revisionStr=n.revisionStr;
b.revision=n.revision;
b.installed=true
}}else{if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){var j=-1;
for(var k=0;
k<c.length&&j==-1;
k++){var o=h(c[k].name);
if(!o.activeXError){b.installed=true;
j=c[k].version(o);
if(j!=-1){var n=d(j);
b.raw=n.raw;
b.major=n.major;
b.minor=n.minor;
b.revision=n.revision;
b.revisionStr=n.revisionStr
}}}}}}()
};
FlashDetect.JS_RELEASE="1.0.4";
$(document).on("click",".peopleSearch_tog",function(){$(this).next().slideToggle();
if($(this).find("strong").text()=="Show Locations"){$(this).find("strong").text("Hide Locations");
$(this).find("span").text("-")
}else{if($(this).find("strong").text()=="Hide Locations"){$(this).find("strong").text("Show Locations");
$(this).find("span").text("+")
}}});
function ajaxError(){console.log("An error occurred. Please try again.")
}$(document).ready(function(){$(".calculator_div input").keyup(function(c){this.value=this.value.replace(/[^0-9\.,]/g,"")
});
$(".resetCalVal").click(function(){$(".calculator_div input").val("");
$(".financialGap_positive,.financialGap_negative").addClass("hide");
if($(".calculator_div").prev().hasClass("school_button")){$(".school_annual_exp").removeClass("active")
}});
$(".calculator_div input").bind("blur",function(){if(!$(".calculator_div").hasClass("MonthlyCalc")){var m=0;
var y=0;
var u=0;
m=parseFloat(m);
$($(this).parents("table").find("input")).each(function(){if($(this).val()!=""&&!$(this).attr("class")){if($(this).val().match(/\d+/g)!=null){var I=$(this).val().replace(/[^0-9\.]/g,"");
m+=parseFloat(I);
y++
}else{u++
}}else{u++
}});
if(u>0){$(this).parents("table").find("tr:last input").val("");
if($(".annaul_subTotal").val()==""){$(".annaulExpense").val("")
}if($(".scholarship_subTotal").val()==""&&$(".annual_subTotal").val()==""){$(".annualFinancial").val("")
}if($(".annaulExpense").val()==""||$(".annualFinancial").val()==""){$(".totalFinancialGap").val("");
$(".financialGap_positive,.financialGap_negative").addClass("hide")
}}if(y>0){m=m.toString();
var B=m.split(".");
m=B[0];
if(B[1]!=undefined){if(B[1]>2){B[1]=B[1].substring(0,2)
}if(B[1].length==1){B[1]=B[1]+"0"
}}var C=m.substring(m.length-3);
var w=m.substring(0,m.length-3);
if(w!=""){C=","+C
}var H=w.replace(/\B(?=(\d{3})+(?!\d))/g,",")+C;
if(B[1]!=undefined){$(this).parents("table").find("tr:last input").val(H+"."+B[1])
}else{$(this).parents("table").find("tr:last input").val(H+".00")
}}if($(".annaul_subTotal").val()!=""){$(".annaulExpense").val($(".annaul_subTotal").val())
}if($(".scholarship_subTotal").val()!=""||$(".annual_subTotal").val()!=""){var n=0;
var k=0;
if($(".scholarship_subTotal").val()!=""){var t=$(".scholarship_subTotal").val().replace(/[^0-9\.]/g,"");
n=parseFloat(t)
}if($(".annual_subTotal").val()!=""){var E=$(".annual_subTotal").val().replace(/[^0-9\.]/g,"");
k=parseFloat(E)
}var A=n+k;
A=A.toString();
var z=A.split(".");
A=z[0];
if(z[1]!=undefined){if(z[1]>2){z[1]=z[1].substring(0,2)
}if(z[1].length==1){z[1]=z[1]+"0"
}}var F=A.substring(A.length-3);
var j=A.substring(0,A.length-3);
if(j!=""){F=","+F
}var o=j.replace(/\B(?=(\d{3})+(?!\d))/g,",")+F;
if(z[1]!=undefined){$(".annualFinancial").val(o+"."+z[1])
}else{$(".annualFinancial").val(o+".00")
}}if($(".annaulExpense").val()!=""&&$(".annualFinancial").val()!=""){var q=0;
var h=0;
if($(".annaulExpense").val()!=""){var D=$(".annaulExpense").val().replace(/[^0-9\.]/g,"");
q=parseFloat(D)
}if($(".annualFinancial").val()!=""){var r=$(".annualFinancial").val().replace(/[^0-9\.]/g,"");
h=parseFloat(r)
}var c=h-q;
var p="";
var l=c.toString();
l=l.split("-");
if(l[0]==""){p="-"
}c=c.toString();
var g=c.split(".");
c=g[0];
if(g[1]!=undefined){if(g[1]>2){g[1]=g[1].substring(0,2)
}if(g[1].length==1){g[1]=g[1]+"0"
}}var v=c.substring(c.length-3);
var G=c.substring(0,c.length-3);
if(G!=""&&G!="-"){v=","+v
}var e=G.replace(/\B(?=(\d{3})+(?!\d))/g,",")+v;
var d=e.split("-");
if(d[0]==""){e=d[1]
}if(g[1]!=undefined){$(".totalFinancialGap").val(p+e+"."+g[1])
}else{$(".totalFinancialGap").val(p+e+".00")
}var f=c;
if($(".totalFinancialGap").val().indexOf("-")>-1){f=$(".totalFinancialGap").val().replace(/[^0-9\.\-]/g,"");
f=parseFloat(f)
}if(c>0){$(".financialGap_positive span").html("");
if(g[1]!=undefined){$(".financialGap_positive span").html(p+e+"."+g[1])
}else{$(".financialGap_positive span").html(p+e+".00")
}$(".financialGap_positive").removeClass("hide");
$(".financialGap_negative").addClass("hide")
}else{if(c<0){$(".financialGap_negative span").html("");
if(g[1]!=undefined){$(".financialGap_negative span").html(e+"."+g[1])
}else{$(".financialGap_negative span").html(e+".00")
}$(".financialGap_negative").removeClass("hide");
$(".financialGap_positive").addClass("hide")
}else{if(c==0){$(".financialGap_positive").addClass("hide");
$(".financialGap_negative").addClass("hide")
}}}}}});
if(window.innerWidth<801){$(document).on("click",".calculator_div label",function(c){c.preventDefault()
})
}b();
function b(){var c=0;
$(".school_button .school_annual_exp").each(function(){if($(this).height()>c){c=$(this).height()
}});
$(".school_button .school_annual_exp").height(c)
}$(window).resize(function(){b()
});
$(document).on("click",".school_annual_exp",function(){$(".school_annual_exp").removeClass("active");
$(this).addClass("active");
var d=$(this).attr("id");
var c=0;
$(".calculator_div table.savings_contribution input").val("");
$(".calculator_div table.savings_contribution input[data-"+d+"]").each(function(){var e=$(this).attr("data-"+d);
$(this).val(e)
});
$(".calculator_div table.savings_contribution input:not([data-"+d+"])").each(function(){$(this).val("0.00")
});
$(".calculator_div table.savings_contribution input").trigger("blur")
})
});
var lf_iFrameID="lf-example-iframe-id";
if(window!=window.top){var lf_userResize=true;
function lf_onResize(b){lf_userResize=true
}function lf_onMessage(e){if(!lf_userResize){return
}var b=document.getElementById(this.lf_iFrameID);
if(b==null||e.source!=b.contentWindow){return
}var d=JSON.parse(e.data);
var c=d.height;
b.height=0;
b.height=c;
lf_userResize=false
}if(window.attachEvent){window.attachEvent("onmessage",lf_onMessage);
window.attachEvent("onresize",lf_onResize)
}else{if(window.addEventListener){window.addEventListener("message",lf_onMessage,false);
window.addEventListener("resize",lf_onResize,false)
}}}$(window).load(function(){var g=$(".lightstream");
if(g.length>=1){if(typeof(Storage)!=="undefined"){if(!sessionStorage.getItem("lsData")||typeof(sessionStorage.getItem("lsData"))=="undefined"){$.ajax({type:"GET",url:"/dotcom/lightstreamservice",success:function(j){sessionStorage.setItem("lsData",j)
},async:false})
}}else{console.log("You are using a old browser that does not support Web Storage")
}}var d=0;
var b=0;
var e=[];
var f=[];
var c;
var h;
obj=JSON.parse(sessionStorage.getItem("lsData"));
$(g).each(function(o,p){var m=$(p).attr("class");
var n=m.split(" ")[1];
var k=m.split(" ")[2];
f=[];
e=[];
if(n=="DefaultNoAuto"){for(var o=0;
o<obj.length;
o++){if(obj[o].LoanPurpose!="NewAutoPurchase"&&obj[o].LoanPurpose!="UsedAutoPurchase"&&obj[o].LoanPurpose!="PrivatePartyPurchase"&&obj[o].LoanPurpose!="LeaseBuyOut"&&obj[o].LoanPurpose!="AutoRefinancing"){for(var j=0;
j<obj[o].LoanTerms.length;
j++){amtTerm=obj[o].LoanTerms[j].AmountTerms;
for(var q=0;
q<amtTerm.length;
q++){if(k=="Min"){c=JSON.stringify(amtTerm[q].Rates.Min);
e.push(c)
}if(k=="Max"){h=JSON.stringify(amtTerm[q].Rates.Max);
f.push(h)
}}}}}}else{if(n=="Default"){for(var o=0;
o<obj.length;
o++){for(var j=0;
j<obj[o].LoanTerms.length;
j++){amtTerm=obj[o].LoanTerms[j].AmountTerms;
for(var q=0;
q<amtTerm.length;
q++){if(k=="Min"){c=JSON.stringify(amtTerm[q].Rates.Min);
e.push(c)
}if(k=="Max"){h=JSON.stringify(amtTerm[q].Rates.Max);
f.push(h)
}}}}}else{for(var o=0;
o<obj.length;
o++){if(obj[o].LoanPurpose==n){for(var j=0;
j<obj[o].LoanTerms.length;
j++){amtTerm=obj[o].LoanTerms[j].AmountTerms;
for(var q=0;
q<amtTerm.length;
q++){if(k=="Min"){c=JSON.stringify(amtTerm[q].Rates.Min);
e.push(c)
}if(k=="Max"){h=JSON.stringify(amtTerm[q].Rates.Max);
f.push(h)
}}}break
}}}}if(f.length>0){d=Math.max.apply(Math,f)
}else{d=0
}if(e.length>0){b=Math.min.apply(Math,e)
}else{b=0
}var l=d>0?d:b;
l=(l*100).toFixed(2);
$(p).replaceWith(l+"%")
})
});
$(document).ready(function(){var d=$("#people-profile-data").find(".lo-data-persist");
if(d.length){var e=d,h=typeof(e.data("lo-phone"))=="undefined"?"":e.data("lo-phone"),j=typeof(e.data("lo-id"))=="undefined"?"":e.data("lo-id"),c=typeof(e.data("lo-nmls"))=="undefined"?"":e.data("lo-nmls"),b=typeof(e.data("lo-email"))=="undefined"?"":e.data("lo-email"),g=typeof(e.data("lo-mortgageappurl"))=="undefined"?"":e.data("lo-mortgageappurl");
Cookies.remove("LoanOfficer");
Cookies.set("LoanOfficer",{lo:j,phone:h,nmls:c,email:b,mortgageApplynowURL:g});
var f=Cookies.getJSON("LoanOfficer");
if(typeof(f)!="undefined"){console.log("LOID : "+f.lo);
console.log("NMLSID : "+f.nmls);
console.log("EMAIL : "+f.email);
console.log("PHONE : "+f.phone);
console.log("mortgageApplynowURL : "+f.mortgageApplynowURL)
}}$(".lo-data-persist-enabled").each(function(){var m=$(this),l=m.attr("href"),n=Cookies.getJSON("LoanOfficer");
if(l!=""&&l!="#"&&l!=undefined&&l.indexOf("tel:")<0){if(typeof(n)!="undefined"){var k="referrerId="+n.email;
if(l.indexOf("/dotcom/external?clickedUrl=")!=-1){var o=l.split("/dotcom/external?clickedUrl=")[1];
if(o.indexOf("?")!=-1){m.attr("href",l+"&"+k)
}else{m.attr("href",l+"?"+k)
}}else{m.attr("href",fullURL(l,k))
}}}if(l!=undefined&&l.indexOf("tel:")>=0){if(typeof(n)!="undefined"){console.log("loPhoneNumber is"+n.phone);
m.attr("href","tel:"+n.phone);
m.text(n.phone)
}}});
$("div#lo-persist-contactus").each(function(){var m=$(this).text().trim();
var n=$(this).prev("div#lo-persist-contactus-liveengage").text().trim();
var k=Cookies.getJSON("LoanOfficer");
if(typeof(k)!="undefined"&&m==="true"&&n!="None"){var l=n;
$("li#"+l).remove()
}});
$("div.lo-persist-supportus").each(function(){var m=$(this).text().trim();
var n=$(this).prev("div.lo-persist-supportus-liveengage").text().trim();
var k=Cookies.getJSON("LoanOfficer");
if(typeof(k)!="undefined"&&m==="true"&&n!="None"){var l=n;
$("li#"+l).remove()
}})
});
function fullURL(c,b){var d=c.split("#");
d[0]=d[0]+((d[0].indexOf("?")!==-1)?"&":"?")+b;
return d.join("#")
}(function(c){var b={init:function(n){var h=c(this),g=h.find("[data-modal-window]"),f=h.find('[data-suntrust-class="close-modal"]'),m=c('[data-suntrust-class="suntrust-overlay"]'),l=c("[data-click-safety]"),k=_.bind(function(){b.close.apply(this)
},this);
f.click(k);
m.click(k);
h.addClass("active");
var e;
function j(){e=g.outerHeight()/-2;
g.css({"margin-top":e})
}j();
c(window).resize(_.throttle(j,250));
l.click(function(o){o.stopPropagation()
});
var d=c(".suntrust-compare-title-row");
if(d.length>0){d.each(function(){var p=c(this).find(".suntrust-compare-title"),o=p.innerHeight()-1;
c(this).height(o)
})
}return this
},close:function(d){var f=c(this),e=f.find("[data-modal-window]"),g=f.find('[data-suntrust-class="close-modal"]');
c('[data-suntrust-class="suntrust-modal-inner"]').empty();
g.off();
f.removeClass("active");
return this
}};
c.fn.modalWindow=function(d){if(b[d]){return b[d].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof d==="object"||!d){return b.init.apply(this,arguments)
}else{c.error("Method "+d+" does not exist on jQuery.suntrust.modalWindow")
}}}
})(jQuery);
$(document).ready(function(){var h=navigator.appName=="Microsoft Internet Explorer"||/Edge\/\d./i.test(navigator.userAgent)||!!(navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/rv:11/))||(typeof $.browser!=="undefined"&&$.browser.msie==1);
var n=[];
var m={};
var j=null;
var k=null;
function c(t,u){this.audio=t;
this.id=t.id;
this.duration=u
}c.prototype.bindAudioPlayer=function(t){this.audioplayer=document.getElementById("audioplayer-"+t);
this.playbutton=document.getElementById("playbutton-"+t);
this.timeline=document.getElementById("timeline-"+t);
this.playhead=document.getElementById("playhead-"+t);
this.timelineWidth=this.timeline.offsetWidth-this.playhead.offsetWidth;
this.total_Time=document.getElementById("total-time-"+t);
this.current_Time=document.getElementById("current-time-"+t);
this.progress=document.getElementById("audio-progress-"+t)
};
c.prototype.addEventListeners=function(){this.audio.addEventListener("loadedmetadata",c.prototype.loadedData,false);
this.audio.addEventListener("timeupdate",c.prototype.timeUpdate,false);
this.audio.addEventListener("durationchange",c.prototype.durationChange,false);
this.playbutton.addEventListener("click",c.prototype.pressPlay,false);
this.timeline.addEventListener("click",c.prototype.timelineClick,false);
this.playhead.addEventListener("mousedown",c.prototype.mouseDown,false);
window.addEventListener("mouseup",g,false)
};
function e(){var t=document.getElementsByClassName("music");
for(i=0;
i<t.length;
i++){n.push(new c(t[i],0));
n[i].bindAudioPlayer(i);
n[i].addEventListeners()
}}function r(){for(i=0;
i<n.length;
i++){m[n[i].audio.id]=i;
m[n[i].playbutton.id]=i;
m[n[i].timeline.id]=i;
m[n[i].playhead.id]=i;
m[n[i].total_Time.id]=i;
m[n[i].current_Time.id]=i
}}c.prototype.durationChange=function(){var t=n[f(this.id)];
if(isFinite(this.duration)){t.duration=this.duration
}else{t.duration=$(this).prev(".aem-audio-duration").html()
}};
c.prototype.loadedData=function(){var t=n[f(this.id)];
t.duration=this.duration;
if(isFinite(t.duration)){t.total_Time.textContent=o(t.duration)
}else{console.log("duration="+t.duration)
}};
c.prototype.playAble=function(){var t=n[f(this.id)];
t.playbutton.style.visibility="visible"
};
c.prototype.pressPlay=function(){var t=f(this.id);
n[t].play()
};
c.prototype.play=function(){e();
if(this==j){j=null;
this.audio.pause();
b(this.playbutton,"playbutton play")
}else{if(j!=null){j.audio.pause();
b(j.playbutton,"playbutton play")
}this.audio.play();
j=this;
b(this.playbutton,"playbutton pause")
}};
c.prototype.timelineClick=function(u){var t=n[f(this.id)];
if(isFinite(t.audio.duration)){t.audio.currentTime=t.audio.duration*d(u,t.timeline,t.timelineWidth)
}else{var v=$(this).attr("duration");
console.log("Clickao.audio.duration=="+v);
t.audio.currentTime=v*d(u,t.timeline,t.timelineWidth)
}};
c.prototype.mouseDown=function(u){k=this.id;
var t=n[f(this.id)];
window.addEventListener("mousemove",c.prototype.moveplayhead,true);
t.audio.removeEventListener("timeupdate",c.prototype.timeUpdate,false)
};
function g(w){if(k!=null){var t=n[f(k)];
window.removeEventListener("mousemove",c.prototype.moveplayhead,true);
if(isFinite(t.audio.duration)){t.audio.currentTime=t.audio.duration*d(w,t.timeline,t.timelineWidth)
}else{console.log("playhead="+k);
var u=document.getElementById(k);
var v=u.parentElement.getAttribute("duration");
console.log("Infinity Mouse Move=="+v);
t.audio.currentTime=v*d(w,t.timeline,t.timelineWidth)
}t.audio.addEventListener("timeupdate",c.prototype.timeUpdate,false)
}k=null
}c.prototype.moveplayhead=function(v){var u=n[f(k)];
var t=v.clientX-p(u.timeline);
if(t>=0&&t<=u.timelineWidth){document.getElementById(k).style.marginLeft=t+"px"
}if(t<0){playhead.style.marginLeft="0px"
}if(t>u.timelineWidth){playhead.style.marginLeft=u.timelineWidth+"px"
}};
c.prototype.timeUpdate=function(){var u=n[f(this.id)];
if(!isFinite(u.duration)){u.duration=$(this).prev(".aem-audio-duration").html()
}var t=u.timelineWidth*(u.audio.currentTime/u.duration);
u.playhead.style.marginLeft=t+"px";
u.current_Time.textContent=o(u.audio.currentTime);
u.progress.style.width=t+"px";
if(u.audio.currentTime==u.duration){b(u.playbutton,"playbutton play");
u.audio.currentTime=0;
u.audio.pause();
j=null
}};
function b(t,u){t.className=u
}function f(t){return m[t]
}function d(u,t,v){return(u.clientX-p(t))/v
}function p(t){return t.getBoundingClientRect().left
}function o(v){var t=Math.floor(v/60);
var u=Math.floor(v%60);
return t+":"+((u<10)?("0"+u):u)
}function q(){$(".music").each(function(v){var u=$(this).prev(".aem-audio-duration").html();
this.id="audio-"+v;
var t='<div id="audioplayer-'+v+'" class="audioplayer"><button id="playbutton-'+v+'" class="play playbutton"></button><div id="timeline-'+v+'" class="timeline" duration='+u+'><div id="audio-progress-'+v+'" class="audio-progress"></div><div id="playhead-'+v+'" class="playhead"></div></div><div class="time-wrapper"><span id="current-time-'+v+'" class="current-time">0:00</span><span class="time-slash">/</span><span id="total-time-'+v+'" class="total-time">0:00</span></div></div>';
$(this).after(t)
})
}q();
e();
r();
$(window).resize(function(){e()
});
function l(){$(".music").each(function(){$(this).trigger("load");
var t=this.duration
})
}if(h){setTimeout(function(){$(".music").each(function(){var t=$(this).next().find(".total-time").html();
var v;
console.log("ttime"+t);
if(t=="0:00"){var u=$(this).prev(".aem-audio-duration").html();
$(this).next().find(".total-time").html(o(u));
console.log("aem duration=="+u);
l()
}})
},800)
}});
$(document).ready(function(){var d=navigator.appName=="Microsoft Internet Explorer"||!!(navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/rv:11/))||(typeof $.browser!=="undefined"&&$.browser.msie==1);
if(d){jQuery.fn.putCursorAtEnd=function(){return this.each(function(){var g=$(this),h=this;
if(!g.is(":focus")){g.focus()
}if(h.setSelectionRange){var f=g.val().length*2;
setTimeout(function(){h.setSelectionRange(f,f)
},1)
}else{g.val(g.val())
}})
}
}$(".contentintakeform select").uniform({selectClass:"sun-select-container",selectAutoWidth:false}).each(function(){$(this).siblings("span").attr("aria-hidden",true)
});
$("select#cmbComplianceSingleUser").select2();
$("select#cmbLegalSingleUser").select2();
$("input.pageNameValid").focus(function(){$(this).removeClass("errorBorderClass")
});
$("#button").click(function(){$("input[type='file']").trigger("click")
});
$("input[type='file']").change(function(){$("#val").text(this.value.replace(/C:\\fakepath\\/i,""));
if(d){$("#val").text(this.files&&this.files.length?this.files[0].name:this.value.replace(/^C:\\fakepath\\/i,""))
}$("#val").append("<span id='closeIcon'>&times;</span>");
$("#closeIcon").click(function(){$("#fileUpolad").val("");
$("#val").empty()
})
});
$(".suntrust-radio-button").change(function(){var f=$(this).is(":checked");
if(f="true"){$(this).parent().removeClass("errorBorderClass")
}});
var c=$("#wftype").val();
if(c=="Expedited"){$("#uniform-cmbComplianceSingleUser").parent().parent().hide();
$("#uniform-cmbLegalSingleUser").parent().parent().hide()
}var b;
$("#iw_submit_comment_id").on("focus",function(){$(this).val(b);
if(d){$(this).putCursorAtEnd()
}$(this).removeClass("errorBorderClass")
});
$("#iw_submit_comment_id").on("blur",function(){$(this).removeClass("errorBorderClass");
console.log("blur called");
var l=$("#Jobtype :selected").val();
var k=" Requester: "+$("#Name").val()+";";
var f=" Legal Reviewer: "+$("#cmbLegalSingleUser :selected").text()+";";
var j=" Compliance Reviewer: "+$("#cmbComplianceSingleUser :selected").text();
var h="";
var g=$(this).val();
b=g;
if($("#wftype option:selected").val()=="Expedited"){$("#iw_submit_comment_id").val(h+l+" - "+g+k)
}else{if(g!=""){if(l!=""){$("#iw_submit_comment_id").val(h+l+" - "+g+k+j+" ; "+f)
}else{$("#iw_submit_comment_id").val(h+l+""+g+k+j+" ; "+f)
}}else{$("#iw_submit_comment_id").val(h+l+""+g+k+j+" ; "+f)
}}});
var e=$(".contentintakeform");
if(e.is(":visible")){$("body").addClass("contentRemovePadding")
}var c=$("#wftype").val();
if(c==="Expedited"){$("#uniform-cmbComplianceSingleUser").parent().parent().hide();
$("#uniform-cmbLegalSingleUser").parent().parent().hide()
}$("#wftype").on("change",function(){$("#wftype").parent().removeClass("errorBorderClass")
});
$("#Jobtype").on("change",function(){$("#Jobtype").parent().removeClass("errorBorderClass")
});
$("#cmbComplianceSingleUser").on("change",function(){var f=$("#select2-cmbComplianceSingleUser-container").text();
if(f!="Select One"){console.log("1");
$("#select2-cmbComplianceSingleUser-container").parent().removeClass("errorBorderClass")
}});
$("#cmbLegalSingleUser").on("change",function(){var f=$("#select2-cmbLegalSingleUser-container").text();
if(f!="Select One"){$("#select2-cmbLegalSingleUser-container").parent().removeClass("errorBorderClass")
}})
});
var submitButton=true;
var template="solutions/standexp_submit_with_email.wft";
var flag=0;
var tname="STcom Approval Workflow";
function formSubmit(d){var r=function(B){alert("Unable to retrive data "+B)
};
var g=true;
var b=$("#PublishMonth").val();
var p=$("#PublishDay").val();
var v=$("#PublishYear").val();
var q="";
if(b!="0"&&p!="00"){q=b+"/"+p+"/"+v
}var l=$("#ExpirationMonth").val();
var z=$("#ExpirationDay").val();
var u=$("#ExpirationYear").val();
var f="";
if(l!="0"&&z!="00"){f=l+"/"+z+"/"+u
}var w=$("#cmbComplianceSingleUser option:selected").text();
var y=$("#cmbLegalSingleUser option:selected").text();
w=(w==="Select One")?"N/A":w;
y=(y==="Select One")?"Select One":y;
if($("#wftype").val()=="NA"){$("#wftype").parent().addClass("errorBorderClass");
g=false
}if($("#Jobtype").val()==""){$("#Jobtype").parent().addClass("errorBorderClass");
g=false
}var o=$("textarea.iw-base-text-field-data");
var t=$("textarea.iw-base-text-field-data").val();
if(t==""){o.addClass("errorBorderClass");
g=false
}var n=$(".pageNameValid").val();
var j=$(".pageNameValid");
if(n==""){j.addClass("errorBorderClass");
g=false
}if($("#wftype").val()!="Expedited"){if($("#cmbComplianceSingleUser").val()=="N/A"){$("#select2-cmbComplianceSingleUser-container").parent().addClass("errorBorderClass");
g=false
}}if(submitButton){if(tname=="STcom Approval Workflow"){if(g){var e=$("#fileUploadForm")[0];
var A=new FormData(e);
var h=$("#iw_submit_comment_id").val();
var c=$("#contentIntakePageName").val();
var k=$("#PublishComments").val();
var m=$("#existing-url").val();
h=encodeURIComponent(h);
c=encodeURIComponent(c);
k=encodeURIComponent(k);
m=encodeURIComponent(m);
A.append("encodeJobDescription",h);
A.append("encodedContentIntakePageName",c);
A.append("encodedPublishComments",k);
A.append("encodedExistingUrls",m);
A.append("publishDateText",q);
A.append("expirationDateText",f);
A.append("selectedCompilanceReviewerName",w);
A.append("selectedLegalReviewerName",y);
$.ajax({type:"POST",enctype:"multipart/form-data",url:"/dotcom/content-intake-search",data:A,processData:false,contentType:false,cache:false,success:function(G){var D=jQuery.parseJSON(G);
var F=D.uniqueID;
var C=D.formSubmisionStatus;
var E=D.assetUploadStatus;
var B=D.uniqueIDPageStatus;
$("#formSubmissionStatus").text("Form submission request ("+F+") status : "+C+"."+E+B);
$("#submitButtonBottom").addClass("btnDisable");
$("#submitButtonBottom").click(function(H){H.preventDefault()
});
if(E!=""||B!=""){$("#submitButtonBottom").removeClass("btnDisable")
}$("#formSubmissionStatus").show();
$(".mandatoryCheck").hide()
}})
}else{$(".mandatoryCheck").show();
$("#wftype").focus();
$("#formSubmissionStatus").hide()
}}else{submitButton=false;
d.disabled=true;
document.getElementById("submitButtonBottom").disabled=true;
document.forms.iwwft_instantiator.submit()
}}return false
}function checkText(b){if(b.value.length>499){b.value=""
}}function addSTComm(f){if(f.value!=""){var j="";
var h="";
var b="";
var e="";
var g="";
var d=$("textarea.iw-base-text-field-data");
d.removeClass("errorBorderClass");
if(document.getElementById("wftype").value=="Expedited"||document.getElementById("wftype").value=="Standard"){j=document.getElementById("Jobtype").value;
if(j==0){j=""
}h=" Requester: "+document.getElementById("Name").value+"; "
}if(document.getElementById("wftype").value=="Standard"){b=b.options[b.selectedIndex].text;
b="L&C Group: "+b+"; "
}else{b="L&C Group: Not specified; "
}if(document.getElementById("SkipLegComp").value!="Yes"){e=document.getElementById("cmbLegalSingleUser");
if(e.selectedIndex!="0"){e=e.options[e.selectedIndex].text;
e="Legal: "+e+"; "
}else{e="Legal: Not specified; "
}g=document.getElementById("cmbComplianceSingleUser");
if(g.selectedIndex!="0"){g=g.options[g.selectedIndex].text;
g="Compliance: "+g+"; "
}else{g="Compliance: Not specified; "
}}}var c="ST.com - ";
if(f.value!=""&&j!=""){f.value=c+j+" - "+f.value+h+b+e+g
}else{f.value=c+j+""+f.value+h+b+e+g
}}function removeSTComm(b){$(".textAreasize").removeClass("errorBorderClass");
if(b.value!=""){var m="";
if(document.getElementById("wftype").value=="Expedited"||document.getElementById("wftype").value=="Standard"){m=document.getElementById("Jobtype").value;
if(m==0){m=""
}}var n=b.value.split("-");
var c=n.length-1;
var h=$("#Jobtype :selected").val().split("-");
if(h.length>1){if(n.length>3){var k=n[c].split(" ");
var d=0;
var g="";
for(var f=0;
f<k.length-1;
f++){if(f>0&&d==0&&k[f]!="Requester:"&&k[f]!=""){g+=k[f]+" "
}else{if(f>0){d++
}}}b.value=g
}else{b.value=""
}}else{if(n.length==2){var k=n[c].split(" ");
var o=n[c].split("Requester");
var d=0;
var g="";
var l="";
for(var e=0;
e<n.length-1;
e++){if(e>1){if(e==2){n[e]=n[e].trim()+" "
}l+=n[e]+"-"
}}for(var f=0;
f<k.length-1;
f++){if(f>0&&d==0&&k[f]!="Requester:"&&k[f]!=""){g+=k[f]+" "
}else{if(f>0){d++
}}}b.value=l+" "+o[0].trim()+" "
}else{if(n.length>2){var o=n[c].split("Requester");
var l="";
for(var e=0;
e<n.length-1;
e++){if(e>1){if(e==2){n[e]=n[e].trim()+" "
}l+=n[e]+"-"
}}b.value=l+" "+n[c-1].trim()+" - "+o[0].trim()+" "
}else{b.value=""
}}}}}function checkForPublish(b){if(b.value.length>500){alert("The Max Length Exceeded,Acceptable Length 500 Words");
b.value=""
}}function showText(b){var c="";
if(b.value=="Expedited"){document.getElementById("cmbLegalSingleUser").disabled=true;
document.getElementById("cmbLegalSingleUser").parentNode.parentNode.style.display="none";
document.getElementById("cmbComplianceSingleUser").parentNode.parentNode.style.display="none";
$("#uniform-cmbComplianceSingleUser").parent().parent().hide();
$("#uniform-cmbLegalSingleUser").parent().parent().hide();
document.getElementById("cmbComplianceSingleUser").disabled=true;
document.getElementById("wftype").classList.remove("errorBorderClass");
$(".ComplianceReviewcheck").removeClass("errorBorderClass");
$(".changeTypeCheck").removeClass("errorBorderClass");
document.getElementById("po11").checked=true
}else{if(b.value=="Standard"){document.getElementById("cmbLegalSingleUser").parentNode.parentNode.style.display="";
document.getElementById("cmbComplianceSingleUser").parentNode.parentNode.style.display="";
$("#uniform-cmbComplianceSingleUser").parent().parent().show();
$("#uniform-cmbLegalSingleUser").parent().parent().show();
document.getElementById("cmbLegalSingleUser").disabled=false;
document.getElementById("cmbComplianceSingleUser").disabled=false;
document.getElementById("po11").checked=true;
document.getElementById("wftype").classList.remove("errorBorderClass");
$(".ComplianceReviewcheck").removeClass("errorBorderClass");
$(".changeTypeCheck").removeClass("errorBorderClass");
if(b.value=="Standard"){}}}}function removeText(b){alert(b.value)
}function addLocation(b){document.getElementById("loc").disabled=false
}function remLocation(b){document.getElementById("loc").disabled=true
}function addFileSel(e){var c=document.getElementById("bf");
var k=c.getElementsByTagName("input");
var h=document.getElementById("bd");
if(k.length<=4){var l=document.createElement("input");
var j=document.createElement("tr");
var f=document.createElement("td");
l.setAttribute("type","file");
l.setAttribute("label","file Selection");
l.setAttribute("id","fileSelection");
l.setAttribute("size","57");
l.setAttribute("onchange","getUpload()");
c.appendChild(l);
j.appendChild(f);
c.appendChild(j);
var b=document.createElement("textarea");
var g=document.createElement("tr");
var d=document.createElement("td");
b.setAttribute("rows","3");
b.setAttribute("cols","30");
h.appendChild(b);
g.appendChild(d);
h.appendChild(g)
}else{alert("Maximum number of allowed file selection is only 5")
}}function validateDate(j){var b=new Date();
var e=b.getDate();
var g=b.getMonth();
var f=g+1;
var n=b.getFullYear();
var l=document.getElementById("ExpirationMonth").options[document.getElementById("ExpirationMonth").selectedIndex].value;
var d=l;
var h=document.getElementById("ExpirationDay").options[document.getElementById("ExpirationDay").selectedIndex].value;
var k=h;
var m=e;
var o=document.getElementById("ExpirationYear").options[document.getElementById("ExpirationYear").selectedIndex].value;
var p=o-2010;
var c=n-2010;
if(l==2&&h>=30){document.getElementById("ExpirationMonth").selectedIndex=g+1;
document.getElementById("ExpirationDay").selectedIndex=e;
document.getElementById("ExpirationYear").selectedIndex=c;
document.getElementById("ExpirationYear").selectedIndex=c
}if(l==4&&h>30||l==6&&h>30||l==9&&h>30||l==11&&h>30){document.getElementById("ExpirationMonth").selectedIndex=g+1;
document.getElementById("ExpirationDay").selectedIndex=e;
document.getElementById("ExpirationYear").selectedIndex=c;
document.getElementById("ExpirationYear").selectedIndex=c
}if(p<=c){if(p==c){if(d<=f){if(d==f){if(k!=0){if(k<m){document.getElementById("ExpirationMonth").selectedIndex=g+1;
document.getElementById("ExpirationDay").selectedIndex=e;
document.getElementById("ExpirationYear").selectedIndex=c
}}}else{document.getElementById("ExpirationMonth").selectedIndex=g+1;
document.getElementById("ExpirationDay").selectedIndex=e;
document.getElementById("ExpirationYear").selectedIndex=c
}}}else{document.getElementById("ExpirationMonth").selectedIndex=g+1;
document.getElementById("ExpirationDay").selectedIndex=e;
document.getElementById("ExpirationYear").selectedIndex=c
}}}function validateDates(e){var p=new Date();
var m=p.getDate();
var b=p.getMonth();
var c=b+1;
var j=p.getFullYear();
var h=document.getElementById("PublishMonth").options[document.getElementById("PublishMonth").selectedIndex].value;
var l=h;
var g=document.getElementById("PublishDay").options[document.getElementById("PublishDay").selectedIndex].value;
var o=g;
var n=m;
var f=document.getElementById("PublishYear").options[document.getElementById("PublishYear").selectedIndex].value;
var k=f-2010;
var d=j-2010;
if(h==2&&g>=30){document.getElementById("PublishMonth").selectedIndex=b+1;
document.getElementById("PublishDay").selectedIndex=m;
document.getElementById("ExpirationYear").selectedIndex=d;
document.getElementById("PublishYear").selectedIndex=d
}if(h==4&&g>30||h==6&&g>30||h==9&&g>30||h==11&&g>30){document.getElementById("PublishMonth").selectedIndex=b+1;
document.getElementById("PublishDay").selectedIndex=m;
document.getElementById("PublishYear").selectedIndex=d;
document.getElementById("PublishYear").selectedIndex=d
}if(k<=d){if(k==d){if(l<=c){if(l==c){if(o!=0){if(o<n){document.getElementById("PublishMonth").selectedIndex=b+1;
document.getElementById("PublishDay").selectedIndex=m;
document.getElementById("PublishYear").selectedIndex=d
}}}else{document.getElementById("PublishMonth").selectedIndex=b+1;
document.getElementById("PublishDay").selectedIndex=m;
document.getElementById("PublishYear").selectedIndex=d
}}}else{document.getElementById("PublishMonth").selectedIndex=b+1;
document.getElementById("PublishDay").selectedIndex=m;
document.getElementById("PublishYear").selectedIndex=d
}}}function loadUserData(j,r){try{var t=j.options[j.selectedIndex].value;
var l;
var p;
var c;
p="Select a Legal & Compliance Group";
var k="";
if(r=="LG"){l=document.iwwft_instantiator.cmbLegalSingleUser;
c="-legal";
k="Select a Legal Reviewer"
}else{l=document.iwwft_instantiator.cmbComplianceSingleUser;
c="-compliance";
k="Select a Compliance Reviewer"
}if(t!=""){if(window.DOMParser){parser=new DOMParser();
xmlDoc=parser.parseFromString(formDtaUserXML,"text/xml")
}else{xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async=false;
xmlDoc.loadXML(formDtaUserXML)
}userXmlList=xmlDoc.getElementsByTagName("USER");
var u=0;
var n="";
var h="";
for(u=0;
u<userXmlList.length;
u++){if(userXmlList[u].getElementsByTagName("USRGROUP")[0].childNodes.length>0){var o=userXmlList[u].getElementsByTagName("USRGROUP")[0].childNodes[0].nodeValue;
var q=0;
var g=o.split(",");
if(g.length>0){for(q=0;
q<g.length;
q++){if(g[q]==(t+c)){if(h==""){h=""+userXmlList[u].getElementsByTagName("DISPNAME")[0].childNodes[0].nodeValue+","+userXmlList[u].getElementsByTagName("NAME")[0].childNodes[0].nodeValue+""
}else{h=h+"|"+userXmlList[u].getElementsByTagName("DISPNAME")[0].childNodes[0].nodeValue+","+userXmlList[u].getElementsByTagName("NAME")[0].childNodes[0].nodeValue+""
}break
}}}}}if(h!=""){removeDropOptions(l);
var d=h.split("|");
var f=0;
var b=document.createElement("option");
b.text=k;
b.value="NA";
b.selected=true;
l.options.add(b);
for(f=0;
f<d.length;
f++){var b=document.createElement("option");
b.text=d[f].split(",")[0];
b.value=d[f].split(",")[1];
l.options.add(b)
}if(r=="LG"){loadUserData(j,"CG")
}}else{removeDropOptions(l);
var b=document.createElement("option");
b.text=p;
b.value="NA";
b.selected=true;
l.options.add(b);
alert("No users found on the "+j.options[j.selectedIndex].text+" group.");
if(r=="LG"){loadUserData(j,"CG")
}}}else{removeDropOptions(l);
var b=document.createElement("option");
b.text=p;
b.value="NA";
b.selected=true;
l.options.add(b);
if(r=="LG"){loadUserData(j,"CG")
}}}catch(m){alert("The user information could not be loaded.")
}}function removeDropOptions(b){var c;
for(c=b.options.length-1;
c>=0;
c--){b.remove(c)
}}var AJAX_ERROR_MESSAGE="Rates are unavailable now. Please try again in a few minutes.";
var ERROR_CODE_001="001";
var ERROR_CODE_003="003";
var ERROR_CODE_004="004";
var ERROR_CODE_005="005";
var errMsg=$(".findrate-error-message-othUnavail").text();
errMsg=(errMsg.trim()!="")?errMsg:AJAX_ERROR_MESSAGE;
$(document).ready(function(){if($("div.month").html()==""){$("div.month").addClass("helocCurrentDate")
}else{$("div.month").removeClass("helocCurrentDate")
}if($("p.helocMobileView").html()==""){$("p.helocMobileView").addClass("helocCurrentDate")
}var c=["January","February","March","April","May","June","July","August","September","October","November","December"];
var b=new Date();
b.setDate(b.getDate());
$(".helocCurrentDate").html(c[b.getMonth()]+" "+b.getDate()+", "+b.getFullYear())
});
$("#zip_search").keypress(function(b){if(b.keyCode===13){$(".zip_search_submit").trigger("click")
}});
$(document).on("click",".zip_search_submit",function(){$(".rate-suntrust-input").removeClass("sun-error");
$(".findrate-error-message-invalid").hide();
$(".findrate-error-message-unavail").hide();
$(".findrate-error-message-othUnavail").hide();
var j=$("#zip_search").val();
var b=/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(j);
if(b){$(".rate-suntrust-input").removeClass("sun-error");
$(".findrate-error-message-invalid").hide();
var g=$(".cdrate_zip_desktopTable tr:first");
var l=g.find("th");
var h="";
var f="";
var e="";
jQuery.each(l,function(m,n){if(m===0){h=n.innerHTML
}else{if(m===1){f=n.innerHTML
}else{if(m===2){e=n.innerHTML
}}}});
var k="https://"+location.host;
if(location.hostname=="localhost"){k="http://"+location.host
}var c="/dotcom/nac-rest-api-consumer";
var d={ZipCode:j,channel:"NAC"};
$.ajax({type:"GET",url:c,data:d,async:false,dataType:"json",success:function(m){populateCDRatesTable(m,h,f,e)
},error:function(m){$(".rate-suntrust-input").addClass("sun-error");
$(".findrate-error-message-othUnavail").text(errMsg);
$(".findrate-error-message-othUnavail").show();
$(".cdrate_zip_border .cdrate_savings_promotional").hide()
}})
}else{$(".rate-suntrust-input").addClass("sun-error");
$(".findrate-error-message-invalid").show();
$(".cdrate_zip_border .cdrate_savings_promotional").hide()
}});
function populateCDRatesTable(d,h,f,e){$("tr.cdrates_desktop_row").remove();
$(".cdrates_mobile_table").remove();
var c="";
var l="";
var k="";
if(d.TermAndRate==null){$(".rate-suntrust-input").addClass("sun-error");
if(d.ErrorContent!=null){var b=d.ErrorContent.ErrorMsg;
var j=d.ErrorContent.ErrorCode;
if(j==ERROR_CODE_005){$(".findrate-error-message-othUnavail").text(errMsg);
$(".findrate-error-message-othUnavail").show()
}else{if(j!=ERROR_CODE_003&&j!=ERROR_CODE_004){if(j==ERROR_CODE_001){$(".findrate-error-message-invalid").show()
}else{$(".findrate-error-message-unavail").text(b);
$(".findrate-error-message-unavail").show()
}}else{$(".findrate-error-message-unavail").show()
}}$(".cdrate_zip_border .cdrate_savings_promotional").hide()
}}else{var l="";
var k="";
var g=d.TermAndRate.map(function(n,m){l=l+'<tr class="cdrates_desktop_row"><td>'+n.Term.Description+"</td><td>"+(n.Rate.Interest*100).toFixed(2)+"%</td><td>"+(n.Rate.APY*100).toFixed(2)+"%</td></tr>";
k=k+'<table class="cdrates_mobile_table"><tr><th>'+h+"</th><td>"+n.Term.Description+"</td></tr><tr><th>"+f+"</th><td>"+(n.Rate.Interest*100).toFixed(2)+"%</td></tr><tr><th>"+e+"</th><td>"+(n.Rate.APY*100).toFixed(2)+"%</td></tr></table>"
});
$(".cdrate_zip_desktopTable").append(l);
$(".cdrate_zip_mobileTable").append(k);
$(".cdrate_zip_border .cdrate_savings_promotional").show();
$("html, body").animate({scrollTop:$(".cdrates").offset().top-120},200)
}}$(".offer,.suntrust_helocTable,.suntrust_helocTable_mobile").hide();
$("#heloc_er_zip_search").keypress(function(b){if(b.keyCode===13){$("#findRate").trigger("click")
}});
$(document).on("click","#findRate",function(){$(".rate-suntrust-input").removeClass("sun-error-heloc");
$(".findrate-error-message-invalid").hide();
$(".findrate-error-message-unavail").hide();
var f=$("#heloc_er_zip_search").val();
var b=/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(f);
if(b){$(".offer,.suntrust_helocTable,.suntrust_helocTable_mobile").show();
$(".sun-error-heloc").css("border","1px solid #cfcfcf");
var d="https://"+location.host;
if(location.hostname=="localhost"){d="http://"+location.host
}var e=$("#cdratePageURL").val();
var g=$("#reqExtension").val();
var c=d+e+".equityrates."+f+"."+g;
$.ajax({type:"GET",url:c,async:false,success:function(h){populateEQRatesTable(h)
},error:function(h){console.log("Error captured: "+h.responseText)
}})
}else{$(".sun-error-heloc").css("border","1px solid #cc2900");
$(".findrate-error-message-invalid").show();
$(".offer,.suntrust_helocTable,.suntrust_helocTable_mobile").hide()
}});
function populateEQRatesTable(t){$(".rate_description_mobile").empty();
var q=JSON.stringify(t);
q="["+q+"]";
var f=$("#resultsaprlabel1").val();
var d=$("#resultsaprlabel2").val();
var g=$("#resultsTermsLabel").val();
var e=$("#resultscolumn2").val();
var c=$("#resultscolumn3").val();
var u=$("#resultsdescrip").val();
var n=JSON.parse(q);
var l="";
var r="";
var j="";
var p=$("#heloc_er_zip_search").val();
$(".suntrust_helocTable_title span").html(p);
var o=new Array();
var h=0;
for(var m=0;
m<n.length;
m++){l=n[m].status;
r=n[m].promooffer;
j=n[m].promomargin;
$(".offer-apr-value").html("<h4>"+r+"</h4>");
$(".offer span").html(j);
console.log("Response status: "+l);
if(l=="success"){$("tr.helocrates-row").remove();
$("table.helocrates-row").remove();
var b="<tbody>";
$(".table-striped").append(b);
$.each(n[m].tablerow,function(v,y){var w='<tr class="helocrates-row">';
var k='<table class="table helocrates-row"><thead><tr>';
$.each(y,function(z,A){if(z==0){w+="<td>$"+A.toLocaleString("en-US",{minimumFractionDigits:2})+"</td>";
k+='<th colspan="2" class="text-center">$'+A.toLocaleString("en-US",{minimumFractionDigits:2})+"</th></tr></thead>"
}else{if(z==1){w+='<td id="heloc_table_column2'+h+'"><p class="heloc_bold_text">'+f+"</p><p>"+d+"</p>";
o[h]=A;
k+='<tbody><tr><td id="heloc_mob_column2'+h+'">'+e+':<br/><p class="heloc_bold_text">'+f+"</p><p>"+d+"</p>";
h++
}else{if(z==2){w+="<p>("+A.toLocaleString("en-US",{minimumFractionDigits:2})+")</p></td>";
k+="("+A.toLocaleString("en-US",{minimumFractionDigits:2})+")"
}else{w+="<td>$"+A+g+"</td>";
k+='<td class="text-center">'+c+": <p>$"+A+g+"</p></td></tr><tbody></table>"
}}}});
w+="</tr>";
$(".table-striped").append(w);
$(".suntrust_table_result").append(k);
for(var v=0;
v<o.length;
v++){$("#heloc_table_column2"+v+" span").html(o[v]);
$("#heloc_mob_column2"+v+" span").html(o[v])
}});
$(".table-striped").append('<tr class="helocrates-row"><td colspan="3" class="text-center">'+u+"</td></tr></tbody>");
$(".rate_description_mobile").append(u)
}else{$(".sun-error-heloc").css("border","1px solid #cc2900");
$(".findrate-error-message-unavail").show();
$(".offer,.suntrust_helocTable,.suntrust_helocTable_mobile").hide()
}}if(l=="success"){$(".suntrust_helocTable").show();
$("html, body").animate({scrollTop:$(".equityrates").offset().top-120},200)
}}$(document).ready(function(){var e=function(f){f.addEventListener("play",d,false);
f.addEventListener("seeked",d,false);
f.addEventListener("seeking",d,false);
f.addEventListener("pause",d,false);
f.addEventListener("ended",d,false)
};
var c=function(f){f.addEventListener("play",b,false);
f.addEventListener("seeked",b,false);
f.addEventListener("seeking",b,false);
f.addEventListener("pause",b,false);
f.addEventListener("ended",b,false)
};
setTimeout(function(){$("video").each(function(f,g){e(g)
});
$("audio").each(function(f,g){c(g)
})
},6000);
function d(j){var h=j.target;
var g=$($(this).closest("div.suntrust-video-player-container")).find("h2.analytics-placeholder").text();
g=g.replace(/[^A-Z0-9]+/ig,"");
var l="STcom|ResCntr|"+g;
s.prop34=l;
s.eVar41=l;
var k=h.duration;
var f="HTML5";
if(h.currentTime>0){mediaOffset=Math.floor(h.currentTime)
}else{mediaOffset=0
}if(j.type=="play"){if(mediaOffset==0){s.Media.open(l,k,f);
s.Media.play(l,mediaOffset)
}else{s.Media.play(l,mediaOffset)
}}if(j.type=="seeking"){s.Media.stop(l,mediaOffset)
}if(j.type=="seeked"){s.Media.play(l,mediaOffset)
}if(j.type=="pause"){s.Media.stop(l,mediaOffset)
}if(j.type=="ended"){s.Media.stop(l,mediaOffset);
s.Media.close(l);
mediaOffset=0
}}function b(h){var g=h.target;
var l=$($(this).closest("div.suntrust-audio-player-container")).find("h2.analytics-placeholder").text();
l=l.replace(/[^A-Z0-9]+/ig,"");
var k="STcom|ResCntr|"+l;
s.prop34=k;
s.eVar41=k;
var j=g.duration;
var f="HTML5";
if(g.currentTime>0){mediaOffset=Math.floor(g.currentTime)
}else{mediaOffset=0
}if(h.type=="play"){if(mediaOffset==0){s.Media.open(k,j,f);
s.Media.play(k,mediaOffset)
}else{s.Media.play(k,mediaOffset)
}}if(h.type=="seeking"){s.Media.stop(k,mediaOffset)
}if(h.type=="seeked"){s.Media.play(k,mediaOffset)
}if(h.type=="pause"){s.Media.stop(k,mediaOffset)
}if(h.type=="ended"){s.Media.stop(k,mediaOffset);
s.Media.close(k);
mediaOffset=0
}}});
$(function(){var c=$("#skip-nav");
c.find(".skip-nav-link").focus(function(){$("#skip-nav").addClass("sun-active")
}),c.find(".skip-nav-link").blur(function(){$("#skip-nav").removeClass("sun-active")
});
$("#adv_search").on("focus keydown",function(d){if(d.keyCode==13){$(".sun-header-search-form").toggleClass("sun-active");
$(".sun-toggle-overlay").toggleClass("sun-active");
setTimeout(function(){$("input#sun-header-search-input").focus()
},1);
$("input#sun-header-search-input").blur(function(){if($(this).val().length==0){$(".sun-header-search-form").toggleClass("sun-active");
$(".sun-toggle-overlay").toggleClass("sun-active")
}})
}});
$(".sun-search-and-mobile-menu-container-toggle").on("click",$(document),function(){var d=$(this),e=$(".sun-search-and-mobile-menu-container");
d.toggleClass("sun-active"),e.toggleClass("sun-active")
});
$(".sun-header-search-icon").on("click",$(document),function(){var e=$(".sun-header-search-form");
var d=$(".sun-header-search-input").val();
if(d&&($("#search-box-form").attr("class").indexOf("sun-active")>-1||($("#search-box-form").parent().hasClass("sun-active")))){$("form").submit();
$(".sun-header-search-input").val("")
}else{e.toggleClass("sun-active")
}});
$(".sun-header-search-icon").on("click",$(document),function(){var e=$(this),d=e.data("sun-toggle-overlay-target"),f=$(".sun-toggle-overlay");
f.toggleClass("sun-active").data("sun-target",d)
});
$(".sun-toggle-overlay").on("click",$(document),function(){var e=$(this),d=$(".sun-header-search-form");
e.removeClass("sun-active"),d.removeClass("sun-active"),$(".sun-header-search-cancel-button").removeClass("sun-active")
});
var c,b;
$(".sun-header-search-cancel-button").on("click",$(document),function(e){var d=$(this);
e.preventDefault(),d.removeClass("sun-active"),d.prev("input").val("").focus(),$(".suntrust-autocomplete").empty()
});
$('[type="search"]').on({keyup:function(){var e=$(this),d=e.val().length;
d>0?c.addClass("sun-active"):c.removeClass("sun-active")
},focus:function(){var d=$(this);
c=d.next(".sun-header-search-cancel-button"),d.closest(".suntrust-header-search-container").addClass("search-active")
},blur:function(){var d=$(this);
if($(this).val().length>0){return !1
}d.closest(".suntrust-header-search-container").removeClass("search-active")
}},$(document));
document.activeElement.attributes.type&&document.activeElement.attributes.type.value==="search"&&(b=$(document.activeElement),c=$(".sun-header-search-cancel-button"));
if($(".sun-search-and-mobile-menu-container").is(".hide-search")){$(".sun-search-and-mobile-menu-container-toggle").hide()
}$(".sun-header-search-input").val("")
});
$(document).ready(function(){var d="referrer_link=SCSTELWEB";
var b="SCSTELWEB";
var e="";
var c=getQueryStringParams("referrer_link");
if(c!=undefined){if(typeof(Storage)!=="undefined"){console.log("referrer_link method called successfully::"+c);
sessionStorage.setItem("refCode",c)
}}$("a").click(function(h){var g=$(this).attr("href");
if(g!=undefined&&g.indexOf(d)!=-1){if(typeof(Storage)!=="undefined"){if(sessionStorage.getItem("refCode")!=null){console.log("got the reference code successfully");
e=sessionStorage.getItem("refCode")
}else{console.log("setting the default code");
e=b
}}else{console.log("check if the browser is compatible for session storage IE6/IE7 won't support");
e=b
}var f=g.replace(/(referrer_link=)[^\&]+/,"$1"+e);
$(this).attr("href",f)
}})
});
function getQueryStringParams(b){var e=window.location.search.substring(1);
var d=e.split("&");
for(var c=0;
c<d.length;
c++){var f=d[c].split("=");
if(f[0]==b){return f[1]
}}}$(document).ready(function(){$.getJSON("/etc/acs-commons/lists/usstates/_jcr_content.list.json",function(b){$("#contact_state").empty();
$("#contact_state").append($("<option>").text("Select").attr("value","Select"));
$("#contact_state").parent().find("span").html("Select");
$.each(b,function(c,d){$("#contact_state").append($("<option>").text(d.text).attr("value",d.value))
})
});
$(".contactUsForm_FieldDiv select").uniform({selectClass:"sun-select-container",selectAutoWidth:false}).each(function(){$(this).siblings("span").attr("aria-hidden",true)
});
$(".contactUs_Form div[data-mandatory='true']").each(function(){if($(this).find(".contactUsForm_Label").hasClass("contactUsForm_MultipleLabel")){$(this).find(".contactUsForm_Label.contactUsForm_MultipleLabel span").append(" <span>*</span>")
}else{$(this).find("label").append(" <span>*</span>")
}});
$(".contactUs_Form div[data-mandatory]").each(function(){if($(this).find("label").html()==""){$(this).hide()
}});
$(".contactUsForm_FieldMultipleDiv").each(function(){if($(!this).parents("ul").hasClass("suntrust-faqs-list")){var b=0;
$(this).find("div[data-mandatory]").each(function(){if(!$(this).is(":visible")){b++
}});
if(b==2){$(this).hide()
}}});
$("#contact_city").keypress(function(c){if($(this).parent().parent().attr("data-mandatory")=="true"){var b=c.which;
if(!(b>=65&&b<=120)&&(b!=32&&b!=0)){c.preventDefault()
}}});
$(".cep").keyup(function(){if($(this).val().length==5){$(".phone_us").focus()
}});
$(".phone_us").keyup(function(){if($(this).val().length==13){$("#contact_loginID").focus()
}});
$(document).on("click",".contactUs_submit",function(){var d=0;
$("#selquestion").val($("#contactUs_typeQuestion").val());
function b(e){var f=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return f.test(e)
}$(".contactUs_Form div[data-mandatory='true']").each(function(){if($(this).find("input").val()==""){$(this).find("input").addClass("error");
$(this).find("label").addClass("error");
d++
}else{if($(this).find("input").val()!=""&&$(this).find("input").val()!=undefined){$(this).find("input").removeClass("error");
$(this).find("label").removeClass("error")
}}if($(this).find("textarea").val()==""){$(this).find("textarea").addClass("error");
$(this).find("label").addClass("error");
d++
}else{if($(this).find("textarea").val()!=""&&$(this).find("textarea").val()!=undefined){$(this).find("textarea").removeClass("error");
$(this).find("label").removeClass("error")
}}if($(this).find("select").val()=="Select"){$(this).find("select").parent().addClass("error");
$(this).find("label").addClass("error");
d++
}else{if($(this).find("select").val()!="Select"&&$(this).find("select").val()!=undefined){$(this).find("select").parent().removeClass("error");
$(this).find("label").removeClass("error")
}}});
if($(".contact_email").parents("div[data-mandatory]").is(":visible")&&$(".contact_email").parent().parent().attr("data-mandatory")=="true"){var c=$(".contact_email").val();
if(b(c)){$(".contact_email").removeClass("error");
$(".contact_email").parents("div[data-mandatory]").find("label").removeClass("error")
}else{$(".contact_email").addClass("error");
$(".contact_email").parents("div[data-mandatory]").find("label").addClass("error");
d++
}}if($(".cep").val()!=""&&$(".cep").parent().parent().attr("data-mandatory")=="true"){if($(".cep").val().length==5){$(".cep").removeClass("error");
$(".cep").parents("div[data-mandatory]").find("label").removeClass("error")
}else{$(".cep").addClass("error");
$(".cep").parents("div[data-mandatory]").find("label").addClass("error");
d++
}}if($(".phone_us").val()!=""&&$(".phone_us").parents("div[data-mandatory]").is(":visible")){if($(".phone_us").val().length==13){$(".phone_us").removeClass("error");
$(".phone_us").parents("div[data-mandatory]").find("label").removeClass("error")
}else{$(".phone_us").addClass("error");
$(".phone_us").parents("div[data-mandatory]").find("label").addClass("error");
d++
}}if(d!=0){$(".contactUs_errorMessage").html($("#errormsg").val())
}else{$(".contactUs_errorMessage").html("");
$.ajax({type:"POST",url:"/dotcom/studentlending",data:$("#contactusform").serialize(),cache:false,success:function(f){if(f.emailstatus=="failed"){$(".contactUsForm_div ").hide();
$(".contactUsForm_MessageInfo.success").hide();
$(".contactUsForm_MessageInfo.failure").show();
if($("#contactusform").parents("ul").hasClass("suntrust-faqs-list")){var e=$("#contactusform").parents("ul.suntrust-faqs-list").parent("li").offset().top-$("header").innerHeight();
$("body, html").animate({scrollTop:e},1000)
}}else{$(".contactUsForm_div").hide();
$(".contactUsForm_MessageInfo.success").show();
$(".contactUsForm_MessageInfo.failure").hide();
if($("#contactusform").parents("ul").hasClass("suntrust-faqs-list")){var e=$("#contactusform").parents("ul.suntrust-faqs-list").parent("li").offset().top-$("header").innerHeight();
$("body, html").animate({scrollTop:e},1000)
}}}});
$(".contactUs_Form input,.contactUs_Form textarea,.contactUs_Form select").val("")
}})
});
$(function(){$(".cep").mask("00000");
$(".phone_us").mask("(000)000-0000")
});
$(document).ready(function(){$(".MonthlyCalc input").keyup(function(b){this.value=this.value.replace(/[^0-9\.,]/g,"")
});
$(".MonthlyCalc .resetMonCalVal").click(function(){$(".MonthlyCalc input").val("");
$(".financialGap_message").html("")
});
$(".MonthlyCalc input").bind("blur",function(){var g=0;
var r=0;
var m=0;
g=parseFloat(g);
$($(this).parents("table").find("input")).each(function(){if($(this).val()!=""&&!$(this).attr("class")){if($(this).val().match(/\d+/g)!=null){var E=$(this).val().replace(/[^0-9\.]/g,"");
g+=parseFloat(E);
r++
}else{m++
}}else{m++
}});
if(m>0){$(this).parents("table").find("tr:last input").val("");
if($(".monthlyExpense").val()==""){$(".monthlyExpenseSubTotal").val("")
}if($(".monthlyIncome").val()==""){$(".monthlyIncomeSubTotal").val("")
}if($(".monthlyExpenseSubTotal").val()==""||$(".monthlyIncomeSubTotal").val()==""){$(".netMonthlyIncome").val("")
}}if(r>0){g=g.toString();
var v=g.split(".");
g=v[0];
if(v[1]>2){v[1]=v[1].substring(0,2)
}var w=g.substring(g.length-3);
var q=g.substring(0,g.length-3);
if(q!=""){w=","+w
}var D=q.replace(/\B(?=(\d{3})+(?!\d))/g,",")+w;
if(v[1]!=undefined){$(this).parents("table").find("tr:last input").val(D+"."+v[1])
}else{$(this).parents("table").find("tr:last input").val(D+".00")
}}if($(".monthlyExpense").val()!=""){$(".monthlyExpenseSubTotal").val($(".monthlyExpense").val())
}if($(".monthlyIncome").val()!=""){var y=0;
if($(".monthlyIncome").val()!=""){var o=$(".monthlyIncome").val().replace(/[^0-9\.]/g,"");
y=parseFloat(o)
}var z=y;
z=z.toString();
var t=z.split(".");
z=t[0];
if(t[1]>2){t[1]=t[1].substring(0,2)
}var B=z.substring(z.length-3);
var e=z.substring(0,z.length-3);
if(e!=""){B=","+B
}var j=e.replace(/\B(?=(\d{3})+(?!\d))/g,",")+B;
if(t[1]!=undefined){$(".monthlyIncomeSubTotal").val(j+"."+t[1])
}else{$(".monthlyIncomeSubTotal").val(j+".00")
}}if($(".monthlyExpenseSubTotal").val()!=""&&$(".monthlyIncomeSubTotal").val()!=""){var h=0;
var k=0;
if($(".monthlyExpenseSubTotal").val()!=""){var f=$(".monthlyExpenseSubTotal").val().replace(/[^0-9\.]/g,"");
h=parseFloat(f)
}if($(".monthlyIncomeSubTotal").val()!=""){var n=$(".monthlyIncomeSubTotal").val().replace(/[^0-9\.]/g,"");
k=parseFloat(n)
}var A=k-h;
var u="";
var l=A.toString();
l=l.split("-");
if(l[0]==""){u="-"
}A=A.toString();
var d=A.split(".");
A=d[0];
if(d[1]>2){d[1]=d[1].substring(0,2)
}var p=A.substring(A.length-3);
var C=A.substring(0,A.length-3);
if(C!=""&&C!="-"){p=","+p
}var c=C.replace(/\B(?=(\d{3})+(?!\d))/g,",")+p;
var b=c.split("-");
if(b[0]==""){c=b[1]
}if(d[1]!=undefined){$(".netMonthlyIncome").val(u+c+"."+d[1])
}else{$(".netMonthlyIncome").val(u+c+".00")
}}})
});
$(document).ready(function(){var t=navigator.appName=="Microsoft Internet Explorer"||!!(navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/rv:11/));
var l=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;
var B=/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor);
var j=navigator.userAgent.match(/iPad/i)!=null;
if($(".component-decisiontree").length!=0){var e=$("#DecisionTreeComponent");
var E=$("#suntrust-page");
var y=$("#isPageCarousel").val();
var r=[];
localStorage.setItem("navigationHistory",JSON.stringify(r));
function u(){$(".component-decisiontree ").find("style").remove();
var I="",H="";
if($("#retinaImage").val()){I="@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.suntrust-dfs-carousel {background-image: url("+$("#retinaImage").val()+");}}"
}if($("#mobileImage").val()){H="@media (max-width:767px) {.suntrust-dfs-carousel {background-image: url("+$("#mobileImage").val()+");}}"
}var G='<style type="text/css">.suntrust-dfs-carousel {background-image: url('+$("#desktopImage").val()+");}"+I+H+"</style>";
$(".component-decisiontree").prepend(G);
var M=$("#font-theme").val();
if(M==""){$(".component-decisiontree").removeClass("suntrust-dfs-dark-theme")
}else{$(".component-decisiontree").addClass("suntrust-dfs-dark-theme")
}$("#navigationHistory").data("navigationHistory",r);
var F=$(".suntrust-product-position-list-alt li").length;
if(window.innerWidth<=600){var K=$(".suntrust-product-position-list-alt").height()+20;
e.css({"padding-top":K+"px"})
}else{if(F<4){$(".suntrust-product-position-list-alt li").css({width:"210px"})
}}$('[data-isrte="false"]').removeClass();
if(!$(".suntrust-product-position-list-alt li.sun-active").is(":last-child")){next_ajaxurl=$(".suntrust-product-position-list-alt li.sun-active").next("li").find("a").data("ajaxurl");
next_href=$(".suntrust-product-position-list-alt li.sun-active").next("li").find("a").attr("href");
$(".sun-product-carousel-next-arrow").attr("href",next_href).data("ajaxurl",next_ajaxurl);
if($("#isPageCarousel").val()=="true"){next_pageurl=$(".suntrust-product-position-list-alt li.sun-active").next("li").find("a").data("pageajaxurl");
$(".sun-product-carousel-next-arrow").data("pageajaxurl",next_pageurl)
}}else{$(".sun-product-carousel-next-arrow").hide()
}if(r.length!=0){var J=r.length;
href_value=r[J-1].href;
ajax_value=r[J-1].ajaxurl;
$(".sun-product-carousel-prev-arrow").attr("href",href_value);
$(".sun-product-carousel-prev-arrow").data("ajaxurl",ajax_value);
if($("#isPageCarousel").val()=="true"){prev_pageurl=ajax_value.replace("/slidequestinfo","");
$(".sun-product-carousel-prev-arrow").data("pageajaxurl",prev_pageurl)
}}else{if(!$(".suntrust-product-position-list-alt li.sun-active").is(":first-child")){prev_ajaxurl=$(".suntrust-product-position-list-alt li.sun-active").prev("li").find("a").data("ajaxurl");
prev_href=$(".suntrust-product-position-list-alt li.sun-active").prev("li").find("a").attr("href");
$(".sun-product-carousel-prev-arrow").attr("href",prev_href).data("ajaxurl",prev_ajaxurl);
if($("#isPageCarousel").val()=="true"){prev_pageurl=$(".suntrust-product-position-list-alt li.sun-active").prev("li").find("a").data("pageajaxurl");
$(".sun-product-carousel-prev-arrow").data("pageajaxurl",prev_pageurl)
}}else{$(".sun-product-carousel-prev-arrow").hide()
}}}u();
$(window).resize(function(){var F=$(".suntrust-product-position-list-alt li").length;
if(window.innerWidth<=600){var G=$(".suntrust-product-position-list-alt").height()+20;
e.css({"padding-top":G+"px"})
}else{if(F<4){$(".suntrust-product-position-list-alt li").css({width:"210px"})
}}});
function n(F){var G={expire:1,name:"DecisionTree",value:F,secure:window.location.protocol=="https:"?true:false,domain:window.location.host,path:"/"};
setCookie(G.name,G.value,G.expire,G.path,G.domain,G.secure)
}function p(F){r=$("#navigationHistory").data("navigationHistory");
if(F=="Steps"||F=="onload"){r=[]
}else{if(F=="Previous"){r.pop()
}else{history_url=$("#currentSlidePath").val();
history_ajxurl=$("#currentSlideAjaxUrl").val();
r.push({href:history_url,ajaxurl:history_ajxurl})
}}localStorage.setItem("navigationHistory",JSON.stringify(r))
}function w(G,H,I){if(H!=undefined){var F=window.location.pathname.split(".");
var J=F[0]+"#"+H;
n(J);
if(y=="true"){v(G,$(".dfsheader").next(),I)
}else{v(H,$("#DecisionTreeSlide"),I)
}}}var A=getCookie("DecisionTree");
var f=$("#environemnt").val();
if(f!="author"){if(A!=""){var q=A.split("#");
var D=q[0];
var C=q[1];
var h=window.location.pathname.split(".");
var z=q[1].split("/_jcr_content/");
var k=z[0].split("/");
if(D==h[0]&&k[k.length-1]!=$("#currentSlide").val()){if(y=="true"){C=q[1].replace("/slidequestinfo","");
v(C,$(".dfsheader").next(),"onload")
}else{v(C,$("#DecisionTreeSlide"),"onload")
}}}else{var d=window.location.pathname.split(".");
var m=d[0]+"#"+$("#currentSlide").val();
n(m)
}}E.on("click",".sun-decisiontree-slide-link",function(G){G.preventDefault();
var I=$(this).data("ajaxurl");
var H=$(this).data("direction");
var F=$(this).data("pageajaxurl");
w(F,I,$(this).data("direction"))
});
function c(J){$("select").uniform({selectClass:"sun-select-container",selectAutoWidth:false}).each(function(){$(this).siblings("span").attr("aria-hidden",true)
});
$(J).on("change",".suntrust-select.suntrust-comboBoxloans",function(){if($(this).val()!=""){window.location=$(this).val();
var K=window.location.href;
var O=K.split("#");
var N=O[O.length-1];
var M=$("body").find('[data-anchor="'+N+'"]').offset().top;
$("html, body").animate({scrollTop:M},"slow")
}});
$(J).find(".sun-feature-tabs_tabset").responsiveTabs();
$(J).find("ul.suntrust-dynamic-width").each(function(){var M=-1;
var K=$(this).find("li").length;
var N=$(this);
suntrustdynamicwidth(K,N,M)
});
$(J).find("ul.suntrust-feature-list-details.suntrust-four-col-info").each(function(){var N=$(this);
var M=-1;
var K=$(this).find("li").length;
setTimeout(function(){suntrustfourcolwidth(K,N,M)
},400)
});
$(J).find(".suntrust-feature-links").each(function(){if($(this).is(":visible")){$(this).parents(".featuredcontent").addClass("suntrust-SLfeature")
}});
$(J).find(".suntrust-accordion-trigger").each(function(){var K=$(this).attr("data-expand");
if(K=="true"){$(this).addClass("suntrust-open");
$(this).next().show()
}});
$(J).find("div.sun-faqs-component-list").find('[data-sun-class="faqs-page-list-item-header"]').click(function(M){M.preventDefault();
var O=$(this),N=O.closest('[data-sun-class="faqs-page-list-item"]'),K=N.find('[data-sun-class="faqs-page-list-item-detail"]');
O.toggleClass("sun-active");
K.toggleClass("sun-active");
O.focus()
});
$(J).find(".component-dynamic-summarylist").each(function(){var M=$(this).find("li").length;
var K=parseInt($(this).find(".load-more button").attr("data-visible-items-limit"));
$(this).find("li:lt("+K+")").show();
if(M<=K){$(this).find(".load-more").hide()
}});
$(J).find(".suntrust-load-more").click(function(){var M=parseInt($(this).attr("data-visible-items-limit"));
var K=$(this).parents(".component-dynamic-summarylist").find("li:visible").length;
var N=$(this).parents(".component-dynamic-summarylist").find("li").length;
K=(K+M<=N)?K+M:N;
$(this).parents(".component-dynamic-summarylist").find("li:lt("+K+")").show();
if(K>=N){$(this).parent(".load-more").hide()
}});
$(J).find(".suntrust-stepsContainer ul").each(function(){var M=$(this).find("li").length;
var K;
if(window.innerWidth>767){if(M>=2&&M<4){K=(100/M)
}else{if(M==1){K=100
}}$(this).find("li").css("width",K+"%")
}});
$('[type="checkbox"]').uniform({checkboxClass:"sun-checkbox-input-container",checkedClass:"sun-checked"});
var G="";
var I=0;
$(".suntrust_account_find").each(function(){var M=0;
G=$(this).find("input[name=compareTableType]").val();
I=0;
if(G=="comparison"){$(this).find(".table_compare").each(function(){M=$(this).innerWidth();
I=$(this).find("tbody > tr:first-child td").length;
$(this).find("th.account_bg_grey").each(function(){$(this).parent().find("td").remove();
for(var W=0;
W<I;
W++){$(this).parent().append('<td class="account_bg_grey">&nbsp;</td>')
}});
$(this).find("th.account_bg_grey").each(function(){var W;
var X;
if($(this).find("div").hasClass("table_heading_content")){W=$(this).find(".table_heading_content").innerHeight();
X=W+30
}else{W=$(this).innerHeight();
X=W+10
}if(B){if(X>=70){$(this).parent().css("height",X+"px");
$(this).css("height",X+"px")
}}if(j){if(X>=70){$(this).parent().css("height",X+"px");
$(this).css("height",X+"px")
}}else{if(X>50){$(this).parent().css("height",X+"px");
$(this).css("height",X+"px")
}else{$(this).parent().css("height","auto");
$(this).css("height","auto")
}}});
var S=I-1;
var R=I-3;
var O=0;
var U=0;
if(!$(this).parents().hasClass("suntrust-section3A")&&I>4){U=M/5;
$(this).find("td").css("width",U+"px");
$(this).find("tr td:nth-child(5)").css("width",(U-2)+"px");
$(this).find("tr td:nth-child(5)").css("border-right","0");
$(this).find("th").css("width",(U+1)+"px");
$(this).parent().css("margin-left",U+"px")
}else{if($(this).parents().hasClass("suntrust-section3A")&&I>3){U=M/4;
$(this).find("td").css("width",U+"px");
$(this).find("th").css("width",(U+2)+"px");
$(this).parent().css("margin-left",U+"px");
if(l){$(this).find("tr td:nth-child(4)").css("width",(U)+"px");
$(this).find("th").css("width",(U+3)+"px");
$(this).find("tr td:nth-child(4)").css("border-right","0")
}else{$(this).find("tr td:nth-child(4)").css("width",(U)+"px");
$(this).find("tr td:nth-child(4)").css("border-right","0")
}}else{U=M/(I+1);
$(this).find("td").css("width",U+"px");
$(this).find("tr td:last-child").css("width",(U-2)+"px");
$(this).find("th").css("width",U+"px")
}}var V=$(this).find("tr:first-child > th").innerWidth();
$(this).parent().parent().prev().find("div:first-child").css("width",(M-V)+"px");
if(($(this).parents().hasClass("suntrust-section3A")&&I>3)||!$(this).parents().hasClass("suntrust-section3A")&&I>4){if($(this).parent().parent().prev().hasClass("table_compare_more")){$(this).parent().parent().prev().show()
}$(".table_compare_more .table_compare_left").addClass("disabled");
$(this).removeClass("noViewMore");
if($(this).parent().hasClass("table_scroller")){$(this).parent().addClass("table_row_height")
}}else{if(($(this).parents().hasClass("suntrust-section3A")&&$(this).parent().parent().prev().hasClass("table_compare_more")&&I<=3)||(!$(this).parents().hasClass("suntrust-section3A")&&$(this).parent().parent().prev().hasClass("table_compare_more")&&I<=4)){$(this).parent().parent().prev().hide()
}}var T=0;
if($(this).find("tr:last-child th > div").hasClass("table_heading_content")){T=$(this).find("tr:last-child th div.table_heading_content").innerHeight();
$(this).find("tr:last-child th").css("height",(T+31)+"px");
$(this).find("tr:last-child").css("height",(T+31)+"px")
}else{T=$(this).find("tr:last-child").innerHeight();
$(this).find("tr:last-child th").css("height",(T+1)+"px");
$(this).find("tr:last-child").css("height",(T+1)+"px")
}var P=$(this).find("tr:nth-child(1) td:nth-child(2)").innerHeight();
var Q=$(this).find("tr:nth-child(2) td:nth-child(2)").innerHeight();
$(this).find("tr:nth-child(1) th").css("height",P+"px");
$(this).find("tr:nth-child(2) th").css("height",Q+"px")
})
}else{var N=0;
var K=0;
$(this).find(".table_compare").each(function(){$(this).addClass("tableComparison_Static");
$(this).find("tr").each(function(){if(!$(this).hasClass("account_bg_grey")){if($(this).find("td").length>N){N=$(this).find("td").length
}}if(!$(this).find("th").hasClass("account_bg_grey")){if($(this).find("td:nth-child(3)").text()!=""){K++
}}});
I=N;
$(this).find("th.account_bg_grey").each(function(){$(this).parent().find("td").remove();
for(var R=0;
R<I;
R++){$(this).parent().append('<td class="account_bg_grey">&nbsp;</td>')
}});
if(K==0){$(this).find("td:nth-child(2)").attr("colspan","2");
$(this).find("td:nth-child(3)").remove()
}$(this).find("th.account_bg_grey").each(function(){var R;
var S;
if($(this).find("div").hasClass("table_heading_content")){R=$(this).find(".table_heading_content").innerHeight();
S=R+30
}else{R=$(this).innerHeight();
S=R+10
}if(B){if(S>=70){$(this).parent().css("height",S+"px");
$(this).css("height",S+"px")
}}if(j){if(S>=70){$(this).parent().css("height",S+"px");
$(this).css("height",S+"px")
}}else{if(S>50){$(this).parent().css("height",S+"px");
$(this).css("height",S+"px")
}}});
var Q=I-1;
var P=I-3;
var O=0;
if(I>3){if($(this).parent().parent().prev().hasClass("table_compare_more")){$(this).parent().parent().prev().show()
}$(".table_compare_more .table_compare_left").addClass("disabled");
$(this).find("td").css("width","250px");
if($(this).parent().hasClass("table_scroller")){$(this).parent().addClass("table_row_height")
}}else{if($(this).parent().parent().prev().hasClass("table_compare_more")&&I<=3){$(this).parent().parent().prev().hide()
}}});
if(G=="static"&&window.innerWidth<768){$(this).find(".table_compare_mobile").show();
$(this).find(".table_compare_mobile td").removeClass("hide");
$(this).find(".table_compare_mobile td.account_bg_grey").attr("colspan",I);
$(this).find(".table_compare_mobile tr.account_odd_row td").attr("colspan",I);
if(I==1){$(this).find(".table_compare_mobile tr.account_even_row td").addClass("text-center")
}else{$(this).find(".table_compare_mobile tr.account_even_row td").removeClass("text-center");
$(this).find(".table_compare_mobile td").css("width","50%")
}}else{if(window.innerWidth<768&&($('input[name="compareTableProductCount"]').val()<=2)){$(this).find(".product_selection_details").hide();
$(this).find(".table_compare_mobile").show();
$(this).find(".table_compare_mobile").css("margin-top","0");
$(this).find(".table_compare_mobile td").removeClass("hide");
if($(this).find('input[name="compareTableProductCount"]').val()==2){$(this).find(".table_compare_mobile td").css("width","50%")
}if($(this).find('input[name="compareTableProductCount"]').val()==1){$(this).find(".table_compare_mobile td").addClass("text-center")
}}else{$(this).find(".table_compare_mobile").hide()
}}$(this).find(".table_compare_mobile").each(function(){K=0;
$(this).find("tr.account_even_row").each(function(){if($(this).find("td:last-child").text()!=""){K++
}});
if(K==0){$(this).find("tr.account_even_row td").css("text-align","center");
$(this).find("tr.account_even_row td:last-child").remove()
}});
tableCompare(G)
}});
$(".table_compare_more a.disabled").click(function(K){K.preventDefault()
});
$(".table_compare_left").click(function(){$(this).parents(".table_compare_more").next().find(".table_scroller").animate({scrollLeft:0})
});
var H=0;
$(".table_compare_right").click(function(){var N=$(this).parents(".table_compare_more").next().find("tbody > tr:first-child td").length;
var K=$(this).parents(".table_compare_more").next().find(".table_compare tr:first-child > th").css("width");
var M=parseInt(K,10);
$(this).parents(".table_compare_more").next().find(".table_scroller").animate({scrollLeft:"+="+M});
if(!$(this).parents().hasClass("suntrust-section3A")&&N>4){if(H<=6){H=6
}$(this).parents(".table_compare_more").next().find("tr td:nth-child("+(H-1)+")").css("border-right","1px solid #d8d8d8");
$(this).parents(".table_compare_more").next().find("tr td:nth-child("+H+")").css("border-right","0")
}else{if($(this).parents().hasClass("suntrust-section3A")&&N>3){if(H<=5){H=5
}if(l){$(this).parents(".table_compare_more").next().find("tr td:nth-child("+(H-1)+")").css("border-right","1px solid #d8d8d8");
$(this).parents(".table_compare_more").next().find("tr td:nth-child("+H+")").css("border-right","0")
}else{$(this).parents(".table_compare_more").next().find("tr td:nth-child("+(H-1)+")").css("border-right","1px solid #d8d8d8");
$(this).parents(".table_compare_more").next().find("tr td:nth-child("+H+")").css("border-right","0")
}}else{$(this).parents(".table_compare_more").next().find("tr td:last-child").css("width",(M+2)+"px")
}}H++
});
var F=0;
$(".table_scroller").scroll(function(){var K=$(".table_scroller");
var O=K.scrollLeft(),N=K.outerWidth(),M=K.get(0).scrollWidth+1;
if(M-O==N){$(this).parent().prev().find(".table_compare_right").addClass("disabled")
}else{$(this).parent().prev().find(".table_compare_right").removeClass("disabled")
}if(O===0){$(this).parent().prev().find(".table_compare_left").addClass("disabled")
}else{$(this).parent().prev().find(".table_compare_left").removeClass("disabled")
}F=O
});
$(".product_selection_details table.visible-xs").hide();
$(".compare_accounts .sun-checkbox-input-container input:checkbox").attr("checked",false);
$(".sun-checkbox-input-container input:checkbox").click(function(){G=$(this).parents(".suntrust_account_find").find("input[name=compareTableType]").val();
if(G=="comparison"){var M=$(this).parents(".compare_accounts").find(".sun-checkbox-input-container input:checkbox:checked").length;
var K;
$(this).parents(".compare_accounts").next().next().find(".table_compare_mobile").find("tr.account_even_row td").addClass("hide");
$(".sun-checkbox-input-container input:checkbox:checked").each(function(){K=parseInt($(this).attr("index"))+1;
$(this).parents(".compare_accounts").next().next().find(".table_compare_mobile").find("tr td:nth-child("+K+")").removeClass("hide")
});
if(M>0){$(this).parents(".compare_accounts").next().next().find(".table_compare_mobile").show()
}else{$(".table_compare_mobile").hide()
}if(M>=2){$('.sun-checkbox-input-container input:checkbox:not(":checked")').parents(".sun-checkbox-input-container").addClass("sun-checkbox-disabled");
$('.sun-checkbox-input-container input:checkbox:not(":checked")').attr("disabled",true)
}else{$('.sun-checkbox-input-container input:checkbox:not(":checked")').parents(".sun-checkbox-input-container").removeClass("sun-checkbox-disabled");
$('.sun-checkbox-input-container input:checkbox:not(":checked")').attr("disabled",false)
}$(this).parents(".compare_accounts").find(".table_compare_mobile td.account_bg_grey").attr("colspan",M);
$(this).parents(".compare_accounts").find(".table_compare_mobile tr.account_odd_row td").attr("colspan",M);
if(M==1){$(this).parents(".compare_accounts").next().next().find(".table_compare_mobile").find("tr.account_even_row td").addClass("text-center");
$(this).parents(".compare_accounts").next().next().find(".table_compare_mobile").css("width","99.99%");
$(this).parents(".compare_accounts").next().next().find(".table_compare_mobile").find("tr.account_even_row td").css("width","100%")
}else{if(M==2){$(this).parents(".compare_accounts").next().next().find(".table_compare_mobile").find("tr.account_even_row td").removeClass("text-center");
$(this).parents(".compare_accounts").next().next().find(".table_compare_mobile").find("tr.account_even_row td").css("width","50%")
}}}});
setTimeout(function(){var M="";
var O=0;
var N=0;
var K=0;
$(".suntrust_account_find").each(function(){M=$(this).find("input[name=compareTableType]").val();
if(M=="comparison"||M=="static"){$(this).find("table.table_compare tr").each(function(){if(!$(this).find("th").hasClass("account_bg_grey")){O=0;
N=0;
K=0;
$(this).find("th").wrapInner("<div class='table_heading_content'></div>");
$(this).find("td").each(function(){O=Math.max($(this).innerHeight(),O)
});
N=$(this).find("th .table_heading_content").innerHeight();
K=N+30;
if(K>O){$(this).css("height",K+"px")
}}});
$(this).find("th.account_bg_grey").each(function(){var Q=0;
var R=0;
if($(this).find("div").hasClass("table_heading_content")){Q=$(this).find(".table_heading_content").innerHeight();
R=Q+30
}else{Q=$(this).innerHeight();
R=Q+10
}if(j){if(R>=70){$(this).parent().css("height",R+"px");
$(this).css("height",R+"px")
}}if(B){if(R>70){$(this).parent().css("height",R+"px");
$(this).css("height",R+"px")
}else{$(this).parent().css("height","auto");
$(this).css("height","auto")
}}else{if(R>50){$(this).parent().css("height",R+"px");
$(this).css("height",R+"px")
}}});
if(M=="comparison"){var P=0;
if($(this).find("table.table_compare tr:last-child th > div").hasClass("table_heading_content")){P=$(this).find("tr:last-child th div.table_heading_content").innerHeight();
if(P==0){P=20
}$(this).find("tr:last-child").css("height",(P+30)+"px");
if(t){$(this).find("tr:last-child th").css("height",(P+30)+"px")
}else{$(this).find("tr:last-child th").css("height",(P+31)+"px")
}}else{P=$(this).find("table.table_compare tr:last-child").innerHeight();
$(this).find("tr:last-child th").css("height",(P+1)+"px");
$(this).find("tr:last-child").css("height",P+"px")
}if(l){$(this).find("table.table_compare").css("margin-left","1px")
}}}})
},600)
}function o(){var F="An error occurred. Please try again.";
if(typeof $.fancybox=="function"){$.fancybox({content:'<p style="margin:40px 50px;font-size:15px;">'+F+"</p>"})
}else{}}function v(H,M,K,F,J,G,I){$.ajax({url:H,cahe:false,beforeSend:function(){if(!I){g()
}},success:function(O){p(K);
if($("#isPageCarousel").val()=="true"){var N=$(O)
}else{var N=$(O).find("#DecisionTreeSlide").html()
}M.empty().append(N);
u();
speedBumpCheck(M);
allowParameter(M);
if($("#isPageCarousel").val()=="true"){c(M)
}if(F){F()
}},error:function(O,N,P){if(G){G()
}else{o()
}},complete:function(){if(!I){b()
}if(J){J()
}}})
}function g(){var G=$(document).height();
var H=$(document).width();
var F=$("#loadingMask");
if(F.length==0){$("body").append('<div id="loadingMask"></div>');
F=$("#loadingMask")
}F.fadeTo("fast",0.5)
}function b(){$("#loadingMask").fadeOut(500)
}}});
$(document).ready(function(){var b="Author";
var f=window.location.host;
if($(".suntrust-repaymentOption").is(":visible")||$("span[class='rpxcustomtag']").is(":visible")||$(".suntrust-repaymentOption").length>0||$("span[class='rpxcustomtag']").length>0){function e(){var h=$(document).find("input[name=paymentstableservlet]").val();
if(h==""||h==null||h==undefined){h=$("input.rpx-canonical-url").val()
}var g=$(document).find("input[name=rpxjsonpath]").val();
if(g!=""&&g!=null&&g!=undefined){h=g
}$.ajax({url:h,dataType:"json",success:function(o){$("#rptable tbody").empty();
$("#rpTableMobile tbody").empty();
var u=$("#rateType").val()+"_"+$("#term").val()+"_"+$("#repaymentOption").val();
var n=$(document).find("input[name=productType]").val();
var w=$(document).find("input[name=column2heading]").val();
var t=$(document).find("input[name=column3heading]").val();
var v=$(document).find("input[name=row1label]").val();
var k=$(document).find("input[name=row2label]").val();
var p=$(document).find("input[name=row3label]").val();
var r=$(document).find("input[name=row4label]").val();
var j=$(document).find("input[name=row5label]").val();
var m=$(document).find("input[name=row6label]").val();
var q=$(document).find("input[name=row7label]").val();
var y=$(document).find("input[name=row8label]").val();
if(o.hasOwnProperty(n)){if(o[n].hasOwnProperty(u)){var z=$('<tr><th class="headnonBg"></th><th>'+w+"</th><th>"+t+"</th></tr><tr><td>"+v+"</td><td>$"+o[n][u].loan_amount[0]+"</td><td>$"+o[n][u].loan_amount[1]+"</td></tr><tr><td>"+k+"</td><td>"+o[n][u].current_interest_rate[0]+"%</td><td>"+o[n][u].current_interest_rate[1]+"%</td></tr><tr><td>"+p+"</td><td>"+o[n][u].apr[0]+"%</td><td>"+o[n][u].apr[1]+"%</td></tr><tr><td>"+r+"</td><td>$"+o[n][u].monthly_payment_while_in_school[0]+"</td><td>$"+o[n][u].monthly_payment_while_in_school[1]+"</td></tr><tr><td>"+j+"</td><td>$"+o[n][u].monthly_payment_during_payment[0]+"</td><td>$"+o[n][u].monthly_payment_during_payment[1]+"</td></tr><tr><td>"+m+"</td><td>"+o[n][u].deferment_period[0]+"</td><td>"+o[n][u].deferment_period[1]+"</td></tr><tr><td>"+q+"</td><td>"+o[n][u].repayment_period[0]+"</td><td>"+o[n][u].repayment_period[1]+"</td></tr><tr><td>"+y+"</td><td>$"+o[n][u].total_repayment_amount[0]+"</td><td>$"+o[n][u].total_repayment_amount[1]+"</td></tr>");
$("#rptable tbody").append(z);
$("#rptable").removeClass("hide");
$(".noResultsFound").addClass("hide");
var l=$("<tr><th>"+v+"</th><td><span>"+w+": $</span>"+o[n][u].loan_amount[0]+"</td><td><span>"+t+": $</span>"+o[n][u].loan_amount[1]+"</td></tr><tr><th>"+k+"</th><td><span>"+w+": </span>"+o[n][u].current_interest_rate[0]+"%</td><td><span>"+t+": </span>"+o[n][u].current_interest_rate[1]+"%</td></tr><tr><th>"+p+"</th><td><span>"+w+": </span>"+o[n][u].apr[0]+"%</td><td><span>"+t+": </span>"+o[n][u].apr[1]+"%</td></tr><tr><th>"+r+"</th><td><span>"+w+": $</span>"+o[n][u].monthly_payment_while_in_school[0]+"</td><td><span>"+t+": $</span>"+o[n][u].monthly_payment_while_in_school[1]+"</td></tr><tr><th>"+j+"</th><td><span>"+w+": $</span>"+o[n][u].monthly_payment_during_payment[0]+"</td><td><span>"+t+": $</span>"+o[n][u].monthly_payment_during_payment[1]+"</td></tr><tr><th>"+m+"</th><td><span>"+w+": </span>"+o[n][u].deferment_period[0]+"</td><td><span>"+t+": </span>"+o[n][u].deferment_period[1]+"</td></tr><tr><th>"+q+"</th><td><span>"+w+": </span>"+o[n][u].repayment_period[0]+"</td><td><span>"+t+": </span>"+o[n][u].repayment_period[1]+"</td></tr><tr><th>"+y+"</th><td><span>"+w+": $</span>"+o[n][u].total_repayment_amount[0]+"</td><td><span>"+t+": $</span>"+o[n][u].total_repayment_amount[1]+"</td></tr>");
$("#rpTableMobile tbody").append(l);
$("#rpTableMobile").removeClass("hide")
}else{$("#rptable").addClass("hide");
$("#rpTableMobile").addClass("hide");
$(".noResultsFound").removeClass("hide")
}}else{$("#rptable").addClass("hide");
$("#rpTableMobile").addClass("hide");
$(".noResultsFound").removeClass("hide")
}$("#rptable tr").each(function(){$(this).find("td").each(function(){$(this).html(c($(this).text()))
})
});
$("#rpTableMobile tr td").each(function(){$(this).html(d($(this).text()))
});
$(".repaymentOption-table-desktop .repaymentOption-table tr").each(function(D){var E=D-1;
var C=$(this).find("td:nth-child(2)").text();
var B=$(this).find("td:nth-child(3)").text();
if(C!=""&&B!=""&&C==B){var A=$(".repayment-mobiletable table tr").eq(E);
A.find("td:nth-child(3)").hide();
A.find("td:nth-child(2) span").hide()
}});
$(".rpxcustomtag").each(function(){var M=$(this).data("product-code");
var D=$(this).data("rate-type");
var E=$(this).data("term");
var K=$(this).data("repay-option");
var B=$(this).data("field-name");
var F=$(this).data("high-or-low");
var H=D+"_"+E+"_"+K;
if(M!=undefined&&D!=undefined&&E!=undefined&&K!=undefined&&B!=undefined&&F!=undefined&&H!=undefined){if(o.hasOwnProperty(M)){if(o[M].hasOwnProperty(H)){if(o[M][H].hasOwnProperty(B)){$(this).text(o[M][H][B][F])
}}}}else{if(M!=undefined&&D!=undefined&&E==undefined&&K==undefined&&B!=undefined&&F!=undefined&&H!=undefined){var A;
if(D.toLowerCase().indexOf("libor")>-1){A=B+"_variable_range"
}if(D.toLowerCase().indexOf("fixed")>-1){A=B+"_fixed_range"
}if(o.hasOwnProperty(M)&&o[M].commons.hasOwnProperty(A)){$(this).text(o[M].commons[A][F])
}}else{if(M==undefined&&D!=undefined&&E==undefined&&K==undefined&&B!=undefined&&F!=undefined&&H!=undefined){var A;
if(D.toLowerCase().indexOf("libor")>-1){A=B+"_variable_range_all"
}if(D.toLowerCase().indexOf("fixed")>-1){A=B+"_fixed_range_all"
}for(var I in o){var G=o[I];
for(var C in G){if(G[C].hasOwnProperty(A)){$(this).text(G[C][A][F])
}}}}else{if(M==undefined){if(B=="rate_effective_date_time"||B=="libor_date"){var J=o.SUNTFAO1.commons[B]!=undefined?o.SUNTFAO1.commons[B]:o.STGBL1.commons[B]!=undefined?o.STGBL1.commons[B]:o.STUFPSL1.commons[B]!=undefined?o.STUFPSL1.commons[B]:o.START1.commons[B]!=undefined?o.START1.commons[B]:"";
$(this).text(J)
}}else{if(o.hasOwnProperty(M)&&o[M].commons.hasOwnProperty(B)){$(this).text(o[M].commons[B])
}}}}}})
}})
}e()
}function d(l){var m;
var g=l.split(":");
l=g[1];
if(l.indexOf("$")!=-1){m=l.substring(2,l.length)
}if(l.indexOf("%")!=-1){m=l.substring(0,l.length-1)
}if($.isNumeric(parseFloat(m))&&l.length>5){if(l.indexOf(".")==-1){var j=l.substring(l.length-3);
var k=l.substring(0,l.length-3);
l="<span>"+g[0]+":</span>"+k+","+j
}else{var h=l.split(".");
x=h[0];
if(x.length>5){var j=x.substring(x.length-3);
var k=x.substring(0,x.length-3);
l="<span>"+g[0]+":</span>"+k+","+j+"."+h[1]
}else{l="<span>"+g[0]+":</span>"+l
}}}return l
}function c(j){var l;
if(j.indexOf("$")!=-1){l=j.substring(1,j.length)
}if($.isNumeric(parseFloat(l))&&j.length>5){if(j.indexOf(".")==-1){var h=j.substring(j.length-3);
var k=j.substring(0,j.length-3);
j=k+","+h
}else{var g=j.split(".");
x=g[0];
if(x.length>5){var h=x.substring(x.length-3);
var k=x.substring(0,x.length-3);
j=k+","+h+"."+g[1]
}}}return j
}$("#rateType,#term,#repaymentOption").on("change",function(){e()
});
if(window.innerWidth<801){$(document).on("click",".suntrust-repaymentOption .field label",function(g){g.preventDefault()
})
}});
$(document).ready(function(ba){if($(".search_result_categories").length!=0){function a0(bU,e){if(!e){e=window.location.href
}bU=bU.replace(/[\[\]]/g,"\\$&");
var bW=new RegExp("[?&]"+bU+"(=([^&#]*)|&|#|$)"),bV=bW.exec(e);
if(!bV){return null
}if(!bV[2]){return""
}return decodeURIComponent(bV[2].replace(/\+/g," "))
}$(document).on("click",".get-direction-link-mobile",function(bV){bV.preventDefault();
var bU=$(this).attr("data-mobile-link");
if(bU!=""){if(/Android/i.test(navigator.userAgent)){window.open(bU,"_system")
}else{window.open(bU)
}}});
var aO=[];
var ac=true;
var bj=true;
var bS=true;
var bG=true;
var az=true;
var Y=true;
var bw=false;
var bb=false;
var bl=false;
var t=[];
var bF=[];
var aB=0;
var aA=0;
var aa=$(".no-result-text-for-location-filter").val();
var bJ=$(".no-result-text-for-people-filter").val();
var I=$(".no-result-text-for-resources-filter").val();
var av=$("select.search_select option:selected").val();
var aw;
var aP;
var ao=false;
var aD=false;
var o=undefined;
var m=undefined;
var aq;
var v;
var U;
var R;
var ar;
var aY;
var aC;
var C;
var Q;
var aY;
var bf=0;
var aj;
var by=[];
var am=a0("searchTerm");
if(am!=null&&am!="null"&&am!=""&&am!=undefined){am=encodeURIComponent(am);
aH(am);
$(".location-search .suntrust_search").val(decodeURIComponent(am.trim()));
$("#loadingMask").show()
}var bE=a0("locationRadius");
var Z=a0("locationServices");
var D=a0("peopleRadius");
var ag=a0("specialty");
var ax="";
if(window.location.hash=="#all_results"||window.location.hash=="#locations"||window.location.hash=="#people"||window.location.hash=="#faqs"||window.location.hash=="#products"||window.location.hash=="#resources"){ax=window.location.hash
}else{ax="#all_results"
}while(ax!=""&&ax.charAt(0)==="#"){ax=ax.substr(1)
}ax=ax.trim();
var bz=[];
var aL=[];
var H=[];
var n=[];
var bc=0;
var h=0;
var O=0;
var ah=0;
var j;
var aJ;
var A=[];
var W=[];
var c=[];
var aU=[];
var aE=[];
var a9=[];
var ay=parseInt($(".location_result_show_more_results a").attr("data-search-visible-items-limit"));
var aR=parseInt($(".people_result_show_more_results a").attr("data-search-visible-items-limit"));
var a2=parseInt($(".resources_result_show_more_results a").attr("data-search-visible-items-limit"));
var p=parseInt($(".all_result_show_more_results a").attr("data-search-visible-items-limit"));
var a3;
$(".search_result_categories").addClass("hide");
$(".search_result_categories .visible-xs .mobile-filter-button").addClass("hide");
$(".location-search .search_result_count").addClass("hide");
$(".location_result_show_more_results").addClass("hide");
$(".search_result_show_more_results").addClass("hide");
$(".faq_result_show_more_results").addClass("hide");
$(".all_result_show_more_results").addClass("hide");
$(".people_result_show_more_results").addClass("hide");
function aI(){if(ax!=""){$("ul.search_select a").removeClass("active");
$("ul.search_select a[index='"+ax+"']").addClass("active");
var e=$("select.search_select option[value='"+ax.toLowerCase()+"']").text();
$("select.search_select option[value="+ax.toLowerCase()+"]").parent().prev().html(e);
if(ax=="locations"){am=am.trim();
if(bE!=null&&bE!=undefined&&bE!=""){bE=bE.toString().trim()
}else{bE=10
}bE=parseInt(bE);
var bU;
if(bE==5||bE==5){bU=0
}if(bE==10){bU=1
}if(bE==20){bU=2
}if(bE==50){bU=3
}$(".locations_filter_desktop .search_detail_radius_select select option:eq("+bU+")").attr("selected",true);
$(".locations_filter_desktop .search_detail_radius_select span").text(bE+" Miles");
$(".locations_filter_mobile .mobile-radius-filter .search_detail_radius_select select option:eq("+bU+")").attr("selected",true);
$(".locations_filter_mobile .mobile-radius-filter .search_detail_radius_select span").text(bE+" Miles");
if(Z!=null&&Z!=undefined&&Z!=""){Z=Z.trim()
}aj=am;
$(".location-search .suntrust_search").val(decodeURIComponent(aj));
if(ac){if(am!=null&&am!="null"&&bE!=null&&Z!=null){bp(bE,"newSearch",Z)
}else{if(am!=null&&am!="null"&&bE==null&&Z!=null){bp(10,"newSearch",Z)
}else{if(am!=null&&bE!=null&&Z==null){bp(bE,"newSearch")
}else{if(am!=null&&bE==null&&Z==null){bp(10,"newSearch")
}}}}}ac=false
}}}function aK(){if(ax!=""){$("ul.search_select a").removeClass("active");
$("ul.search_select a[index='"+ax+"']").addClass("active");
var bU=$("select.search_select option[value='"+ax.toLowerCase()+"']").text();
$("select.search_select option[value="+ax.toLowerCase()+"]").parent().prev().html(bU);
if(ax=="people"){if(am!=null&&am!=undefined&&am!=""){am=am.trim()
}if(D!=null&&D!=undefined&&D!=""){D=D.toString()
}else{D=10
}D=parseInt(D);
var bV;
if(D==5||D==5){bV=0
}if(D==10){bV=1
}if(D==20){bV=2
}if(D==50){bV=3
}$(".people_filter_desktop .search_detail_radius_select select option:eq("+bV+")").attr("selected",true);
$(".people_filter_desktop .search_detail_radius_select span").text(D+" Miles");
$(".people_filter_mobile .mobile-radius-filter .search_detail_radius_select select option:eq("+bV+")").attr("selected",true);
$(".people_filter_mobile .mobile-radius-filter .search_detail_radius_select span").text(D+" Miles");
if(ag!=null&&ag!=undefined&&ag!=""){ag=ag.trim();
if(ag.indexOf("+")>-1){ag=ag.replace(/\+/g," ")
}if(ag.indexOf("%2B")>-1){ag=ag.replace(/\%2B/g," ")
}function e(b2,b0){for(var b1=0;
b1<b0.length;
b1++){if(b0[b1].match(b2)){return b1
}}return -1
}var bZ;
var bY;
var bX=0;
var bW=0;
$(".advisorConfigs input").each(function(){var b0=$(this);
if(b0.attr("class")==(ag)){bZ=$(this).attr("class")
}else{if(ag.indexOf(" ")>-1){ag.split(" ").forEach(function(b1){if(b1!=null&&b1!=undefined&&b1!=""&&b1!="all"){if(b0.hasClass(b1)){aO[bX]="advisor-specialty:"+b1;
++bX
}}})
}else{if(ag!=null&&ag!=undefined&&ag!=""&&ag!="all"){aO[bW]="advisor-specialty:"+ag;
++bW
}}}});
var bX=0;
if(bZ!=null&&bZ!=undefined&&bZ!=""){bZ.split(" ").forEach(function(b0){if(b0!=null&&b0!=undefined&&b0!=""&&b0!="all"){aO[bX]="advisor-specialty:"+b0;
++bX
}})
}$.unique(aO)
}aj=am;
if(aj!=null&&aj!=undefined&&aj!=""&&aj!="null"){$(".location-search .suntrust_search").val(decodeURIComponent(aj))
}if(bj){if(am!=null&&am!="null"&&D!=null&&aO!=null){br(D,"newSearch",aO)
}else{if(am!=null&&am!="null"&&D==null&&aO!=null){br(10,"newSearch",aO)
}else{if(am!=null&&D!=null&&aO==null){br(D,"newSearch")
}else{if(am!=null&&D==null&&aO==null){br(10,"newSearch")
}}}}bj=false
}}}}function aM(){if(ax!=""){if(am!=null&&am!="null"){$("ul.search_select a").removeClass("active");
$("ul.search_select a[index='"+ax+"']").addClass("active");
var e=$("select.search_select option[value='"+ax.toLowerCase()+"']").text();
$("select.search_select option[value="+ax.toLowerCase()+"]").parent().prev().html(e);
if(ax=="products"){aj=am;
$(".location-search .suntrust_search").val(decodeURIComponent(aj));
bG=true;
if(bG){bu();
bG=false
}}}}}function aX(){if(ax!=""){if(am!=null&&am!="null"){$("ul.search_select a").removeClass("active");
$("ul.search_select a[index='"+ax+"']").addClass("active");
var e=$("select.search_select option[value='"+ax.toLowerCase()+"']").text();
$("select.search_select option[value="+ax.toLowerCase()+"]").parent().prev().html(e);
if(ax=="resources"){aj=am;
$(".location-search .suntrust_search").val(decodeURIComponent(aj));
Y=true;
if(Y){bH();
Y=false
}}}}}function bx(){if(ax!=""){if(am!=null&&am!="null"){$("ul.search_select a").removeClass("active");
$("ul.search_select a[index='"+ax+"']").addClass("active");
var e=$("select.search_select option[value='"+ax.toLowerCase()+"']").text();
$("select.search_select option[value="+ax.toLowerCase()+"]").parent().prev().html(e);
if(ax=="faqs"){aj=am;
$(".location-search .suntrust_search").val(decodeURIComponent(aj));
bS=true;
if(bS){r();
bS=false
}}}}}function bQ(){if(ax!=""){if(am!=null&&am!="null"){$("ul.search_select a").removeClass("active");
$("ul.search_select a[index='"+ax+"']").addClass("active");
var e=$("select.search_select option[value='"+ax.toLowerCase()+"']").text();
$("select.search_select option[value="+ax.toLowerCase()+"]").parent().prev().html(e);
if(ax=="all_results"){aj=am;
$(".location-search .suntrust_search").val(decodeURIComponent(aj));
az=true;
if(az){J();
az=false
}}}}}Array.prototype.min=function(){return Math.min.apply(null,this)
};
function aH(e){var bU=e;
$.ajax({type:"POST",url:"https://www.mapquestapi.com/geocoding/v1/address?key=Gmjtd%7Clu6zn1ua2d%2C70%3Do5-l0850&outFormat=json&maxResults=1&location="+bU,dataType:"json",async:false,success:function(bW){if(bW!=undefined&&bW.results!=undefined&&bW.results[0]!=undefined&&bW.results[0].locations!=undefined){for(var bV=0;
bV<bW.results[0].locations.length;
bV++){if(bW.results[0].locations[bV].adminArea1!=undefined&&bW.results[0].locations[bV].adminArea1=="US"&&bW.results[0].locations[bV].latLng!=undefined&&bW.results[0].locations[bV].latLng.lat!=undefined&&bW.results[0].locations[bV].latLng.lng!=undefined){o=bW.results[0].locations[bV].latLng.lat;
m=bW.results[0].locations[bV].latLng.lng;
break
}}}},error:function(bW,bV,bX){console.log("Error during getCurrentPosition")
}})
}function X(){aI();
aK();
aM();
aX();
bx();
bQ()
}if($(".location-search").length!=0){X()
}function an(bV,e){o=e.coords.latitude;
m=e.coords.longitude;
var b0=bV.siblings("span").find("input");
var bU,bZ,bY,bX,bW;
$.ajax({type:"POST",url:"https://www.mapquestapi.com/geocoding/v1/address?key=Gmjtd%7Clu6zn1ua2d%2C70%3Do5-l0850&outFormat=json&location="+o+","+m,dataType:"json",async:false,success:function(b2){$.each(b2.results,function(){$.each(this,function(b3,b5){if(b3!=null&&b3!=undefined&&b3=="locations"){var b4=b5;
bZ=b4[0].street;
bY=b4[0].adminArea5;
bX=b4[0].adminArea3;
bW=b4[0].postalCode
}})
});
var b1={address:bZ+","+bY+","+bX+","+bW,zip:bW,city:bY,state:bX};
b2=JSON.parse(JSON.stringify(b1));
aq=b1.address;
bL(b2,b0);
if($(".suntrust-input-location-button-map").length>0){bL(b2,$(".suntrust-input-location-button-map").siblings("input:first"))
}},error:function(b2,b1,b3){console.log("Error during showLocation")
}})
}function bL(bW,bZ){if(bW.address!=""){bZ.typeahead("val",bW.address);
bZ.focus();
if(bZ.data("linked-id")){var bU=$("#"+bZ.data("linked-id"));
if(bU.length>0){bU.val(bW.address)
}}}if(bW.zip!=""||bW.city!=""||bW.state!=""){var bX=bZ.siblings("input.suntrust-input-location-zip");
if(bW.zip!=""&&bX.length>0){bX.val(bW.zip)
}var bV=bZ.siblings("input.suntrust-input-location-city");
if(bW.city!=""&&bV.length>0){bV.val(bW.city)
}var bY=bZ.siblings("input.suntrust-input-location-state");
if(bW.state!=""&&bY.length>0){bY.val(bW.state)
}var e=bZ.siblings("input.suntrust-input-location-field");
if(e.length>0){bZ.keydown(function(b0){if(b0.keyCode==9||b0.keyCode==27||b0.keyCode==13||(b0.keyCode==65&&b0.ctrlKey===true)||(b0.keyCode>=35&&b0.keyCode<=39)){return
}else{e.val("")
}})
}}}if($("body .search_result_filters.result_filters_other").length!=0){$(".search_result_filters_products .parsys_validation_error_products").remove();
$(".search_result_filters_all_results .parsys_validation_error_all_results").remove();
$(".search_result_filters_faqs .parsys_validation_error_faqs").remove();
var aZ=$(".search_result_filters_products").children("div").length;
var aS=$(".search_result_filters_faqs").children("div").length;
var bT=$(".search_result_filters_all_results").children("div").length;
var al=parseInt($(".number-of-promo-components-in-products").val());
var a7=parseInt($(".number-of-promo-components-in-faqs").val());
var bA=parseInt($(".number-of-promo-components-in-all-results").val());
if(aZ>=(al+1)){$(".search_result_filters_products .newpar").hide();
$(".search_result_filters_products").append("<p class='parsys_validation_error_products'>Reached maximum number of components for products tab.</p>")
}else{$(".search_result_filters_products .newpar").show();
$(".search_result_filters_products .parsys_validation_error_products").remove()
}if(aS>=(a7+1)){$(".search_result_filters_faqs .newpar").hide();
$(".search_result_filters_faqs").append("<p class='parsys_validation_error_faqs'>Reached maximum number of components for faqs tab.</p>")
}else{$(".search_result_filters_faqs .newpar").show();
$(".search_result_filters_faqs .parsys_validation_error_faqs").remove()
}if(bT>=(bA+1)){$(".search_result_filters_all_results .newpar").hide();
$(".search_result_filters_all_results").append("<p class='parsys_validation_error_all_results'>Reached maximum number of components for all results tab.</p>")
}else{$(".search_result_filters_all_results .newpar").show();
$(".search_result_filters_all_results .parsys_validation_error_all_results").remove()
}}$(document).on("click",".show_more",function(){if($(this).text()=="Show More"){$(this).text("View Less");
$(this).prev(".faq_result_data").find(".faq_shoeMoreLess_Content").removeClass("faq_showMore")
}else{$(this).text("Show More");
$(this).prev(".faq_result_data").find(".faq_shoeMoreLess_Content").addClass("faq_showMore")
}});
function bO(){var bY=$(".locations_filter_container").height();
var bX=$(".locations_filter_container").offset().top;
var b0=bX+$(window).scrollTop();
var bU=$(".location_mq_results").children().length;
var bW=$(".location_aem_results").children().length;
var bZ=parseInt(bU)+parseInt(bW);
var bV=bz.length;
if((b0>=(bY-200))&&(bZ<bV)){$("div.search_result_description_details:visible:last").css("border-bottom","1px solid #d5d5d5");
ay=ay+parseInt($(".location_result_show_more_results a").attr("data-search-visible-items-limit"));
bc=bc+parseInt($(".location_result_show_more_results a").attr("data-search-visible-items-limit"));
ai(bz,"singleDimension","refineResult",ay,bc);
if(ay<bV){ai(bz,"singleDimension","refineResult",ay,bc)
}else{ai(bz,"singleDimension","refineResult",bV,bc)
}var e=parseInt($(".location_result_show_more_results a").attr("data-search-visible-items-limit"));
$("div.search_result_description_details:visible:last").css("border-bottom","0px")
}}function a6(){var bV=$(".resources_filter_container").height();
var bU=$(".resources_filter_container").offset().top;
var bX=bU+$(window).scrollTop();
var bW=parseInt($(".resources_filter_container .search_result_content").children().length);
var e=H.length;
if((bX>=(bV-200))&&(bW<e)){$("div.search_result_content_data:visible:last").css("border-bottom","1px solid #d5d5d5");
a2=a2+parseInt($(".resources_result_show_more_results a").attr("data-search-visible-items-limit"));
ah=ah+parseInt($(".resources_result_show_more_results a").attr("data-search-visible-items-limit"));
if(a2<e){ad(H,"refineResult",a2,ah)
}else{ad(H,"refineResult",e,ah)
}$("div.search_result_content_data:visible:last").css("border-bottom","0px")
}}function M(){var bV=$(".all_results_filter_container").height();
var bU=$(".all_results_filter_container").offset().top;
var bX=bU+$(window).scrollTop();
var bW=$(".all_results_filter_container").children().length;
var e=aL.length;
if((bX>=(bV-300))&&(bW<e)){$("div.search_result_content:last").css("border-bottom","1px solid #d5d5d5");
p=p+parseInt($(".all_result_show_more_results a").attr("data-search-visible-items-limit"));
h=h+parseInt($(".all_result_show_more_results a").attr("data-search-visible-items-limit"));
if(p<e){a4(aL,p,h);
af();
bk()
}else{a4(aL,e,h);
af();
bk()
}}}function bR(){var bY=$(".people_filter_container").height();
var bX=$(".people_filter_container").offset().top;
var b0=bX+$(window).scrollTop();
var bU=$(".people_mq_results").children().length;
var bW=$(".people_aem_results").children().length;
var bZ=parseInt(bU)+parseInt(bW);
var bV=n.length;
if((b0>=(bY-200))&&(bZ<bV)){$("div.search_result_description_details:visible:last").css("border-bottom","1px solid #d5d5d5");
O=O+parseInt($(".people_result_show_more_results a").attr("data-search-visible-items-limit"));
aR=aR+parseInt($(".people_result_show_more_results a").attr("data-search-visible-items-limit"));
if(aR<bV){bB(n,"singleDimension","refineResult",aR,O)
}else{bB(n,"singleDimension","refineResult",bV,O)
}var e=parseInt($(".people_result_show_more_results a").attr("data-search-visible-items-limit"));
$("div.search_result_description_details:visible:last").css("border-bottom","0px")
}}$(window).scroll(function(){var e=$("select.search_select").parent().find("span").text();
$("select.search_select option").each(function(bU){if($(this).text()==e){aw=$(this).val()
}});
if(window.innerWidth<768){if(aw!=undefined||aw!=null||aw!=""){if(aw=="locations"){bO()
}else{if(aw=="all_results"){M()
}else{if(aw=="people"){bR()
}else{if(aw=="resources"){a6()
}}}}}}});
function bD(){if(window.innerWidth<768){aP=$("select.search_select option:selected").val();
av=$("select.search_select option:selected").val();
if(av!=undefined){aw=av.toLowerCase()
}}else{aP=$("ul.search_select a.active").attr("index");
av=$("ul.search_select a.active").attr("index");
if(av!=undefined){aw=av.toLowerCase()
}}if(aw!="products"&&aw!="all_results"&&aw!="faqs"){if($(".search_result_filters_nonProducts").hasClass("hide")){$(".search_result_filters_nonProducts").removeClass("hide")
}if(!$(".search_result_filters_products").parent().hasClass("author_hide")){$(".search_result_filters_products").parent().addClass("author_hide");
$(".search_result_filters_products").addClass("hide");
$(".search_result_filters_products").next().addClass("hide")
}$("."+aw+"_result_count").removeClass("hide");
$("a[index='"+aw+"_filter']").removeClass("hide");
$("."+aw+"_filter_mobile").removeClass("hide");
$("."+aw+"_filter_desktop").removeClass("hide");
$("."+aw+"_filter_container").removeClass("hide");
$(".search_result_filters").removeClass("hide")
}else{if(aw=="products"||aw=="all_results"||aw=="faqs"){$(".search_result_filters_nonProducts").addClass("hide");
$("."+aw+"_result_count").removeClass("author_hide");
$(".search_result_filters_products").parent().removeClass("author_hide");
$(".search_result_filters_"+aw+"").removeClass("hide");
if(aw!="faqs"){$(".search_result_filters_products").find(".search_result_filters_"+aw+"").addClass("hide")
}$("."+aw+"_filter_container").removeClass("hide");
$(".search_result_filters_nonProducts").addClass("hide")
}}}function au(){$("."+aw+"_result_count").addClass("hide");
if(aw!="all_results"&&aw!="products"&&aw!="faqs"){$("a[index='"+aw+"_filter']").addClass("hide")
}$("."+aw+"_filter_mobile").addClass("hide");
$("."+aw+"_filter_desktop").addClass("hide");
$("."+aw+"_filter_container").addClass("hide");
$(".search_result_filters_"+aw+"").addClass("hide")
}function w(){$("."+aw+"_result_count").addClass("hide");
if(aw!="all_results"&&aw!="products"&&aw!="faqs"){$("a[index='"+aw+"_filter']").addClass("hide")
}$("."+aw+"_filter_mobile").addClass("hide");
$("."+aw+"_filter_desktop").addClass("hide");
$("."+aw+"_filter_container").addClass("hide");
$(".search_result_filters_"+aw+"").addClass("hide")
}function T(){$(".search_result_count").addClass("hide");
var bV=aL.length;
if(bV==0){$(".all_results_no_result.zero_result_found").removeClass("hide");
$(".search_result_filters_all_results").addClass("hide")
}else{if(bV>0){$(".all_results_filter_container").removeClass("hide");
$(".result_filters_other").removeClass("author_hide");
$(".search_result_filters_all_results").removeClass("author_hide");
$(".search_result_filters_all_results").removeClass("hide")
}}var bU=$(".all_results_filter_container div.search_result_content:visible").length;
var e=aL.length;
if(bU<e){$(".all_result_show_more_results").removeClass("hide")
}else{$(".all_result_show_more_results").addClass("hide")
}$("#loadingMask").fadeOut(100)
}function ab(){$(".faqs_result_count").removeClass("hide");
var e=parseInt($(".faqs_result_count").text());
if(e==0){$(".faqs_no_result.zero_result_found").removeClass("hide");
$(".search_result_filters_faqs").addClass("hide")
}else{if(e>0){$(".faqs_filter_container").removeClass("hide");
$(".result_filters_other").removeClass("author_hide");
$(".search_result_filters_faqs").removeClass("author_hide");
$(".search_result_filters_faqs").removeClass("hide")
}}var bV=$(".faqs_filter_container div.sun-faqs-page-list-item:visible").length;
var bU=$(".faqs_filter_container div.sun-faqs-page-list-item").length;
if(bV<bU){$(".faq_result_show_more_results").removeClass("hide")
}else{$(".faq_result_show_more_results").addClass("hide")
}$("#loadingMask").fadeOut(100)
}function G(){$(".products_result_count").removeClass("hide");
var e=parseInt($(".products_result_count").text());
if(e==0){$(".products_no_result.zero_result_found").removeClass("hide");
$(".search_result_filters_products").addClass("hide")
}else{if(e>0){$(".products_filter_container").removeClass("hide");
$(".result_filters_other").removeClass("author_hide");
$(".search_result_filters_products").removeClass("author_hide");
$(".search_result_filters_products").removeClass("hide")
}}var bV=$(".products_filter_container div.search_result_content_data:visible").length;
var bU=$(".products_filter_container div.search_result_content_data").length;
if(bV<bU){$(".search_result_show_more_results").removeClass("hide")
}else{$(".search_result_show_more_results").addClass("hide")
}$("#loadingMask").fadeOut(100)
}function ae(){$(".locations_result_count").removeClass("hide");
var bW=parseInt($(".locations_result_count").text());
var bV=$(".locations_filter_container .filter-no-result.zero_result_found").is(":visible");
if(!bV){if(bW==0){$(".locations_no_result.zero_result_found").removeClass("hide");
$(".location.mobile-filter-button").addClass("hide");
$(".search_result_filters_nonProducts").addClass("hide");
$(".result_filters_other").addClass("author_hide")
}else{if(bW>0){$(".location.mobile-filter-button").removeClass("hide");
$(".locations_filter_container").removeClass("hide");
$(".search_result_filters_nonProducts").removeClass("hide");
$(".result_filters_other").removeClass("author_hide")
}}var bU=$(".location_mq_results").children().length;
var bY=$(".location_aem_results").children().length;
var bZ=parseInt(bU)+parseInt(bY);
var bX=bz.length;
var e=parseInt($(".location_result_show_more_results a").attr("data-search-visible-items-limit"));
if(bZ==bX||bX<=e){$(".location_result_show_more_results").addClass("hide")
}else{$(".location_result_show_more_results").removeClass("hide")
}}$("#loadingMask").fadeOut(100)
}function bm(){$(".resources_result_count").removeClass("hide");
var bW=parseInt($(".resources_result_count").text());
var bU=$(".resources_filter_container .filter-no-result.zero_result_found").is(":visible");
if(!bU){if(bW==0){$(".resources_no_result.zero_result_found").removeClass("hide");
$(".resources.mobile-filter-button").addClass("hide");
$(".search_result_filters_nonProducts").addClass("hide");
$(".result_filters_other").addClass("author_hide")
}else{if(bW>0){$(".resources.mobile-filter-button").removeClass("hide");
$(".resources_filter_container").removeClass("hide");
$(".search_result_filters_nonProducts").removeClass("hide");
$(".result_filters_other").removeClass("author_hide")
}}var bX=parseInt($(".resources_filter_container .search_result_content").children().length);
var bV=H.length;
var e=parseInt($(".resources_result_show_more_results a").attr("data-search-visible-items-limit"));
if(bX==bV||bV<=e){$(".resources_result_show_more_results").addClass("hide")
}else{$(".resources_result_show_more_results").removeClass("hide")
}}$("#loadingMask").fadeOut(100)
}function k(){$(".people_result_count").removeClass("hide");
var bX=parseInt($(".people_result_count").text());
var bV=$(".people_filter_container .filter-no-result.zero_result_found").is(":visible");
if(!bV){if(bX==0){$(".people_no_result.zero_result_found").removeClass("hide");
$(".people.mobile-filter-button").addClass("hide");
$(".search_result_filters_nonProducts").addClass("hide");
$(".result_filters_other").addClass("author_hide")
}else{if(bX>0){$(".people.mobile-filter-button").removeClass("hide");
$(".people_filter_container").removeClass("hide");
$(".search_result_filters_nonProducts").removeClass("hide");
$(".result_filters_other").removeClass("author_hide")
}}var bU=$(".people_mq_results").children().length;
var bY=$(".people_aem_results").children().length;
var bZ=parseInt(bU)+parseInt(bY);
var bW=n.length;
var e=parseInt($(".people_result_show_more_results a").attr("data-search-visible-items-limit"));
if(bZ==bW||bW<=e){$(".people_result_show_more_results").addClass("hide")
}else{$(".people_result_show_more_results").removeClass("hide")
}}$("#loadingMask").fadeOut(100)
}$(document).on("click",".search_result_categories ul.text-center a",function(){$("#loadingMask").show();
$("ul.search_select a").removeClass("active");
$(this).addClass("active");
au();
bD();
$(".people_filter_mobile").addClass("hide");
$(".resources_filter_mobile").addClass("hide");
$(".locations_filter_mobile").addClass("hide");
var bU=$(".search_text_error_message").is(":visible");
$("select.search_select option[value="+av+"]").attr("selected",true);
$("select.search_select option[value="+av+"]").parent().prev().html(av);
if(aw!="products"&&aw!="all_results"&&aw!="faqs"){if($(".search_result_filters_nonProducts").hasClass("hide")){$(".search_result_filters_nonProducts").removeClass("hide")
}if(!$(".search_result_filters_products").parent().hasClass("author_hide")){$(".search_result_filters_products").parent().addClass("author_hide");
$(".search_result_filters_products").addClass("hide");
$(".search_result_filters_products").next().addClass("hide")
}$("."+aw+"_result_count").removeClass("hide");
if(aw!="all_results"&&aw!="products"&&aw!="faqs"){$("a[index='"+aw+"_filter']").removeClass("hide")
}$("."+aw+"_filter_mobile").removeClass("hide");
$("."+aw+"_filter_desktop").removeClass("hide");
$("."+aw+"_filter_container").removeClass("hide");
$(".search_result_filters").removeClass("hide")
}else{if(aw=="products"||aw=="all_results"||aw=="faqs"){$(".search_result_filters_nonProducts").addClass("hide");
$("."+aw+"_result_count").removeClass("hide");
$(".search_result_filters_products").parent().removeClass("author_hide");
$(".search_result_filters_"+aw+"").removeClass("hide");
$(".search_result_filters_"+aw+"").removeClass("author_hide");
if(aw!="faqs"){$(".search_result_filters_products").find(".search_result_filters_"+aw+"").addClass("hide")
}$("."+aw+"_filter_container").removeClass("hide");
$(".search_result_filters_nonProducts").addClass("hide")
}}$(".location_result_show_more_results").addClass("hide");
$(".people_result_show_more_results").addClass("hide");
$(".faq_result_show_more_results").addClass("hide");
$(".resources_result_show_more_results").addClass("hide");
$(".all_result_show_more_results").addClass("hide");
$(".search_result_show_more_results").addClass("hide");
$(".all_results_filter_container").addClass("hide");
$(".all_results_no_result.zero_result_found").addClass("hide");
$(".faqs_filter_container").addClass("hide");
$(".faqs_result_count").addClass("hide");
$(".faqs_no_result.zero_result_found").addClass("hide");
$(".products_no_result.zero_result_found").addClass("hide");
$(".products_filter_container").addClass("hide");
$(".products_result_count").addClass("hide");
$(".locations_no_result.zero_result_found").addClass("hide");
$(".locations_filter_container").addClass("hide");
$(".locations_result_count").addClass("hide");
$(".resources_no_result.zero_result_found").addClass("hide");
$(".resources_filter_container").addClass("hide");
$(".resources_result_count").addClass("hide");
$(".people_no_result.zero_result_found").addClass("hide");
$(".people_filter_container").addClass("hide");
$(".people_result_count").addClass("hide");
$(".search_result_count").removeClass("hide");
if(aw=="faqs"){window.location.hash=aw;
if(bS&&!bU){bS=false;
r()
}else{ab()
}}if(aw=="products"){window.location.hash=aw;
if(bG&&!bU){bG=false;
bu()
}else{G()
}}if(aw=="all_results"){$(".search_result_count").addClass("hide");
window.location.hash=aw;
if(az&&!bU){az=false;
J()
}else{T()
}}if(aw=="locations"){window.location.hash=aw;
if(ac&&!bU){ac=false;
bp("10","newSearch")
}else{var bV=$(".location-filter-no-result-identifier").val();
if(bV=="NoResultsDuringFilter"){$(".locations_filter_container").removeClass("hide");
$(".locations_result_count").removeClass("hide")
}var e=$(".locations_filter_container .filter-no-result.zero_result_found").is(":visible");
if(!e){ae()
}}}if(aw=="resources"){window.location.hash=aw;
if(Y&&!bU){Y=false;
bH()
}else{var bV=$(".resources-filter-no-result-identifier").val();
if(bV=="NoResultsDuringFilter"){$(".resources_filter_container").removeClass("hide");
$(".resources_result_count").removeClass("hide")
}var e=$(".resources_filter_container .filter-no-result.zero_result_found").is(":visible");
if(!e){bm()
}}}if(aw=="people"){window.location.hash=aw;
if(bj&&!bU){bj=false;
br("10","newSearch")
}else{var bV=$(".people-filter-no-result-identifier").val();
if(bV=="NoResultsDuringFilter"){$(".people_filter_container").removeClass("hide");
$(".people_result_count").removeClass("hide")
}var e=$(".people_filter_container .filter-no-result.zero_result_found").is(":visible");
if(!e){k()
}}}$(".search_result_categories").removeClass("hide");
$("#loadingMask").fadeOut(100)
});
$("select.search_select").on("change",function(bX){$("#loadingMask").show();
au();
aP=$(this).val();
$(".people_filter_mobile").addClass("hide");
$(".resources_filter_mobile").addClass("hide");
$(".locations_filter_mobile").addClass("hide");
var b2=$(".search_text_error_message").is(":visible");
av=aP.replace(" ","_");
aw=av.toLowerCase();
$("ul.search_select a").removeClass("active");
$("ul.search_select a").each(function(){if($(this).attr("index")==aP){$(this).addClass("active")
}});
$("."+aw+"_result_count").removeClass("hide");
if(aw!="all_results"&&aw!="products"&&aw!="faqs"){$("a[index='"+aw+"_filter']").removeClass("hide")
}$("."+aw+"_filter_mobile").removeClass("hide");
$("."+aw+"_filter_desktop").removeClass("hide");
$("."+aw+"_filter_container").removeClass("hide");
$(".all_results_no_result.zero_result_found").addClass("hide");
$(".all_results_filter_container").addClass("hide");
$(".search_result_filters_all_results").addClass("hide");
$(".locations_result_count").addClass("hide");
$(".locations_no_result.zero_result_found").addClass("hide");
$(".locations_filter_container").addClass("hide");
$(".location.mobile-filter-button").addClass("hide");
$(".resources_result_count").addClass("hide");
$(".resources_no_result.zero_result_found").addClass("hide");
$(".resources_filter_container").addClass("hide");
$(".resources.mobile-filter-button").addClass("hide");
$(".people_result_count").addClass("hide");
$(".people_no_result.zero_result_found").addClass("hide");
$(".people_filter_container").addClass("hide");
$(".people.mobile-filter-button").addClass("hide");
$(".faqs_result_count").addClass("hide");
$(".faqs_no_result.zero_result_found").addClass("hide");
$(".faqs_filter_container").addClass("hide");
$(".search_result_filters_faqs").addClass("hide");
$(".products_result_count").addClass("hide");
$(".products_no_result.zero_result_found").addClass("hide");
$(".products_filter_container").addClass("hide");
$(".search_result_filters_products").addClass("hide");
$(".search_result_count").removeClass("hide");
if(aw=="faqs"){window.location.hash=aw;
if(bS&&!b2){bS=false;
r()
}if(!bS){$("#loadingMask").fadeOut(100)
}$(".search_result_filters_products").parent().removeClass("author_hide");
$(".search_result_filters_"+aw+"").removeClass("hide");
$(".faqs_result_count").removeClass("hide");
var b0=parseInt($(".faqs_result_count").text());
if(b0==0){$(".faqs_no_result.zero_result_found").removeClass("hide");
$(".faqs_filter_container").addClass("hide");
$(".result_filters_other").addClass("author_hide");
$(".search_result_filters_faqs").addClass("author_hide");
$(".search_result_filters_faqs").addClass("hide")
}else{if(b0>0){$(".faqs_filter_container").removeClass("hide");
$(".faqs_no_result.zero_result_found").addClass("hide");
$(".search_result_filters_faqs").removeClass("author_hide");
$(".search_result_filters_faqs").removeClass("hide");
$(".result_filters_other").removeClass("author_hide")
}}}if(aw=="products"){window.location.hash=aw;
if(bG&&!b2){bG=false;
bu()
}if(!bG){$("#loadingMask").fadeOut(100)
}$(".search_result_filters_products").parent().removeClass("author_hide");
$(".search_result_filters_"+aw+"").removeClass("hide");
$(".products_result_count").removeClass("hide");
var bW=parseInt($(".products_result_count").text());
if(bW==0){$(".products_no_result.zero_result_found").removeClass("hide");
$(".products_filter_container").addClass("hide");
$(".result_filters_other").addClass("author_hide");
$(".search_result_filters_products").addClass("author_hide")
}else{if(bW>0){$(".products_filter_container").removeClass("hide");
$(".products_no_result.zero_result_found").addClass("hide");
$(".search_result_filters_products").removeClass("author_hide");
$(".result_filters_other").removeClass("author_hide")
}}}if(aw=="all_results"){window.location.hash=aw;
if(az&&!b2){az=false;
J()
}if(!az){$("#loadingMask").fadeOut(100)
}$(".search_result_filters_all_results").parent().removeClass("author_hide");
$(".search_result_filters_"+aw+"").removeClass("hide");
$(".search_result_count").addClass("hide");
var bZ=parseInt(aL.length);
if(bZ==0){$(".all_results_no_result.zero_result_found").removeClass("hide");
$(".all_results_filter_container").addClass("hide");
$(".result_filters_other").addClass("author_hide");
$(".search_result_filters_all_results").addClass("author_hide");
$(".search_result_filters_all_results").addClass("hide")
}else{if(bZ>0){$(".all_results_filter_container").removeClass("hide");
$(".all_results_no_result.zero_result_found").addClass("hide");
$(".search_result_filters_all_results").removeClass("author_hide");
$(".search_result_filters_all_results").removeClass("hide");
$(".result_filters_other").removeClass("author_hide")
}}}if(aw=="locations"){window.location.hash=aw;
if(ac&&!b2){ac=false;
bp("10","newSearch")
}if(!ac){$("#loadingMask").fadeOut(100)
}var b1=$(".location-filter-no-result-identifier").val();
if(b1=="NoResultsDuringFilter"){$(".locations_filter_container").removeClass("hide");
$(".locations_result_count").removeClass("hide")
}var b3=$(".locations_filter_container .filter-no-result.zero_result_found").is(":visible");
if(!b3){$(".locations_result_count").removeClass("hide");
var bV=parseInt($(".locations_result_count").text());
if(bV==0){$(".location.mobile-filter-button").addClass("hide");
$(".locations_no_result.zero_result_found").removeClass("hide");
$(".search_result_filters_nonProducts").addClass("hide");
$(".result_filters_other").addClass("author_hide");
$(".locations_filter_container").addClass("hide")
}else{if(bV>0){$(".location.mobile-filter-button").removeClass("hide");
$(".locations_filter_container").removeClass("hide");
$(".search_result_filters_nonProducts").removeClass("hide");
$(".result_filters_other").removeClass("author_hide");
$(".locations_no_result.zero_result_found").addClass("hide")
}}}}if(aw=="resources"){window.location.hash=aw;
if(Y&&!b2){Y=false;
bH()
}if(!Y){$("#loadingMask").fadeOut(100)
}var b1=$(".resources-filter-no-result-identifier").val();
if(b1=="NoResultsDuringFilter"){$(".resources_filter_container").removeClass("hide");
$(".resources_result_count").removeClass("hide")
}var b3=$(".resources_filter_container .filter-no-result.zero_result_found").is(":visible");
if(!b3){$(".resources_result_count").removeClass("hide");
var bY=parseInt($(".resources_result_count").text());
if(bY==0){$(".resources.mobile-filter-button").addClass("hide");
$(".resources_no_result.zero_result_found").removeClass("hide");
$(".search_result_filters_nonProducts").addClass("hide");
$(".result_filters_other").addClass("author_hide");
$(".resources_filter_container").addClass("hide")
}else{if(bY>0){$(".resources.mobile-filter-button").removeClass("hide");
$(".resources_filter_container").removeClass("hide");
$(".search_result_filters_nonProducts").removeClass("hide");
$(".result_filters_other").removeClass("author_hide");
$(".resources_no_result.zero_result_found").addClass("hide")
}}}}if(aw=="people"){window.location.hash=aw;
if(bj&&!b2){bj=false;
br("10","newSearch")
}if(!bj){$("#loadingMask").fadeOut(100)
}var b1=$(".people-filter-no-result-identifier").val();
if(b1=="NoResultsDuringFilter"){$(".people_filter_container").removeClass("hide");
$(".people_result_count").removeClass("hide")
}var b3=$(".people_filter_container .filter-no-result.zero_result_found").is(":visible");
if(!b3){$(".people_result_count").removeClass("hide");
var bU=parseInt($(".people_result_count").text());
if(bU==0){$(".people.mobile-filter-button").addClass("hide");
$(".people_no_result.zero_result_found").removeClass("hide");
$(".search_result_filters_nonProducts").addClass("hide");
$(".result_filters_other").addClass("author_hide");
$(".people_filter_container").addClass("hide")
}else{if(bU>0){$(".people.mobile-filter-button").removeClass("hide");
$(".people_filter_container").removeClass("hide");
$(".search_result_filters_nonProducts").removeClass("hide");
$(".result_filters_other").removeClass("author_hide");
$(".people_no_result.zero_result_found").addClass("hide")
}}}}});
searchTxt=$(".search_text_box_reset");
searchTxt.find('[data-sun-type="search-cancel-button"]').click(function(bV){var bU=$(this);
bV.preventDefault(),bU.removeClass("sun-active"),bU.prev("input").val("").focus(),$(".suntrust-autocomplete").empty()
}),searchTxt.find('[type="search"]').keyup(function(){var e=$(this),bU=e.val().length;
bU>0?$currentCancelButton.addClass("sun-active"):$currentCancelButton.removeClass("sun-active")
}),searchTxt.find('[type="search"]').focus(function(){var e=$(this);
$currentCancelButton=e.next('[data-sun-type="search-cancel-button"]')
});
function aG(){$(".search_result_description_details").each(function(){var e=0;
$(this).find(".location_tog .location_show_hide > .clearfix").each(function(){e++
});
if(e>1){$(this).find(".location_tog > a").show()
}else{if(e<=1){$(this).find(".location_tog > a").hide()
}}})
}$(document).on("click",".location_toggle",function(){$(this).next().slideToggle();
if($(this).find("strong").text()==" Show Locations"){$(this).find("strong").text(" Hide Locations");
$(this).find("span").text("-")
}else{if($(this).find("strong").text()==" Hide Locations"){$(this).find("strong").text(" Show Locations");
$(this).find("span").text("+")
}}});
$(document).on("click",".integrated-search .sun-faqs-page-list-item-header",function(){$(this).toggleClass("sun-active");
$(this).next().toggleClass("sun-active")
});
$(document).on("click",".integrated-search .sun-checkbox-input-container",function(){$(this).find("span").toggleClass("sun-checked")
});
$(document).on("click",".search_result_categories .visible-xs a",function(){$(".mobile_filter_search").animate({left:"0px"})
});
$(document).on("click",".search_result_categories .location.mobile-filter-button",function(){ao=false
});
$(document).on("click",".search_result_categories .people.mobile-filter-button",function(){aD=false
});
$(document).on("click",'[data-suntrust-class="suntrust-menu-close"]',function(){$(this).parents(".mobile_filter_search").animate({left:"-320px"})
});
$(document).on("click",".filter_title > a",function(){$(".filter_show_hide").not($(this).parent().next()).slideUp();
$(".filter_title > a span:first-child").not($(this).find("span:first-child")).text("+");
$(".state_city_selectall_clear").not($(this).next()).hide();
$(this).parent().next().slideToggle();
if($(this).find("span:first-child").text()=="-"){$(this).find("span:first-child").text("+")
}else{if($(this).find("span:first-child").text()=="+"){$(this).find("span:first-child").text("-")
}}if($(this).attr("area-filter")){$(this).next().toggle()
}});
$(".search_text_box_reset .suntrust-input-location-button").click(function(e){e.preventDefault();
e.stopImmediatePropagation();
var bU=$(this);
if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function(bV){an(bU,bV)
},function(bV){alert("Geolocation produced and error. Code: "+bV.code+". Message: "+bV.message)
})
}else{alert("Geolocation is not supported by this browser.")
}});
function bg(bV,bX,bU,bW){var bZ=L.latLng(bV,bX);
var e=L.latLng(bU,bW);
var bY=bZ.distanceTo(e).toFixed(0);
if(!bY){bY=0
}else{bY=(Math.round(bY*0.000621371*100)/100)
}return bY
}function bK(){$(".locations_filter_desktop .search_detail_city input, .locations_filter_mobile  .mobile-city input").each(function(bU){$(this).prop("checked",true);
$(this).parent().addClass("sun-checked");
if($(this).parents(".sun-checkbox-input-field").next().hasClass("search_detail_services_level1")){$(this).parents(".sun-checkbox-input-field").next().removeClass("hide")
}});
$(".locations_filter_desktop .search_detail_state input, .locations_filter_mobile .mobile-state input").each(function(bU){$(this).prop("checked",true);
$(this).parent().addClass("sun-checked");
if($(this).parents(".sun-checkbox-input-field").next().hasClass("search_detail_services_level1")){$(this).parents(".sun-checkbox-input-field").next().removeClass("hide")
}});
$(".locations_filter_desktop .search_detail_services_level0 input, .locations_filter_mobile .mobile-services input").each(function(bU){$(this).prop("checked",true);
$(this).parent().addClass("sun-checked");
if($(this).parents(".sun-checkbox-input-field").next().hasClass("search_detail_services_level1")){$(this).parents(".sun-checkbox-input-field").next().removeClass("hide");
$(this).parents(".sun-checkbox-input-field").next().show()
}t.push($(this).val())
});
t=$.unique(t)
}function V(){$(".resources_filter_desktop .resource-type input, .resources_filter_mobile  .resource-type input").each(function(bU){$(this).prop("checked",true);
$(this).parent().addClass("sun-checked");
if($(this).parents(".sun-checkbox-input-field").next().hasClass("search_detail_services_level1")){$(this).parents(".sun-checkbox-input-field").next().show()
}});
$(".resources_filter_desktop .article-type input, .resources_filter_mobile .article-type input").each(function(bU){$(this).prop("checked",true);
$(this).parent().addClass("sun-checked")
})
}function bC(){$(".people_filter_desktop .search_detail_city input, .people_filter_mobile .mobile-city input").each(function(bU){$(this).prop("checked",true);
$(this).parent().addClass("sun-checked")
});
$(".people_filter_desktop .search_detail_state input, .people_filter_mobile .mobile-state input").each(function(bU){$(this).prop("checked",true);
$(this).parent().addClass("sun-checked")
});
$(".people_filter_desktop .search_detail_speciality_level input, .people_filter_mobile .mobile-speciality input").each(function(bU){$(this).prop("checked",true);
$(this).parent().addClass("sun-checked")
})
}function a8(){$(".all_result_show_more_results").removeClass("hide");
var bV=parseInt($(".all_results_filter_container").children().length);
var bU=aL.length;
var e=parseInt($(".all_result_show_more_results a").attr("data-search-visible-items-limit"));
if(bV==bU||bU<=e){$(".all_result_show_more_results").addClass("hide")
}else{$(".all_result_show_more_results").removeClass("hide")
}}function bi(){$(".location_result_show_more_results").removeClass("hide");
var bU=$(".location_mq_results").children().length;
var bW=$(".location_aem_results").children().length;
var bX=parseInt(bU)+parseInt(bW);
var bV=bz.length;
var e=parseInt($(".location_result_show_more_results a").attr("data-search-visible-items-limit"));
if(bX==bV||bV<=e){$(".location_result_show_more_results").addClass("hide")
}else{$(".location_result_show_more_results").removeClass("hide")
}$("div.search_result_description_details:visible:last").css("border-bottom","0px")
}function bt(){$(".resources_result_show_more_results").removeClass("hide");
var bV=$(".resources_filter_container .search_result_content").children().length;
var bW=parseInt(bV);
var bU=H.length;
var e=parseInt($(".resources_result_show_more_results a").attr("data-search-visible-items-limit"));
if(bW==bU||bU<=e){$(".resources_result_show_more_results").addClass("hide")
}else{$(".resources_result_show_more_results").removeClass("hide")
}$("div.search_result_content_data:visible:last").css("border-bottom","0px")
}function bN(){$(".people_result_show_more_results").removeClass("hide");
var bU=$(".people_mq_results").children().length;
var bW=$(".people_aem_results").children().length;
var bX=parseInt(bU)+parseInt(bW);
var bV=n.length;
var e=parseInt($(".people_result_show_more_results a").attr("data-search-visible-items-limit"));
if(bX==bV||bV<=e){$(".people_result_show_more_results").addClass("hide")
}else{$(".people_result_show_more_results").removeClass("hide")
}$("div.search_result_description_details:visible:last").css("border-bottom","0px")
}function B(){aP=$("ul.search_select a.active").attr("index");
av=$("ul.search_select a.active").attr("index");
if(av!=undefined){aw=av.toLowerCase()
}$(".search_result_description .search-results").each(function(){var bU=$(this).find("div.search_result_content_data").length;
var e=parseInt($(".search_result_show_more_results a").attr("data-search-visible-items-limit"));
$(this).find("div.search_result_content_data:lt("+e+")").show();
if(aw=="products"){if(bU<=e){$(this).parents(".search_result_description").find(".search_result_show_more_results").addClass("hide")
}else{$(this).parents(".search_result_description").find(".search_result_show_more_results").removeClass("hide")
}}$("div.search_result_content_data:visible:last").css("border-bottom","0px")
})
}function d(){aP=$("ul.search_select a.active").attr("index");
av=$("ul.search_select a.active").attr("index");
if(av!=undefined){aw=av.toLowerCase()
}$(".search_result_description .search-results").each(function(){var bU=$(this).find("div.sun-faqs-page-list-item").length;
var e=parseInt($(".faq_result_show_more_results a").attr("data-search-visible-items-limit"));
$(this).find("div.sun-faqs-page-list-item:lt("+e+")").show();
if(aw=="faqs"){if(bU<=e){$(this).parents(".search_result_description").find(".faq_result_show_more_results").addClass("hide")
}else{$(this).parents(".search_result_description").find(".faq_result_show_more_results").removeClass("hide")
}}$("div.sun-faqs-page-list-item:visible:last").css("border-bottom","0px")
})
}$(document).on("click",".location_result_show_more_results",function(){$("div.search_result_description_details:visible:last").css("border-bottom","1px solid #cfcfcf");
var bV=bz.length;
bc=bc+parseInt($(".location_result_show_more_results a").attr("data-search-visible-items-limit"));
ay=ay+parseInt($(".location_result_show_more_results a").attr("data-search-visible-items-limit"));
if(ay<bV){ai(bz,"singleDimension","refineResult",ay,bc)
}else{ai(bz,"singleDimension","refineResult",bV,bc)
}var bU=$(".location_mq_results").children().length;
var bW=$(".location_aem_results").children().length;
var bX=parseInt(bU)+parseInt(bW);
var e=parseInt($(".location_result_show_more_results a").attr("data-search-visible-items-limit"));
if(bX==bV||bV<=e){$(".location_result_show_more_results").addClass("hide")
}else{$(".location_result_show_more_results").removeClass("hide")
}$("div.search_result_description_details:visible:last").css("border-bottom","0px")
});
$(document).on("click",".resources_result_show_more_results",function(){$("div.search_result_content_data:visible:last").css("border-bottom","1px solid #cfcfcf");
var bU=H.length;
ah=ah+parseInt($(".resources_result_show_more_results a").attr("data-search-visible-items-limit"));
a2=a2+parseInt($(".resources_result_show_more_results a").attr("data-search-visible-items-limit"));
if(a2<bU){ad(H,"refineResult",a2,ah)
}else{ad(H,"refineResult",bU,ah)
}var bV=$(".resources_filter_container .search_result_content").children().length;
var bW=parseInt(bV);
var e=parseInt($(".resources_result_show_more_results a").attr("data-search-visible-items-limit"));
if(bW==bU||bU<=e){$(".resources_result_show_more_results").addClass("hide")
}else{$(".resources_result_show_more_results").removeClass("hide")
}$("div.search_result_content_data:visible:last").css("border-bottom","0px")
});
$(document).on("click",".people_result_show_more_results",function(){$("div.search_result_description_details:visible:last").css("border-bottom","1px solid #cfcfcf");
var bV=n.length;
O=O+parseInt($(".people_result_show_more_results a").attr("data-search-visible-items-limit"));
aR=aR+parseInt($(".people_result_show_more_results a").attr("data-search-visible-items-limit"));
if(aR<bV){bB(n,"singleDimension","refineResult",aR,O)
}else{bB(n,"singleDimension","refineResult",bV,O)
}var bU=$(".people_mq_results").children().length;
var bW=$(".people_aem_results").children().length;
var bX=parseInt(bU)+parseInt(bW);
var e=parseInt($(".people_result_show_more_results a").attr("data-search-visible-items-limit"));
if(bX==bV||bV<=e){$(".people_result_show_more_results").addClass("hide")
}else{$(".people_result_show_more_results").removeClass("hide")
}$("div.search_result_description_details:visible:last").css("border-bottom","0px")
});
$(document).on("click",".search_result_show_more_results",function(){$("div.search_result_content_data:visible:last").css("border-bottom","1px solid #cfcfcf");
var bU=parseInt($(this).find("a").attr("data-search-visible-items-limit"));
var e=$(this).parent().find(".search-results div.search_result_content_data:visible").length;
var bV=$(this).parent().find(".search-results div.search_result_content_data").length;
e=(e+bU<=bV)?e+bU:bV;
$(this).parent().find(".search-results div.search_result_content_data:lt("+e+")").show();
if(e>=bV){$(this).hide()
}$("div.search_result_content_data:visible:last").css("border-bottom","0px")
});
$(document).on("click",".all_result_show_more_results",function(){h=h+parseInt($(".all_result_show_more_results a").attr("data-search-visible-items-limit"));
p=p+parseInt($(".all_result_show_more_results a").attr("data-search-visible-items-limit"));
var bU=aL.length;
if(p<bU){a4(aL,p,h);
af();
bk()
}else{a4(aL,bU,h);
af();
bk()
}var bV=$(".all_results_filter_container").children().length;
var e=parseInt($(".all_result_show_more_results a").attr("data-search-visible-items-limit"));
if(bV==bU||bU<=e){$(".all_result_show_more_results").addClass("hide")
}else{$(".all_result_show_more_results").removeClass("hide")
}});
$(document).on("click",".faq_result_show_more_results",function(){$("div.sun-faqs-page-list-item:visible:last").css("border-bottom","1px solid #cfcfcf");
var bU=parseInt($(this).find("a").attr("data-search-visible-items-limit"));
var e=$(this).parent().find(".search-results div.sun-faqs-page-list-item:visible").length;
var bV=$(this).parent().find(".search-results div.sun-faqs-page-list-item").length;
e=(e+bU<=bV)?e+bU:bV;
$(this).parent().find(".search-results div.sun-faqs-page-list-item:lt("+e+")").show();
if(e>=bV){$(this).hide()
}$("div.sun-faqs-page-list-item:visible:last").css("border-bottom","0px")
});
function bM(bW){var bV=[];
var bY=[];
var bU=[];
for(var e=0;
e<bW.length;
e++){for(var bX=0;
bX<bW[e].length;
bX++){bV.push(bW[e][bX].loc_detail_page)
}}$.each(bV,function(bZ,b0){if($.inArray(b0,bU)===-1){bU.push(b0)
}});
return bU
}function bk(){$(".search_result_location_branch_hours").each(function(bV){if($(this).find("p").text()=="Closed"){$(this).find("p").css("color","#c94c06");
var bU=$(this).parent().siblings().find(" .search_result_description_detail_addr h5 a").attr("href");
$("<p>(<a href='"+bU+"'>more hours</a>)</p>").insertAfter($(this).find("p"))
}});
$(".search_result_location_drive_thru_hours").each(function(bV){if($(this).find("p").text()=="Closed"){$(this).find("p").css("color","#c94c06");
var bU=$(this).parent().siblings().find(" .search_result_description_detail_addr h5 a").attr("href");
$("<p>(<a href='"+bU+"'>more hours</a>)</p>").insertAfter($(this).find("p"))
}});
$(".search_result_location_teller_connect_hours").each(function(bV){if($(this).find("p").text()=="Closed"){$(this).find("p").css("color","#c94c06");
var bU=$(this).parent().siblings().find(" .search_result_description_detail_addr h5 a").attr("href");
$("<p>(<a href='"+bU+"'>more hours</a>)</p>").insertAfter($(this).find("p"))
}})
}function bn(){$(".search-results .search_result_location_direction").each(function(){var e=$(this).find(".search_result_location_direction_details a").attr("href");
if(e.indexOf("undefined")>0){$(this).find(".search_result_location_direction_details a").attr("href",e.split("?")[0])
}})
}$(".locations_filter_mobile .mobile-radius-filter #location-radius-mobile").on("change",function(bU){ao=true
});
$(".people_filter_mobile .mobile-radius-filter #people-radius-mobile").on("change",function(bU){aD=true
});
function P(){var e={};
$(".locations_filter_container .search_result_description .search-results .address.search_result_description_detail_addr").each(function(){var bU=$(this).find("a").attr("href");
if(e[bU]){$(this).parent().parent().remove()
}else{e[bU]=true
}})
}function af(){$(".locations_filter_container .search_result_location_branch_hours, .all_results_filter_container .search_result_location_branch_hours").each(function(bU){if($(this).find("p").text()=="AlwaysClosed"){$(this).remove()
}});
$(".locations_filter_container .search_result_location_drive_thru_hours, .all_results_filter_container .search_result_location_drive_thru_hours").each(function(bU){if($(this).find("p").text()=="AlwaysClosed"){$(this).remove()
}});
$(".locations_filter_container .search_result_location_teller_connect_hours, .all_results_filter_container .search_result_location_teller_connect_hours").each(function(bU){if($(this).find("p").text()=="AlwaysClosed"){$(this).remove()
}});
$(".locations_filter_container .search_result_location_phone, .people_filter_container .search_result_location_phone, .all_results_filter_container .search_result_location_phone").each(function(bU){if($(this).find("a").text()==""||$(this).find("a").text()==undefined||$(this).find("a").text()=="undefined"){$(this).remove()
}});
$(".locations_filter_container .search_result_location_fax, .all_results_filter_container .search_result_location_fax").each(function(bU){if($(this).find("p").text()==""||$(this).find("p").text()==undefined||$(this).find("p").text()=="undefined"){$(this).remove()
}});
$(".locations_filter_desktop .search_detail_state_city_select input").each(function(bU){if($(this).val()==""||$(this).val()=="undefined"||$(this).val()==undefined){$(this).parent().parent().parent().remove()
}});
$(".locations_filter_desktop .search_detail_services_level0 input").each(function(bU){if($(this).val()==""||$(this).val()=="undefined"||$(this).val()==undefined){$(this).parent().parent().parent().remove()
}});
$(".locations_filter_mobile .mobile-city input").each(function(bU){if($(this).val()==""||$(this).val()=="undefined"||$(this).val()==undefined){$(this).parent().parent().parent().remove()
}});
$(".locations_filter_mobile .mobile-state input").each(function(bU){if($(this).val()==""||$(this).val()=="undefined"||$(this).val()==undefined){$(this).parent().parent().parent().remove()
}});
$(".locations_filter_mobile .mobile-services input").each(function(bU){if($(this).val()==""||$(this).val()=="undefined"||$(this).val()==undefined){$(this).parent().parent().parent().remove()
}});
$(".people_filter_desktop .search_detail_state_city_select input").each(function(bU){if($(this).val()==""||$(this).val()=="undefined"||$(this).val()==undefined){$(this).parent().parent().parent().remove()
}});
$(".people_filter_desktop .search_detail_speciality_level input").each(function(bU){if($(this).val()==""||$(this).val()=="undefined"||$(this).val()==undefined){$(this).parent().parent().parent().remove()
}});
$(".people_filter_mobile .mobile-city input").each(function(bU){if($(this).val()==""||$(this).val()=="undefined"||$(this).val()==undefined){$(this).parent().parent().parent().remove()
}});
$(".people_filter_mobile .mobile-state input").each(function(bU){if($(this).val()==""||$(this).val()=="undefined"||$(this).val()==undefined){$(this).parent().parent().parent().remove()
}});
$(".people_filter_mobile .mobile-speciality input").each(function(bU){if($(this).val()==""||$(this).val()=="undefined"||$(this).val()==undefined){$(this).parent().parent().parent().remove()
}})
}function ai(ca,b4,b2,b7,cc){var b3=[];
var b5=[];
var b8=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
if(ca.length<b7){b7=ca.length
}for(var b9=0;
b9<ca.length;
b9++){if(ca[b9].loc_result_type=="AEM"){b3.push(ca[b9])
}else{if(ca[b9].loc_result_type=="MQ"){b5.push(ca[b9])
}}}if(ca.length>0){if(o!=undefined&&m!=undefined){b3.sort(function(ce,cd){if(ce.loc_miles_away<cd.loc_miles_away){return -1
}else{if(ce.loc_miles_away>cd.loc_miles_away){return 1
}}return 0
});
b5.sort(function(ce,cd){if(ce.loc_miles_away<cd.loc_miles_away){return -1
}else{if(ce.loc_miles_away>cd.loc_miles_away){return 1
}}return 0
})
}else{b3.sort(function(ce,cd){if(ce.loc_locationname<cd.loc_locationname){return -1
}else{if(ce.loc_locationname>cd.loc_locationname){return 1
}}return 0
});
b5.sort(function(ce,cd){if(ce.loc_locationname<cd.loc_locationname){return -1
}else{if(ce.loc_locationname>cd.loc_locationname){return 1
}}return 0
})
}for(var b9=0;
b9<b3.length;
b9++){b5.push(b3[b9])
}if(o!=undefined&&m!=undefined){if(b4=="singleDimension"){for(var b9=cc;
b9<b7;
b9++){var b6=b5[b9].loc_address+", "+b5[b9].loc_city+", "+b5[b9].loc_state_tag.toUpperCase()+", "+b5[b9].loc_zipcode;
if($(window).width()<767){if(/Android/i.test(navigator.userAgent)){var bZ="https://www.google.com/maps/dir/?api=1&origin="+aj+"&destination="+b6+"&mode=d"
}else{if(/iPhone/i.test(navigator.userAgent)){var bZ="http://maps.apple.com?saddr="+aj+"&daddr="+b6+"&directionsmode=transit"
}else{var bZ=b5[b9].loc_detail_page+"?start="+aj
}}}if(b5[b9].loc_result_type=="AEM"){$(".search_result_description .search-results .locations_filter_container .location_aem_results").append("<div class='search_result_description_details clearfix'><div class='search_result_location_name'><div class='address search_result_description_detail_addr'><h5><strong><a target='_self' href='"+b5[b9].loc_detail_page+"?location="+aj+"'>"+b5[b9].loc_locationname+"</a></strong></h5><p>"+b5[b9].loc_address+"</p><p class='city-state-zipcode'><span class='city'>"+b5[b9].loc_city+", </span><span class='state'>"+b5[b9].loc_state_tag.toUpperCase()+" </span><span class='zipcode'> "+b5[b9].loc_zipcode+"</span></p></div><div class='search_result_description_detail_addr'><h5><strong>Miles</strong></h5><div class='addressDistance' latitude='"+b5[b9].loc_latitude+"' longitude='"+b5[b9].loc_longitude+"'><div class='miles-away'>"+b5[b9].loc_miles_away+"</div></div></div><div class='search_result_location_contact visible-xs'><div class='search_result_location_phone clearfix'><div class='search_result_location_phone_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon'/></div><div class='search_result_location_phone_details'><h5><strong>Phone</strong></h5><p><a href='tel:"+b5[b9].loc_phone+"'>"+b5[b9].loc_phone+"</a></p></div></div><div class='search_result_location_fax clearfix'><div class='search_result_location_fax_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon faxing'/></div><div class='search_result_location_fax_details'><h5><strong>Fax</strong></h5><p>"+b5[b9].loc_fax+"</p></div></div><div class='search_result_location_direction clearfix'><div class='search_result_location_direction_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_location.png' alt='Map pin drop icon'/></div><div class='search_result_location_direction_details'><p><a target='_blank' class='get-direction-link-mobile' data-mobile-link='"+bZ+"' href='"+bZ+"'>Get Directions</a></p></div></div></div><div class='search_result_description_detail_service'><h5><strong>Services</strong></h5><div>"+b5[b9].loc_services+"</div></div></div><div class='search_result_location_working_hours'><div class='search_result_location_branch_hours'><h5><strong>Branch Hours</strong></h5><p>"+b5[b9].loc_branch_hours+"</p></div><div class='search_result_location_drive_thru_hours'><h5><strong>Drive-Thru Hours</strong></h5><p>"+b5[b9].loc_drive_in_hours+"</p></div><div class='search_result_location_teller_connect_hours'><h5><strong>Teller Connect Hours</strong></h5><p>"+b5[b9].loc_teller_hours+"</p></div></div><div class='search_result_location_contact hidden-xs'><div class='search_result_location_phone clearfix'><div class='search_result_location_phone_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon'/></div><div class='search_result_location_phone_details'><h5><strong>Phone</strong></h5><p><a href='tel:"+b5[b9].loc_phone+"'>"+b5[b9].loc_phone+"</a></p></div></div><div class='search_result_location_fax clearfix'><div class='search_result_location_fax_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon faxing'/></div><div class='search_result_location_fax_details'><h5><strong>Fax</strong></h5><p>"+b5[b9].loc_fax+"</p></div></div><div class='search_result_location_direction clearfix'><div class='search_result_location_direction_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_location.png' alt='Map pin drop icon'/></div><div class='search_result_location_direction_details'><p><a target='_blank' href='"+b5[b9].loc_detail_page+"?start="+aj+"'>Get Directions</a></p></div></div></div></div>")
}else{if(b5[b9].loc_result_type=="MQ"){$(".search_result_description .search-results .locations_filter_container .location_mq_results").append("<div class='search_result_description_details clearfix'><div class='search_result_location_name'><div class='address search_result_description_detail_addr'><h5><strong><a target='_self' href='"+b5[b9].loc_detail_page+"?location="+aj+"'>"+b5[b9].loc_locationname+"</a></strong></h5><p>"+b5[b9].loc_address+"</p><p class='city-state-zipcode'><span class='city'>"+b5[b9].loc_city+", </span><span class='state'>"+b5[b9].loc_state_tag.toUpperCase()+" </span><span class='zipcode'> "+b5[b9].loc_zipcode+"</span></p></div><div class='search_result_description_detail_addr'><h5><strong>Miles</strong></h5><div class='addressDistance' latitude='"+b5[b9].loc_latitude+"' longitude='"+b5[b9].loc_longitude+"'><div class='miles-away'>"+b5[b9].loc_miles_away+"</div></div></div><div class='search_result_location_contact visible-xs'><div class='search_result_location_phone clearfix'><div class='search_result_location_phone_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon'/></div><div class='search_result_location_phone_details'><h5><strong>Phone</strong></h5><p><a href='tel:"+b5[b9].loc_phone+"'>"+b5[b9].loc_phone+"</a></p></div></div><div class='search_result_location_fax clearfix'><div class='search_result_location_fax_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon faxing'/></div><div class='search_result_location_fax_details'><h5><strong>Fax</strong></h5><p>"+b5[b9].loc_fax+"</p></div></div><div class='search_result_location_direction clearfix'><div class='search_result_location_direction_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_location.png' alt='Map pin drop icon'/></div><div class='search_result_location_direction_details'><p><a target='_blank' class='get-direction-link-mobile' data-mobile-link='"+bZ+"' href='"+bZ+"'>Get Directions</a></p></div></div></div><div class='search_result_description_detail_service'><h5><strong>Services</strong></h5><div>"+b5[b9].loc_services+"</div></div></div><div class='search_result_location_working_hours'><div class='search_result_location_branch_hours'><h5><strong>Branch Hours</strong></h5><p>"+b5[b9].loc_branch_hours+"</p></div><div class='search_result_location_drive_thru_hours'><h5><strong>Drive-Thru Hours</strong></h5><p>"+b5[b9].loc_drive_in_hours+"</p></div><div class='search_result_location_teller_connect_hours'><h5><strong>Teller Connect Hours</strong></h5><p>"+b5[b9].loc_teller_hours+"</p></div></div><div class='search_result_location_contact hidden-xs'><div class='search_result_location_phone clearfix'><div class='search_result_location_phone_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon'/></div><div class='search_result_location_phone_details'><h5><strong>Phone</strong></h5><p><a href='tel:"+b5[b9].loc_phone+"'>"+b5[b9].loc_phone+"</a></p></div></div><div class='search_result_location_fax clearfix'><div class='search_result_location_fax_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon faxing'/></div><div class='search_result_location_fax_details'><h5><strong>Fax</strong></h5><p>"+b5[b9].loc_fax+"</p></div></div><div class='search_result_location_direction clearfix'><div class='search_result_location_direction_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_location.png' alt='Map pin drop icon'/></div><div class='search_result_location_direction_details'><p><a target='_blank' href='"+b5[b9].loc_detail_page+"?start="+aj+"'>Get Directions</a></p></div></div></div></div>")
}}}}}else{if(b4=="singleDimension"){for(var b9=cc;
b9<b7;
b9++){if(b5[b9].loc_result_type=="AEM"){$(".search_result_description .search-results .locations_filter_container .location_aem_results").append("<div class='search_result_description_details clearfix'><div class='search_result_location_name'><div class='address search_result_description_detail_addr'><h5><strong><a target='_self' href='"+b5[b9].loc_detail_page+"'>"+b5[b9].loc_locationname+"</a></strong></h5><p>"+b5[b9].loc_address+"</p><p class='city-state-zipcode'><span class='city'>"+b5[b9].loc_city+", </span><span class='state'>"+b5[b9].loc_state_tag.toUpperCase()+" </span><span class='zipcode'> "+b5[b9].loc_zipcode+"</span></p></div><div class='search_result_description_detail_addr'><div class='addressDistance' latitude='"+b5[b9].loc_latitude+"' longitude='"+b5[b9].loc_longitude+"'></div></div><div class='search_result_location_contact visible-xs'><div class='search_result_location_phone clearfix'><div class='search_result_location_phone_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon'/></div><div class='search_result_location_phone_details'><h5><strong>Phone</strong></h5><p><a href='tel:"+b5[b9].loc_phone+"'>"+b5[b9].loc_phone+"</a></p></div></div><div class='search_result_location_fax clearfix'><div class='search_result_location_fax_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon faxing'/></div><div class='search_result_location_fax_details'><h5><strong>Fax</strong></h5><p>"+b5[b9].loc_fax+"</p></div></div><div class='search_result_location_direction clearfix'><div class='search_result_location_direction_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_location.png' alt='Map pin drop icon'/></div><div class='search_result_location_direction_details'><p><a target='_blank' href='"+b5[b9].loc_detail_page+"'>Get Directions</a></p></div></div></div><div class='search_result_description_detail_service'><h5><strong>Services</strong></h5><div>"+b5[b9].loc_services+"</div></div></div><div class='search_result_location_working_hours'><div class='search_result_location_branch_hours'><h5><strong>Branch Hours</strong></h5><p>"+b5[b9].loc_branch_hours+"</p></div><div class='search_result_location_drive_thru_hours'><h5><strong>Drive-Thru Hours</strong></h5><p>"+b5[b9].loc_drive_in_hours+"</p></div><div class='search_result_location_teller_connect_hours'><h5><strong>Teller Connect Hours</strong></h5><p>"+b5[b9].loc_teller_hours+"</p></div></div><div class='search_result_location_contact hidden-xs'><div class='search_result_location_phone clearfix'><div class='search_result_location_phone_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon'/></div><div class='search_result_location_phone_details'><h5><strong>Phone</strong></h5><p><a href='tel:"+b5[b9].loc_phone+"'>"+b5[b9].loc_phone+"</a></p></div></div><div class='search_result_location_fax clearfix'><div class='search_result_location_fax_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon faxing'/></div><div class='search_result_location_fax_details'><h5><strong>Fax</strong></h5><p>"+b5[b9].loc_fax+"</p></div></div><div class='search_result_location_direction clearfix'><div class='search_result_location_direction_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_location.png' alt='Map pin drop icon'/></div><div class='search_result_location_direction_details'><p><a target='_blank' href='"+b5[b9].loc_detail_page+"'>Get Directions</a></p></div></div></div></div>")
}else{if(b5[b9].loc_result_type=="MQ"){$(".search_result_description .search-results .locations_filter_container .location_mq_results").append("<div class='search_result_description_details clearfix'><div class='search_result_location_name'><div class='address search_result_description_detail_addr'><h5><strong><a target='_self' href='"+b5[b9].loc_detail_page+"'>"+b5[b9].loc_locationname+"</a></strong></h5><p>"+b5[b9].loc_address+"</p><p class='city-state-zipcode'><span class='city'>"+b5[b9].loc_city+", </span><span class='state'>"+b5[b9].loc_state_tag.toUpperCase()+" </span><span class='zipcode'> "+b5[b9].loc_zipcode+"</span></p></div><div class='search_result_description_detail_addr'><div class='addressDistance' latitude='"+b5[b9].loc_latitude+"' longitude='"+b5[b9].loc_longitude+"'></div></div><div class='search_result_location_contact visible-xs'><div class='search_result_location_phone clearfix'><div class='search_result_location_phone_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon'/></div><div class='search_result_location_phone_details'><h5><strong>Phone</strong></h5><p><a href='tel:"+b5[b9].loc_phone+"'>"+b5[b9].loc_phone+"</a></p></div></div><div class='search_result_location_fax clearfix'><div class='search_result_location_fax_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon faxing'/></div><div class='search_result_location_fax_details'><h5><strong>Fax</strong></h5><p>"+b5[b9].loc_fax+"</p></div></div><div class='search_result_location_direction clearfix'><div class='search_result_location_direction_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_location.png' alt='Map pin drop icon'/></div><div class='search_result_location_direction_details'><p><a target='_blank' href='"+b5[b9].loc_detail_page+"'>Get Directions</a></p></div></div></div><div class='search_result_description_detail_service'><h5><strong>Services</strong></h5><div>"+b5[b9].loc_services+"</div></div></div><div class='search_result_location_working_hours'><div class='search_result_location_branch_hours'><h5><strong>Branch Hours</strong></h5><p>"+b5[b9].loc_branch_hours+"</p></div><div class='search_result_location_drive_thru_hours'><h5><strong>Drive-Thru Hours</strong></h5><p>"+b5[b9].loc_drive_in_hours+"</p></div><div class='search_result_location_teller_connect_hours'><h5><strong>Teller Connect Hours</strong></h5><p>"+b5[b9].loc_teller_hours+"</p></div></div><div class='search_result_location_contact hidden-xs'><div class='search_result_location_phone clearfix'><div class='search_result_location_phone_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon'/></div><div class='search_result_location_phone_details'><h5><strong>Phone</strong></h5><p><a href='tel:"+b5[b9].loc_phone+"'>"+b5[b9].loc_phone+"</a></p></div></div><div class='search_result_location_fax clearfix'><div class='search_result_location_fax_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon faxing'/></div><div class='search_result_location_fax_details'><h5><strong>Fax</strong></h5><p>"+b5[b9].loc_fax+"</p></div></div><div class='search_result_location_direction clearfix'><div class='search_result_location_direction_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_location.png' alt='Map pin drop icon'/></div><div class='search_result_location_direction_details'><p><a target='_blank' href='"+b5[b9].loc_detail_page+"'>Get Directions</a></p></div></div></div></div>")
}}}}}}var bY=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
af();
P();
var bV=$(".search_result_description .search-results .locations_filter_container .location_mq_results .search_result_description_details").length;
var cb=$(".search_result_description .search-results .locations_filter_container .location_aem_results .search_result_description_details").length;
var b1=bV+cb;
$(".location-filter-no-result-identifier").remove();
if(b1!=0){if(o!=undefined&&m!=undefined){}else{if(o==undefined&&m==undefined){bn()
}}bs();
var bX=$("ul.search_select a.active").attr("index");
var e=bX.replace(" ","_");
var bU=e.toLowerCase();
if(bU=="locations"){$(".faqs_result_count").addClass("hide");
$(".products_result_count").addClass("hide");
$("."+bU+"_result_count").removeClass("hide");
$(".search_result_filters_nonProducts").removeClass("hide");
$("."+bU+"_filter_desktop").removeClass("hide");
$("."+bU+"_filter_container").removeClass("hide");
$("."+bU+"_filter_mobile").removeClass("hide")
}$(".search_result_description .search-results .locations_filter_container .location_mq_results").show();
$(".search_result_description .search-results .locations_filter_container .location_aem_results").show();
bk();
if(window.innerWidth>=768){bi()
}}else{if(b2=="newSearch"&&aw=="locations"){aT();
bs();
var bX=$("ul.search_select a.active").attr("index");
var e=bX.replace(" ","_");
var bU=e.toLowerCase();
if(bU="locations"){$(".faqs_result_count").addClass("hide");
$(".products_result_count").addClass("hide");
$("."+bU+"_no_result").removeClass("hide");
$("."+bU+"_result_count").removeClass("hide")
}}else{if(b2=="refineResult"){$(".search_result_description .search-results .locations_filter_container").append("<div class='filter-no-result zero_result_found'> <div class='zero_result_text'>"+aa+"</div></div>");
$(".search_result_description .search-results .locations_filter_container .filter-no-result").append('<input class="location-filter-no-result-identifier" type="hidden" value="NoResultsDuringFilter">');
bi()
}}}$(".location-search .search_result_count").removeClass("hide");
var bV=$(".search_result_description .search-results .locations_filter_container .location_mq_results .search_result_description_details").length;
var cb=$(".search_result_description .search-results .locations_filter_container .location_aem_results .search_result_description_details").length;
var bW=ca.length;
aB=bW;
$(".search_result_count .locations_result_count").text(bW);
if(b2=="newSearch"){ae()
}$("#loadingMask").fadeOut(100);
var b0=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
}function bB(e,b4,b2,ca,b8){var b3=[];
var b5=[];
var b7=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
if(e.length<ca){ca=e.length
}for(var b9=0;
b9<e.length;
b9++){if(e[b9].people_result_type=="AEM"){b3.push(e[b9])
}else{if(e[b9].people_result_type=="MQ"){b5.push(e[b9])
}}}if(e.length>0){if(o!=undefined&&m!=undefined){b3.sort(function(cd,cc){if(cd.people_miles_away<cc.people_miles_away){return -1
}else{if(cd.people_miles_away>cc.people_miles_away){return 1
}}return 0
});
b5.sort(function(cd,cc){if(cd.people_miles_away<cc.people_miles_away){return -1
}else{if(cd.people_miles_away>cc.people_miles_away){return 1
}}return 0
})
}else{b3.sort(function(cd,cc){if(cd.advisor_firstname<cc.advisor_firstname){return -1
}else{if(cd.advisor_firstname>cc.advisor_firstname){return 1
}}return 0
});
b5.sort(function(cd,cc){if(cd.advisor_firstname<cc.advisor_firstname){return -1
}else{if(cd.advisor_firstname>cc.advisor_firstname){return 1
}}return 0
})
}for(var b9=0;
b9<b3.length;
b9++){b5.push(b3[b9])
}if(o!=undefined&&m!=undefined){if(b4=="singleDimension"){for(var b9=b8;
b9<ca;
b9++){if(b5[b9].people_result_type=="AEM"){ak(b5[b9].advisor_profilePage,"AEM")
}else{if(b5[b9].people_result_type=="MQ"){ak(b5[b9].advisor_profilePage,"MQ")
}}}}else{if(b4=="associative"){for(var b9=b8;
b9<e.length;
b9++){for(var b6=0;
b6<e[b9].length;
b6++){if(e[b9][b6].people_result_type=="AEM"){ak(e[b9][b6].advisor_profilePage,"AEM")
}else{if(e[b9][b6].people_result_type=="MQ"){ak(e[b9][b6].advisor_profilePage,"MQ")
}}}}}}}else{if(b4=="singleDimension"){for(var b9=b8;
b9<ca;
b9++){if(b5[b9].people_result_type=="AEM"){ak(b5[b9].advisor_profilePage,"AEM")
}else{if(b5[b9].people_result_type=="MQ"){ak(b5[b9].advisor_profilePage,"MQ")
}}}}else{if(b4=="associative"){for(var b9=b8;
b9<e.length;
b9++){for(var b6=0;
b6<e[b9].length;
b6++){if(e[b9][b6].people_result_type=="AEM"){ak(e[b9][b6].advisor_profilePage,"AEM")
}else{if(e[b9][b6].people_result_type=="MQ"){ak(e[b9][b6].advisor_profilePage,"MQ")
}}}}}}}}var bZ=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
af();
var bW=$(".search_result_description .search-results .people_filter_container .people_mq_results .search_result_description_details").length;
var cb=$(".search_result_description .search-results .people_filter_container .people_aem_results .search_result_description_details").length;
var b1=bW+cb;
$(".people-filter-no-result-identifier").remove();
if(b1!=0){if(o!=undefined&&m!=undefined){}else{if(o==undefined&&m==undefined){bn()
}}bs();
var bY=$("ul.search_select a.active").attr("index");
var bU=bY.replace(" ","_");
var bV=bU.toLowerCase();
if(bV=="locations"){$(".faqs_result_count").addClass("hide");
$(".products_result_count").addClass("hide");
$("."+bV+"_result_count").removeClass("hide");
$(".search_result_filters_nonProducts").removeClass("hide");
$("."+bV+"_filter_desktop").removeClass("hide");
$("."+bV+"_filter_container").removeClass("hide");
$("."+bV+"_filter_mobile").removeClass("hide")
}$(".search_result_description .search-results .people_filter_container .people_mq_results").show();
$(".search_result_description .search-results .people_filter_container .people_aem_results").show();
bk();
if(window.innerWidth>=768){bN()
}}else{if(b2=="newSearch"&&aw=="locations"){aT();
bs();
var bY=$("ul.search_select a.active").attr("index");
var bU=bY.replace(" ","_");
var bV=bU.toLowerCase();
if(bV="locations"){$(".faqs_result_count").addClass("hide");
$(".products_result_count").addClass("hide");
$("."+bV+"_no_result").removeClass("hide");
$("."+bV+"_result_count").removeClass("hide")
}}else{if(b2=="refineResult"){$(".search_result_description .search-results .people_filter_container").append("<div class='filter-no-result zero_result_found'> <div class='zero_result_text'>"+bJ+"</div></div>");
$(".search_result_description .search-results .people_filter_container .filter-no-result").append('<input class="people-filter-no-result-identifier" type="hidden" value="NoResultsDuringFilter">');
bN()
}}}$(".location-search .search_result_count").removeClass("hide");
var bW=$(".search_result_description .search-results .people_filter_container .people_mq_results .search_result_description_details").length;
var cb=$(".search_result_description .search-results .people_filter_container .people_aem_results .search_result_description_details").length;
var bX=e.length;
aA=bX;
$(".search_result_count .people_result_count").text(bX);
if(b2=="newSearch"){k()
}$("#loadingMask").fadeOut(100);
var b0=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
}function ak(bW,bU){filtered_jsonObject=$.grep(aU,function(bY){return bY.advisor_profilePage===bW
});
if(filtered_jsonObject!=""&&filtered_jsonObject!=undefined){var bV=$("#hiddenTemplate").clone();
if(o!=undefined&&m!=undefined){bV.find(".profilePage").attr("href",filtered_jsonObject[0].advisor_profilePage+"?start="+aj)
}else{bV.find(".profilePage").attr("href",filtered_jsonObject[0].advisor_profilePage)
}if(filtered_jsonObject[0].advisor_pictureFilePath!=undefined&&filtered_jsonObject[0].advisor_pictureFilePath!=""){bV.find(".profileImage").attr("src",filtered_jsonObject[0].advisor_pictureFilePath)
}else{bV.find(".search_result_description_detail_img").remove()
}bV.find(".profilePage").attr("title",filtered_jsonObject[0].advisor_firstname+" "+filtered_jsonObject[0].advisor_lastname+", "+filtered_jsonObject[0].advisor_title1);
var e="";
var bX=filtered_jsonObject[0].advisor_designationcodes;
if(bX!=""&&bX!=undefined&&bX!=null){e=", "+bX
}bV.find(".advisorName").html(filtered_jsonObject[0].advisor_firstname+" "+filtered_jsonObject[0].advisor_lastname+e+", "+filtered_jsonObject[0].advisor_title1);
bV.find(".advisorTitle").html(filtered_jsonObject[0].advisor_title2);
bV.find(".telNo").attr("href","tel:"+filtered_jsonObject[0].advisor_phone).html(filtered_jsonObject[0].advisor_phone);
bV.find(".mailId").attr("href","mailto:"+filtered_jsonObject[0].advisor_emailaddress).html(filtered_jsonObject[0].advisor_emailaddress);
bV.find(".contactFormId").attr("href","/dotcom/external?clickedUrl="+filtered_jsonObject[0].advisor_onlineContactFormUrl);
filtered_jsonObject[0].advisor_addressListArray.addressListArray.sort(function(bZ,bY){if(bZ.people_eachloc_miles_away<bY.people_eachloc_miles_away){return -1
}else{if(bZ.people_eachloc_miles_away>bY.people_eachloc_miles_away){return 1
}}return 0
});
$.each(filtered_jsonObject[0].advisor_addressListArray.addressListArray,function(bZ,b1){var b0='<div class="clearfix"><div class="location_show_hide_addr">';
b0+="<p>"+b1.adv_address+"</p>";
b0+='<p><span class="adv-city">'+b1.adv_city+"</span>, "+b1.adv_state+"\n"+b1.adv_zipcode+"</p>";
b0+='<div class="addressDistance" latitude="'+b1.adv_latitude+'" longitude="'+b1.adv_longitude+'" />';
if(b1.people_eachloc_miles_away!=undefined){b0+=b1.people_eachloc_miles_away+" Miles</div>"
}else{b0+="</div>"
}var bY="";
if(b1.adv_address!=""&&b1.adv_address!=undefined){bY=b1.adv_address
}if(b1.adv_city!=""&&b1.adv_city!=undefined){if(bY!=""){bY=bY+" "+b1.adv_city
}else{bY=b1.adv_city
}}if(b1.adv_state!=""&&b1.adv_state!=undefined){if(bY!=""){bY=bY+", "+b1.adv_state
}else{bY=b1.adv_state
}}if(b1.adv_zipcode!=""&&b1.adv_zipcode!=undefined){if(bY!=""){bY=bY+" "+b1.adv_zipcode
}else{bY=b1.adv_zipcode
}}if(o!=undefined&&m!=undefined){if($(window).width()<767){if(/Android/i.test(navigator.userAgent)){b0+='<div class="loction_show_hide_direction clearfix"><div class="loction_show_hide_direction_icon"><img src="/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_location.png" alt="Map pin drop icon"></div><div class="loction_show_hide_direction_details"><p><a target="_blank" class="get-direction-link-mobile" data-mobile-link="https://www.google.com/maps/dir/?api=1&origin='+aj+"&destination="+bY+'&mode=d"  href="https://www.google.com/maps/dir/?api=1';
b0+="&origin="+aj+"&destination="+bY+'&mode=d">';
b0+="Get Directions</a>";
b0+="</p></div></div></div>"
}else{if(/iPhone/i.test(navigator.userAgent)){b0+='<div class="loction_show_hide_direction clearfix"><div class="loction_show_hide_direction_icon"><img src="/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_location.png" alt="Map pin drop icon"></div><div class="loction_show_hide_direction_details"><p><a target="_blank" class="get-direction-link-mobile" data-mobile-link="http://maps.apple.com?saddr='+aj+"&daddr="+bY+'&mode=d" href="http://maps.apple.com';
b0+="?saddr="+aj+"&daddr="+bY+'&directionsmode=transit">';
b0+="Get Directions</a>";
b0+="</p></div></div></div>"
}else{var b2=filtered_jsonObject[0].advisor_profilePage+"?start="+aj+"&daddr="+bY
}}}else{b0+='<div class="loction_show_hide_direction clearfix"><div class="loction_show_hide_direction_icon"><img src="/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_location.png" alt="Map pin drop icon"></div><div class="loction_show_hide_direction_details"><p><a target="_blank" href="'+filtered_jsonObject[0].advisor_profilePage;
b0+="?start="+aj+"&destination="+bY+'">';
b0+="Get Directions</a>";
b0+="</p></div></div></div>"
}}bV.find(".locationResults").append(b0)
});
bV.removeAttr("id").addClass("search_result_description_details clearfix").show();
if(filtered_jsonObject[0].people_result_type=="AEM"){$("#searchResult .people_aem_results").append(bV)
}else{if(filtered_jsonObject[0].people_result_type=="MQ"){$("#searchResult .people_mq_results").append(bV)
}}}E()
}function E(){$(".search_result_description_details").each(function(){var e=0;
$(this).find(".peopleSearch_togSec .location_show_hide > .clearfix").each(function(){e++
});
if(e>1){$(this).find(".peopleSearch_togSec > a").show()
}else{if(e<=1){$(this).find(".peopleSearch_togSec > a").hide();
$(this).find(".peopleSearch_togSec > .location_show_hide").show()
}}})
}function F(){$(".search_result_description_details").each(function(){var e=0;
$(this).find(".location_tog .location_show_hide > .clearfix").each(function(){e++
});
if(e>1){$(this).find(".location_tog > a").show()
}else{if(e<=1){$(this).find(".location_tog > a").hide();
$(this).find(".location_tog > .location_show_hide").show()
}}})
}function f(bV,e,bW){var bU=new RegExp("([?&])"+e+"=.*?(&|#|$)","i");
if(bW===undefined){if(bV.match(bU)){return bV.replace(bU,"$1$2")
}else{return bV
}}else{if(bV.match(bU)){return bV.replace(bU,"$1"+e+"="+bW+"$2")
}else{var bY="";
if(bV.indexOf("#")!==-1){bY=bV.replace(/.*#/,"#");
bV=bV.replace(/#.*/,"")
}var bX=bV.indexOf("?")!==-1?"&":"?";
return bV+bX+e+"="+bW+bY
}}}function z(bU,e){if(!e){e=window.location.href
}var bW=e.split("#");
var bV=new RegExp("([?&])"+bU+"=.*?(&|#|$)","i");
if(bW[0].match(bV)){e=bW[0].replace(bV,"$1");
e=e.replace(/([?&])$/,"");
if(typeof bW[1]!=="undefined"&&bW[1]!==null){e+="#"+bW[1]
}}return e
}$(".location-search .suntrust-orange-button.search-button").on("click",function(b1){bc=0;
h=0;
O=0;
ah=0;
ay=parseInt($(".location_result_show_more_results a").attr("data-search-visible-items-limit"));
aR=parseInt($(".people_result_show_more_results a").attr("data-search-visible-items-limit"));
p=parseInt($(".all_result_show_more_results a").attr("data-search-visible-items-limit"));
NumberOfResultToBeDisplayedResources=parseInt($(".resources_show_more_results a").attr("data-search-visible-items-limit"));
ac=true;
bj=true;
bS=true;
bG=true;
az=true;
Y=true;
aj=$(".search_text_box input#search-input").val().trim();
if(/[a-zA-Z0-9]/.test(aj)){$(".search_text_error_message").addClass("hide")
}else{$(".search_text_error_message").removeClass("hide")
}aj=encodeURIComponent(aj).replace(/%20/g,"+");
var bW=$(".search_text_error_message").is(":visible");
b1.stopImmediatePropagation();
if(aj!=""&&!bW){$(".locations_filter_desktop .search_detail_radius_select select option:eq(1)").attr("selected",true);
$(".locations_filter_desktop .search_detail_radius_select span").text("10 Miles");
$(".locations_filter_mobile .mobile-radius-filter .search_detail_radius_select select option:eq(1)").attr("selected",true);
$(".locations_filter_mobile .mobile-radius-filter .search_detail_radius_select span").text("10 Miles");
$(".people_filter_desktop .search_detail_radius_select select option:eq(1)").attr("selected",true);
$(".people_filter_desktop .search_detail_radius_select span").text("10 Miles");
$(".people_filter_mobile .mobile-radius-filter .search_detail_radius_select select option:eq(1)").attr("selected",true);
$(".people_filter_mobile .mobile-radius-filter .search_detail_radius_select span").text("10 Miles");
var bV=$("ul.search_select a.active").attr("index");
if(bV!=undefined){var bU=bV.toLowerCase()
}if(bU=="locations"&&ac){var bY=a0("searchTerm");
if(bY!=null&&bY!=undefined&&bY!=""){var b0=window.location.href;
if(b0.indexOf("locationRadius")>=0){b0=z("locationRadius",b0)
}if(b0.indexOf("locationServices")>=0){b0=z("locationServices",b0)
}if(b0.indexOf("productTag")>=0){b0=z("locationServices",b0)
}if(b0.indexOf("peopleRadius")>=0){b0=z("peopleRadius",b0)
}if(b0.indexOf("specialty")>=0){b0=z("specialty",b0)
}b0=b0.replace("searchTerm="+encodeURIComponent(bY).replace(/%20/g,"+"),"searchTerm="+aj);
if(window.location.href==b0){window.location.reload()
}else{window.location.href=b0
}}else{window.location.hash=bU;
window.location.href=f(window.location.href,"searchTerm",aj.replace(/%20/g,"+"))
}}if(bU=="resources"&&Y){var bY=a0("searchTerm");
if(bY!=null&&bY!=undefined&&bY!=""){var b0=window.location.href;
if(b0.indexOf("locationRadius")>=0){b0=z("locationRadius",b0)
}if(b0.indexOf("locationServices")>=0){b0=z("locationServices",b0)
}if(b0.indexOf("productTag")>=0){b0=z("locationServices",b0)
}if(b0.indexOf("peopleRadius")>=0){b0=z("peopleRadius",b0)
}if(b0.indexOf("specialty")>=0){b0=z("specialty",b0)
}b0=b0.replace("searchTerm="+encodeURIComponent(bY).replace(/%20/g,"+"),"searchTerm="+aj);
if(window.location.href==b0){window.location.reload()
}else{window.location.href=b0
}}else{window.location.hash=bU;
window.location.href=f(window.location.href,"searchTerm",aj.replace(/%20/g,"+"))
}}if(bU=="all_results"&&az){var bY=a0("searchTerm");
if(bY!=null&&bY!=undefined&&bY!=""){var b0=window.location.href;
if(b0.indexOf("locationRadius")>=0){b0=z("locationRadius",b0)
}if(b0.indexOf("locationServices")>=0){b0=z("locationServices",b0)
}if(b0.indexOf("productTag")>=0){b0=z("locationServices",b0)
}if(b0.indexOf("peopleRadius")>=0){b0=z("peopleRadius",b0)
}if(b0.indexOf("specialty")>=0){b0=z("specialty",b0)
}b0=b0.replace("searchTerm="+encodeURIComponent(bY).replace(/%20/g,"+"),"searchTerm="+aj);
if(window.location.href==b0){window.location.reload()
}else{window.location.href=b0
}}else{window.location.hash=bU;
window.location.href=f(window.location.href,"searchTerm",aj.replace(/%20/g,"+"))
}}if(bU=="people"&&bj){var bZ=a0("searchTerm");
if(bZ!=null&&bZ!=undefined&&bZ!=""){var b0=window.location.href;
if(b0.indexOf("peopleRadius")>=0){b0=z("peopleRadius",b0)
}if(b0.indexOf("specialty")>=0){b0=z("specialty",b0)
}if(b0.indexOf("productTag")>=0){b0=z("specialty",b0)
}if(b0.indexOf("locationRadius")>=0){b0=z("locationRadius",b0)
}if(b0.indexOf("locationServices")>=0){b0=z("locationServices",b0)
}b0=b0.replace("searchTerm="+encodeURIComponent(bZ).replace(/%20/g,"+"),"searchTerm="+aj);
if(window.location.href==b0){window.location.reload()
}else{window.location.href=b0
}}else{window.location.hash=bU;
window.location.href=f(window.location.href,"searchTerm",aj.replace(/%20/g,"+"))
}}if(bU=="faqs"&&bS){var bX=a0("searchTerm");
if(bX!=null&&bX!=undefined&&bX!=""){var b0=window.location.href;
if(b0.indexOf("locationRadius")>=0){b0=z("locationRadius",b0)
}if(b0.indexOf("locationServices")>=0){b0=z("locationServices",b0)
}if(b0.indexOf("productTag")>=0){b0=z("locationServices",b0)
}if(b0.indexOf("peopleRadius")>=0){b0=z("peopleRadius",b0)
}if(b0.indexOf("specialty")>=0){b0=z("specialty",b0)
}b0=b0.replace("searchTerm="+encodeURIComponent(bX).replace(/%20/g,"+"),"searchTerm="+aj);
if(window.location.href==b0){window.location.reload()
}else{window.location.href=b0
}}else{window.location.hash=bU;
window.location.href=f(window.location.href,"searchTerm",aj.replace(/%20/g,"+"))
}}if(bU=="products"&&bG){var bX=a0("searchTerm");
if(bX!=null&&bX!=undefined&&bX!=""){var b0=window.location.href;
if(b0.indexOf("locationRadius")>=0){b0=z("locationRadius",b0)
}if(b0.indexOf("locationServices")>=0){b0=z("locationServices",b0)
}if(b0.indexOf("productTag")>=0){b0=z("locationServices",b0)
}if(b0.indexOf("peopleRadius")>=0){b0=z("peopleRadius",b0)
}if(b0.indexOf("specialty")>=0){b0=z("specialty",b0)
}b0=b0.replace("searchTerm="+encodeURIComponent(bX).replace(/%20/g,"+"),"searchTerm="+aj);
if(window.location.href==b0){window.location.reload()
}else{window.location.href=b0
}}else{window.location.hash=bU;
window.location.href=f(window.location.href,"searchTerm",aj.replace(/%20/g,"+"))
}}}else{$(".search_result_categories").addClass("hide");
$(".faqs_filter_container").addClass("hide");
$(".locations_filter_container").addClass("hide");
$(".resources_filter_container").addClass("hide");
$(".products_filter_container").addClass("hide");
$(".all_results_filter_container").addClass("hide");
$(".people_filter_container").addClass("hide");
$(".search_result_filters.result_filters_other .search_result_filters_faqs").addClass("hide");
$(".search_result_filters.result_filters_other .search_result_filters_products").addClass("hide");
$(".search_result_filters.result_filters_other .search_result_filters_all_results").addClass("hide");
$(".locations_no_result.zero_result_found").addClass("hide");
$(".resources_no_result.zero_result_found").addClass("hide");
$(".faqs_no_result.zero_result_found").addClass("hide");
$(".products_no_result.zero_result_found").addClass("hide");
$(".all_results_no_result.zero_result_found").addClass("hide");
$(".people_no_result.zero_result_found").addClass("hide");
$(".search_result_filters_nonProducts.search_result_filters").addClass("hide");
$(".search_result_count.text-center").addClass("hide");
$(".location_result_show_more_results").addClass("hide");
$(".resources_result_show_more_results").addClass("hide");
$(".people_result_show_more_results").addClass("hide");
$(".search_result_show_more_results").addClass("hide");
$(".faq_result_show_more_results").addClass("hide");
$(".all_result_show_more_results").addClass("hide")
}return false
});
$(document).on("keypress","#search-input",function(bU){if(bU.keyCode===13){$(this).blur();
$(".location-search .suntrust-orange-button.search-button").trigger("click")
}});
function bP(){if(ax!=""){var e=$("select.search_select option[value='"+ax.toLowerCase()+"']").text();
$("select.search_select option[value='"+ax.toLowerCase()+"']").attr("selected",true);
$("select.search_select option[value="+ax.toLowerCase()+"]").parent().prev().html(e)
}}setTimeout(bP,300);
var bI=!!navigator.platform&&/iPhone/.test(navigator.platform);
if(bI){$("#search_mobile_tab_navigation option").attr("selected",true)
}function aV(e,bX){var bU=[];
var bW={};
for(var bV in e){if(e[bV][bX]!=undefined){bW[e[bV][bX]]=e[bV]
}}for(bV in bW){bU.push(bW[bV])
}return bU
}function aF(bV,b5){var cb=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
$("#loadingMask").show();
ay=parseInt($(".location_result_show_more_results a").attr("data-search-visible-items-limit"));
bc=0;
var b4=[];
var b3=[];
var cd=[];
var b6=[];
var ck=[];
var b7=[];
var bX=[];
var b8=[];
var b1=[];
var b9=false;
var cl=false;
var cj=false;
var ca=false;
var bW=false;
var ch=false;
var e=false;
var bU=false;
var b0=false;
var ce=0;
var bZ=bV;
var b2=[];
$(".search_result_description .search-results .locations_filter_container .filter-no-result").remove();
$(".search_result_description .search-results .locations_filter_container .location_mq_results").children().remove();
$(".search_result_description .search-results .locations_filter_container .location_aem_results").children().remove();
$(".location-search .search_result_count").addClass("hide");
if(window.innerWidth<768){$(".locations_filter_mobile .mobile-city input").each(function(cm){if($(this).is(":checked")){b9=true;
b4.push($(this).val())
}if(!($(this).is(":checked"))){ca=true
}});
$(".locations_filter_mobile .mobile-state input").each(function(cm){if($(this).is(":checked")){cl=true;
b3.push($(this).val())
}if(!($(this).is(":checked"))){bW=true
}});
$(".locations_filter_mobile .mobile-services input").each(function(cm){if($(this).is(":checked")){cj=true;
cd.push($(this).val())
}if(!($(this).is(":checked"))){ch=true
}})
}if(window.innerWidth>=768){$(".locations_filter_desktop .search_detail_city input").each(function(cm){if($(this).is(":checked")){b9=true;
b4.push($(this).val())
}if(!($(this).is(":checked"))){ca=true
}});
$(".locations_filter_desktop .search_detail_state input").each(function(cm){if($(this).is(":checked")){cl=true;
b3.push($(this).val())
}if(!($(this).is(":checked"))){bW=true
}});
$(".locations_filter_desktop .search_detail_services_level0 input").each(function(cm){if($(this).is(":checked")){cj=true;
cd.push($(this).val())
}if(!($(this).is(":checked"))){ch=true
}});
setTimeout(function(){l("desktopView")
},1000)
}t=cd;
if(bZ!="Select"){if(cl==false&&b9==false&&cj==false){bz=A;
bz=aV(bz,"loc_detail_page");
ai(bz,"singleDimension",b5,ay,bc)
}else{if(b9==false||cl==false||cj==false){var bY=[];
bz=bY;
ai(bz,"singleDimension",b5,ay,bc)
}}if(b9==true&&cl==true&&cj==true){if(bW==true){e=true;
for(var cg=0;
cg<A.length;
cg++){for(var cf=0;
cf<b3.length;
cf++){ck.push($(A[cg]).filter(function(cm,cn){return cn.loc_state_tag===b3[cf]
}))
}}}else{if(bW==false){ck=A;
ce=ce+1
}}if(ca==true){if(e==true){bU=true;
for(var cg=0;
cg<ck.length;
cg++){for(var cc=0;
cc<ck[cg].length;
cc++){for(var cf=0;
cf<b4.length;
cf++){b7.push($(ck[cg][cc]).filter(function(cm,cn){return cn.loc_city===b4[cf]
}))
}}}}else{if(e==false){for(var cg=0;
cg<ck.length;
cg++){for(var cf=0;
cf<b4.length;
cf++){b7.push($(ck[cg]).filter(function(cm,cn){return cn.loc_city===b4[cf]
}))
}}}}}else{b7=ck;
ce=ce+1
}if(ch==true){if(bU==true){b0=true;
for(var cg=0;
cg<b7.length;
cg++){for(var cc=0;
cc<b7[cg].length;
cc++){for(var cf=0;
cf<cd.length;
cf++){if((cd.indexOf("drive-thru-banking")<0)&&(cd.indexOf("weekend-hours")<0)&&(cd.indexOf("instore-branch")<0)){b6.push($(b7[cg][cc]).filter(function(cm,cn){if(cn.loc_services_tag.toString().indexOf(cd[cf])>=0){return true
}else{return false
}}))
}else{if(cd[cf]!="branch"){b6.push($(b7[cg][cc]).filter(function(cm,cn){if(cn.loc_services_tag.toString().indexOf(cd[cf])>=0){return true
}else{return false
}}))
}}}}}}else{if(bU==false){for(var cg=0;
cg<b7.length;
cg++){for(var cf=0;
cf<cd.length;
cf++){if((cd.indexOf("drive-thru-banking")<0)&&(cd.indexOf("weekend-hours")<0)&&(cd.indexOf("instore-branch")<0)){b6.push($(b7[cg]).filter(function(cm,cn){if(cn.loc_services_tag.toString().indexOf(cd[cf])>=0){return true
}else{return false
}}))
}else{if(cd[cf]!="branch"){b6.push($(b7[cg]).filter(function(cm,cn){if(cn.loc_services_tag.toString().indexOf(cd[cf])>=0){return true
}else{return false
}}))
}}}}}}}else{b6=b7;
ce=ce+1
}if(ce==3){bz=b6;
bz=aV(bz,"loc_detail_page");
ai(bz,"singleDimension",b5,ay,bc)
}else{for(var ci=0;
ci<b6.length;
ci++){for(var cg=0;
cg<b6[ci].length;
cg++){b2.push(b6[ci][cg])
}}bz=b2;
bz=aV(bz,"loc_detail_page");
ai(bz,"singleDimension",b5,ay,bc)
}}}}function aW(bV,b5){var ca=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
$("#loadingMask").show();
aR=parseInt($(".people_result_show_more_results a").attr("data-search-visible-items-limit"));
O=0;
var b4=[];
var b2=[];
var bX=[];
var b6=[];
var ch=[];
var b7=[];
var cf=[];
var cc=[];
var b0=[];
var b8=false;
var ci=false;
var cd=false;
var b9=false;
var bW=false;
var cg=false;
var e=false;
var bU=false;
var ce=false;
var cb=0;
var bZ=bV;
var b1=[];
$(".search_result_description .search-results .people_filter_container .filter-no-result").remove();
$(".search_result_description .search-results .people_filter_container .people_mq_results").children().remove();
$(".search_result_description .search-results .people_filter_container .people_aem_results").children().remove();
$(".location-search .search_result_count").addClass("hide");
if(window.innerWidth<768){$(".people_filter_mobile .mobile-city input").each(function(cl){if($(this).is(":checked")){b8=true;
if($(this).val().indexOf(",")>0){var cj=$(this).val().split(",");
for(var ck=0;
ck<cj.length;
ck++){b4.push(cj[ck])
}}else{b4.push($(this).val())
}}if(!($(this).is(":checked"))){b9=true
}});
b4=$.unique(b4);
$(".people_filter_mobile .mobile-state input").each(function(cj){if($(this).is(":checked")){ci=true;
b2.push($(this).val())
}if(!($(this).is(":checked"))){bW=true
}});
$(".people_filter_mobile .mobile-speciality input").each(function(cl){if($(this).is(":checked")){cd=true;
if($(this).val().indexOf(",")>0){var cj=$(this).val().split(",");
for(var ck=0;
ck<cj.length;
ck++){bX.push(cj[ck])
}}else{bX.push($(this).val())
}}if(!($(this).is(":checked"))){cg=true
}});
bX=$.unique(bX)
}if(window.innerWidth>=768){$(".people_filter_desktop .search_detail_city input").each(function(cl){if($(this).is(":checked")){b8=true;
if($(this).val().indexOf(",")>0){var cj=$(this).val().split(",");
for(var ck=0;
ck<cj.length;
ck++){b4.push(cj[ck])
}}else{b4.push($(this).val())
}}if(!($(this).is(":checked"))){b9=true
}});
b4=$.unique(b4);
$(".people_filter_desktop .search_detail_state input").each(function(cj){if($(this).is(":checked")){ci=true;
b2.push($(this).val())
}if(!($(this).is(":checked"))){bW=true
}});
$(".people_filter_desktop .search_detail_speciality_level input").each(function(cl){if($(this).is(":checked")){cd=true;
if($(this).val().indexOf(",")>0){var cj=$(this).val().split(",");
for(var ck=0;
ck<cj.length;
ck++){bX.push(cj[ck])
}}else{bX.push($(this).val())
}}if(!($(this).is(":checked"))){cg=true
}});
bX=$.unique(bX);
setTimeout(function(){l("desktopView")
},1000)
}bF=bX;
if(bZ!="Select"){if(ci==false&&b8==false&&cd==false){n=aU;
n=aV(n,"advisor_profilePage");
bB(n,"singleDimension",b5,aR,O)
}else{if(b8==false||ci==false||cd==false){var bY=[];
n=bY;
bB(n,"singleDimension",b5,aR,O)
}}if(b8==true&&ci==true&&cd==true){if(bW==true){e=true;
for(var b3=0;
b3<b2.length;
b3++){ch=ch.concat($.grep(aU,function(cj){if(cj.advisor_state!=null&&cj.advisor_state!=undefined){return cj.advisor_state.toUpperCase()===b2[b3]
}}))
}}else{if(bW==false){ch=aU;
cb=cb+1
}}if(b9==true){if(e==true){bU=true;
for(var b3=0;
b3<b4.length;
b3++){b7=b7.concat($.grep(ch,function(cj){if(cj.advisor_city!=null&&cj.advisor_city!=undefined){return(cj.advisor_city.toUpperCase()).indexOf(b4[b3])>-1
}}))
}}else{if(e==false){for(var b3=0;
b3<b4.length;
b3++){b7=b7.concat($.grep(ch,function(cj){if(cj.advisor_city!=null&&cj.advisor_city!=undefined){return(cj.advisor_city.toUpperCase()).indexOf(b4[b3])>-1
}}))
}}}}else{b7=ch;
cb=cb+1
}if(cg==true){if(bU==true){ce=true;
for(var b3=0;
b3<bX.length;
b3++){b6=b6.concat($.grep(b7,function(cj){if(cj.advisor_specialty!=null&&cj.advisor_specialty!=undefined){return(cj.advisor_specialty.toUpperCase()).indexOf(bX[b3])>-1
}}))
}}else{if(bU==false){for(var b3=0;
b3<bX.length;
b3++){b6=b6.concat($.grep(b7,function(cj){if(cj.advisor_specialty!=null&&cj.advisor_specialty!=undefined){return(cj.advisor_specialty.toUpperCase()).indexOf(bX[b3])>-1
}}))
}}}}else{b6=b7;
cb=cb+1
}n=b6;
n=aV(n,"advisor_profilePage");
bB(n,"singleDimension",b5,aR,O)
}}}$(document).on("change",".locations_filter_desktop .search_detail_city input, .locations_filter_desktop .search_detail_state input, .locations_filter_desktop .search_detail_services_level0 input, .state_city_selectall_clear a",function(bW){var bV="refineResult";
if($(this).parents(".sun-checkbox-input-field").next().hasClass("search_detail_services_level1")){if(!$(this).is(":checked")){$(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").hide();
$(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").addClass("hide");
$(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").find(".sun-checkbox-input-field span").removeClass("sun-checked");
$(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").find(".sun-checkbox-input-field input").attr("checked",false)
}else{$(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").removeClass("hide");
$(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").show()
}}var bU=$(".locations_filter_desktop .search_detail_location_radius .search_detail_radius_select span").text();
bU=bU.split("Miles");
bU=bU[0].trim();
aF(bU,bV)
});
$(document).on("change",".locations_filter_mobile input",function(bU){if($(this).parents(".sun-checkbox-input-field").next().hasClass("search_detail_services_level1")){if($(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").is(":visible")){$(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").addClass("hide");
$(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").hide();
$(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").find(".sun-checkbox-input-field span").removeClass("sun-checked");
$(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").find(".sun-checkbox-input-field input").attr("checked",false)
}else{$(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").removeClass("hide");
$(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").show()
}}});
$(document).on("click",".locations_filter_desktop .location_state .select_all",function(bW){var bV="refineResult";
$(".locations_filter_desktop .search_detail_state .search_detail_state_city_select .sun-checkbox-input-container").each(function(bX){$(this).find("span").addClass("sun-checked");
$(this).find("input").prop("checked",true)
});
var bU=$(".locations_filter_desktop .search_detail_location_radius .search_detail_radius_select span").text();
bU=bU.split("Miles");
bU=bU[0].trim();
aF(bU,bV)
});
$(document).on("click",".locations_filter_desktop .location_state .select_none",function(bW){var bV="refineResult";
$(".locations_filter_desktop .search_detail_state .search_detail_state_city_select .sun-checkbox-input-container").each(function(bX){$(this).find("span").removeClass("sun-checked");
$(this).find("input").prop("checked",false)
});
var bU=$(".locations_filter_desktop .search_detail_location_radius .search_detail_radius_select span").text();
bU=bU.split("Miles");
bU=bU[0].trim();
aF(bU,bV)
});
$(document).on("click",".locations_filter_desktop .location_city .select_none",function(bW){var bV="refineResult";
$(".locations_filter_desktop .search_detail_city .search_detail_state_city_select .sun-checkbox-input-container").each(function(bX){$(this).find("span").removeClass("sun-checked");
$(this).find("input").prop("checked",false)
});
var bU=$(".locations_filter_desktop .search_detail_location_radius .search_detail_radius_select span").text();
bU=bU.split("Miles");
bU=bU[0].trim();
aF(bU,bV)
});
$(document).on("click",".locations_filter_desktop .location_city .select_all",function(bW){var bV="refineResult";
$(".locations_filter_desktop .search_detail_city .search_detail_state_city_select .sun-checkbox-input-container").each(function(bX){$(this).find("span").addClass("sun-checked");
$(this).find("input").prop("checked",true)
});
var bU=$(".locations_filter_desktop .search_detail_location_radius .search_detail_radius_select span").text();
bU=bU.split("Miles");
bU=bU[0].trim();
aF(bU,bV)
});
$(document).on("click",".locations_filter_mobile .location_state .select_all",function(bU){$(".locations_filter_mobile .mobile-state .sun-checkbox-input-container").each(function(bV){$(this).find("span").addClass("sun-checked");
$(this).find("input").prop("checked",true)
})
});
$(document).on("click",".locations_filter_mobile .location_state .select_none",function(bU){$(".locations_filter_mobile .mobile-state .sun-checkbox-input-container").each(function(bV){$(this).find("span").removeClass("sun-checked");
$(this).find("input").prop("checked",false)
})
});
$(document).on("click",".locations_filter_mobile .location_city .select_none",function(bU){$(".locations_filter_mobile .mobile-city .sun-checkbox-input-container").each(function(bV){$(this).find("span").removeClass("sun-checked");
$(this).find("input").prop("checked",false)
})
});
$(document).on("click",".locations_filter_mobile .location_city .select_all",function(bU){$(".locations_filter_mobile .mobile-city .sun-checkbox-input-container").each(function(bV){$(this).find("span").addClass("sun-checked");
$(this).find("input").prop("checked",true)
})
});
$(document).on("change",".people_filter_desktop .search_detail_city input, .people_filter_desktop .search_detail_state input, .people_filter_desktop .search_detail_speciality_level input, .state_city_selectall_clear a",function(bW){var bV="refineResult";
if($(this).parents(".sun-checkbox-input-field").next().hasClass("search_detail_speciality_level")){if(!$(this).parent().hasClass("sun-checked")){$(this).parents(".sun-checkbox-input-field").next(".search_detail_speciality_level").addClass("hide");
$(this).parents(".sun-checkbox-input-field").next(".search_detail_speciality_level").find(".sun-checkbox-input-field span").removeClass("sun-checked");
$(this).parents(".sun-checkbox-input-field").next(".search_detail_speciality_level").find(".sun-checkbox-input-field input").attr("checked",false)
}else{$(this).parents(".sun-checkbox-input-field").next(".search_detail_speciality_level").removeClass("hide")
}}var bU=$(".people_filter_desktop .search_detail_people_radius .search_detail_radius_select span").text();
bU=bU.split("Miles");
bU=bU[0].trim();
aW(bU,bV)
});
$(document).on("change",".people_filter_mobile input",function(bU){if($(this).parents(".sun-checkbox-input-field").next().hasClass("search_detail_speciality_level")){if(!$(this).parent().hasClass("sun-checked")){$(this).parents(".sun-checkbox-input-field").next(".search_detail_speciality_level").addClass("hide");
$(this).parents(".sun-checkbox-input-field").next(".search_detail_speciality_level").find(".sun-checkbox-input-field span").removeClass("sun-checked");
$(this).parents(".sun-checkbox-input-field").next(".search_detail_speciality_level").find(".sun-checkbox-input-field input").attr("checked",false)
}else{$(this).parents(".sun-checkbox-input-field").next(".search_detail_speciality_level").removeClass("hide")
}}});
$(document).on("click",".people_filter_desktop .people_speciality .select_all",function(bW){var bV="refineResult";
$(".people_filter_desktop .search_detail_speciality .search_detail_speciality_level .sun-checkbox-input-container").each(function(bX){$(this).find("span").addClass("sun-checked");
$(this).find("input").prop("checked",true)
});
var bU=$(".people_filter_desktop .search_detail_people_radius .search_detail_radius_select span").text();
bU=bU.split("Miles");
bU=bU[0].trim();
aW(bU,bV)
});
$(document).on("click",".people_filter_desktop .people_speciality .select_none",function(bW){var bV="refineResult";
$(".people_filter_desktop .search_detail_speciality .search_detail_speciality_level .sun-checkbox-input-container").each(function(bX){$(this).find("span").removeClass("sun-checked");
$(this).find("input").prop("checked",false)
});
var bU=$(".people_filter_desktop .search_detail_people_radius .search_detail_radius_select span").text();
bU=bU.split("Miles");
bU=bU[0].trim();
aW(bU,bV)
});
$(document).on("click",".people_filter_desktop .people_state .select_all",function(bW){var bV="refineResult";
$(".people_filter_desktop .search_detail_state .search_detail_state_city_select .sun-checkbox-input-container").each(function(bX){$(this).find("span").addClass("sun-checked");
$(this).find("input").prop("checked",true)
});
var bU=$(".people_filter_desktop .search_detail_people_radius .search_detail_radius_select span").text();
bU=bU.split("Miles");
bU=bU[0].trim();
aW(bU,bV)
});
$(document).on("click",".people_filter_desktop .people_state .select_none",function(bW){var bV="refineResult";
$(".people_filter_desktop .search_detail_state .search_detail_state_city_select .sun-checkbox-input-container").each(function(bX){$(this).find("span").removeClass("sun-checked");
$(this).find("input").prop("checked",false)
});
var bU=$(".people_filter_desktop .search_detail_people_radius .search_detail_radius_select span").text();
bU=bU.split("Miles");
bU=bU[0].trim();
aW(bU,bV)
});
$(document).on("click",".people_filter_desktop .people_city .select_none",function(bW){var bV="refineResult";
$(".people_filter_desktop .search_detail_city .search_detail_state_city_select .sun-checkbox-input-container").each(function(bX){$(this).find("span").removeClass("sun-checked");
$(this).find("input").prop("checked",false)
});
var bU=$(".people_filter_desktop .search_detail_people_radius .search_detail_radius_select span").text();
bU=bU.split("Miles");
bU=bU[0].trim();
aW(bU,bV)
});
$(document).on("click",".people_filter_desktop .people_city .select_all",function(bW){var bV="refineResult";
$(".people_filter_desktop .search_detail_city .search_detail_state_city_select .sun-checkbox-input-container").each(function(bX){$(this).find("span").addClass("sun-checked");
$(this).find("input").prop("checked",true)
});
var bU=$(".people_filter_desktop .search_detail_people_radius .search_detail_radius_select span").text();
bU=bU.split("Miles");
bU=bU[0].trim();
aW(bU,bV)
});
$(document).on("click",".people_filter_mobile .people_speciality .select_all",function(bU){$(".people_filter_mobile .mobile-speciality .sun-checkbox-input-container").each(function(bV){$(this).find("span").addClass("sun-checked");
$(this).find("input").prop("checked",true)
})
});
$(document).on("click",".people_filter_mobile .people_speciality .select_none",function(bU){$(".people_filter_mobile .mobile-speciality .sun-checkbox-input-container").each(function(bV){$(this).find("span").removeClass("sun-checked");
$(this).find("input").prop("checked",false)
})
});
$(document).on("click",".people_filter_mobile .people_state .select_all",function(bU){$(".people_filter_mobile .mobile-state .sun-checkbox-input-container").each(function(bV){$(this).find("span").addClass("sun-checked");
$(this).find("input").prop("checked",true)
})
});
$(document).on("click",".people_filter_mobile .people_state .select_none",function(bU){$(".people_filter_mobile .mobile-state .sun-checkbox-input-container").each(function(bV){$(this).find("span").removeClass("sun-checked");
$(this).find("input").prop("checked",false)
})
});
$(document).on("click",".people_filter_mobile .people_city .select_none",function(bU){$(".people_filter_mobile .mobile-city .sun-checkbox-input-container").each(function(bV){$(this).find("span").removeClass("sun-checked");
$(this).find("input").prop("checked",false)
})
});
$(document).on("click",".people_filter_mobile .people_city .select_all",function(bU){$(".people_filter_mobile .mobile-city .sun-checkbox-input-container").each(function(bV){$(this).find("span").addClass("sun-checked");
$(this).find("input").prop("checked",true)
})
});
function a5(e){var bU=[];
$(e).find("input").each(function(bV){if(!$(this).is(":checked")){bU.push($(this).val())
}});
return bU
}function at(e){var bU=[];
$(e).find("input").each(function(bV){if(!$(this).is(":checked")){bU.push($(this).attr("name"))
}});
return bU
}function a1(e){var bU=[];
$(e).find("input").each(function(bV){bU.push($(this).val())
});
return bU
}function S(e,bU){$(e).find("input").each(function(bV){$(this).prop("checked",true);
$(this).parent().addClass("sun-checked");
for(var bW=0;
bW<bU.length;
bW++){if($(this).val()==bU[bW]){$(this).prop("checked",false);
$(this).parent().removeClass("sun-checked")
}}if($(this).parents(".sun-checkbox-input-field").next().hasClass("search_detail_services_level1")){if(!$(this).is(":checked")){$(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").hide()
}else{$(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").show()
}}})
}function q(e,bU){$(e).find("input").each(function(bV){$(this).prop("checked",true);
$(this).parent().addClass("sun-checked");
for(var bW=0;
bW<bU.length;
bW++){if($(this).attr("name")==bU[bW]){$(this).prop("checked",false);
$(this).parent().removeClass("sun-checked")
}}})
}function bo(){var e=$("ul.search_select a.active").attr("index");
var bV=e.replace(" ","_");
var bU=bV.toLowerCase();
$(".search_result_filters_nonProducts").addClass("hide");
$(".search_result_filters_nonProducts > div").addClass("hide");
$(".result_filters_other").addClass("author_hide");
$(".result_filters_other > div").addClass("author_hide");
$(".resources_no_result.zero_result_found").addClass("hide");
if(bU!="products"&&bU!="all_results"&&bU!="faqs"){$(".search_result_filters_nonProducts").removeClass("hide");
$(".search_result_filters_nonProducts").show();
$("."+bU+"_filter_desktop").removeClass("hide");
$("."+bU+"_filter_container").removeClass("hide");
$("."+bU+"_filter_mobile").removeClass("hide")
}else{$(".search_result_filters_nonProducts").addClass("hide");
if(!$(".faqs_no_result.zero_result_found").is(":visible")){$(".result_filters_other").removeClass("author_hide");
$(".faqs_filter_container").removeClass("hide");
$(".search_result_filters_faqs").removeClass("author_hide")
}}}function bs(){var e=$("ul.search_select a.active").attr("index");
var bV=e.replace(" ","_");
var bU=bV.toLowerCase();
$(".search_result_filters_nonProducts").addClass("hide");
$(".search_result_filters_nonProducts > div").addClass("hide");
$(".result_filters_other").addClass("author_hide");
$(".result_filters_other > div").addClass("author_hide");
$(".locations_no_result.zero_result_found").addClass("hide");
if(bU!="products"&&bU!="all_results"&&bU!="faqs"){$(".search_result_filters_nonProducts").removeClass("hide");
$("."+bU+"_filter_desktop").removeClass("hide");
$("."+bU+"_filter_container").removeClass("hide");
$("."+bU+"_filter_mobile").removeClass("hide")
}else{$(".search_result_filters_nonProducts").addClass("hide");
if(!$(".faqs_no_result.zero_result_found").is(":visible")){$(".result_filters_other").removeClass("author_hide");
$(".faqs_filter_container").removeClass("hide");
$(".search_result_filters_faqs").removeClass("author_hide")
}}}function bd(){var e=$("ul.search_select a.active").attr("index");
var bV=e.replace(" ","_");
var bU=bV.toLowerCase();
$(".search_result_filters_nonProducts").addClass("hide");
$(".search_result_filters_nonProducts > div").addClass("hide");
$(".result_filters_other").addClass("author_hide");
$(".result_filters_other > div").addClass("author_hide");
$(".faqs_no_result.zero_result_found").addClass("hide");
$(".products_no_result.zero_result_found").addClass("hide");
$(".locations_no_result.zero_result_found").addClass("hide");
$(".all_results_no_result.zero_result_found").addClass("hide");
if(bU!="products"&&bU!="all_results"&&bU!="faqs"){$(".search_result_filters_nonProducts").removeClass("hide");
$("."+bU+"_filter_desktop").removeClass("hide");
$("."+bU+"_filter_container").removeClass("hide");
$("."+bU+"_filter_mobile").removeClass("hide")
}else{$(".search_result_filters_nonProducts").addClass("hide");
$(".result_filters_other").removeClass("author_hide");
$("."+bU+"_filter_container").removeClass("hide");
$(".search_result_filters_"+bU).removeClass("hide");
$(".search_result_filters_"+bU).removeClass("author_hide")
}}function aQ(){$(".locations_result_count").addClass("hide");
var e=$("ul.search_select a.active").attr("index");
var bV=e.replace(" ","_");
var bU=bV.toLowerCase();
$(".search_result_filters_nonProducts").addClass("hide");
$(".search_result_filters_nonProducts > div").addClass("hide");
$(".result_filters_other").addClass("author_hide");
$(".result_filters_other > div").addClass("author_hide");
$(".people_no_result.zero_result_found").addClass("hide");
if(bU!="products"&&bU!="all_results"&&bU!="faqs"){$(".search_result_filters_nonProducts").removeClass("hide");
$("."+bU+"_filter_desktop").removeClass("hide");
$("."+bU+"_filter_container").removeClass("hide");
$("."+bU+"_filter_mobile").removeClass("hide")
}else{$(".search_result_filters_nonProducts").addClass("hide");
if(!$(".faqs_no_result.zero_result_found").is(":visible")){$(".result_filters_other").removeClass("author_hide");
$(".faqs_filter_container").removeClass("hide");
$(".search_result_filters_faqs").removeClass("author_hide")
}}}function y(){var e=$("ul.search_select a.active").attr("index");
var bV=e.replace(" ","_");
var bU=bV.toLowerCase();
$(".search_result_filters_nonProducts").addClass("hide");
$(".search_result_filters_nonProducts > div").addClass("hide");
$(".result_filters_other").addClass("author_hide");
$(".result_filters_other > div").addClass("author_hide");
$(".faqs_no_result.zero_result_found").addClass("hide");
$(".products_no_result.zero_result_found").addClass("hide");
if(bU!="products"&&bU!="all_results"&&bU!="faqs"){$(".search_result_filters_nonProducts").removeClass("hide");
$("."+bU+"_filter_desktop").removeClass("hide");
$("."+bU+"_filter_container").removeClass("hide");
$("."+bU+"_filter_mobile").removeClass("hide")
}else{$(".search_result_filters_nonProducts").addClass("hide");
$(".result_filters_other").removeClass("author_hide");
$("."+bU+"_filter_container").removeClass("hide");
$(".search_result_filters_"+bU).removeClass("hide");
$(".search_result_filters_"+bU).removeClass("author_hide")
}}function aT(){var e=$("ul.search_select a.active").attr("index");
var bV=e.replace(" ","_");
var bU=bV.toLowerCase();
$(".search_result_filters_nonProducts").addClass("hide");
$(".search_result_filters_nonProducts > div").addClass("hide");
$(".result_filters_other").addClass("author_hide");
$(".result_filters_other > div").addClass("author_hide");
$(".faqs_filter_container").addClass("hide");
$(".all_results_filter_container").addClass("hide");
$("."+bU+"_no_result").removeClass("hide");
$(".result_filters_other").addClass("author_hide");
$(".search_result_filters_"+bU).addClass("author_hide")
}function aN(){$(".locations_result_count").addClass("hide");
$(".search_result_filters_nonProducts").addClass("hide");
if(aC.length>0){$(".faqs_no_result").addClass("hide");
for(var bW=0;
bW<aC.length;
bW++){if(aC[bW].faq_question!=undefined&&aC[bW].faq_answer!=undefined){$(".search-results .faqs_filter_container .sun-faqs-page-details .sun-faqs-page-list.sun-faqs-page-list-alt").append("<div data-sun-class='faqs-page-list-item' class='sun-faqs-page-list-item'><a class='sun-faqs-page-list-item-header' data-sun-class='faqs-page-list-item-header' href='javascript:void(0);'>"+aC[bW].faq_question+"</a><div class='sun-faqs-page-list-item-detail' data-sun-class='faqs-page-list-item-detail'><p>"+aC[bW].faq_answer+"</p></div></div>")
}else{if(aC[bW].faq_question==undefined&&aC[bW].faq_answer!=undefined){$(".search-results .faqs_filter_container .sun-faqs-page-details .sun-faqs-page-list.sun-faqs-page-list-alt").append("<div data-sun-class='faqs-page-list-item' class='sun-faqs-page-list-item'><a class='sun-faqs-page-list-item-header' data-sun-class='faqs-page-list-item-header' href='javascript:void(0);'></a><div class='sun-faqs-page-list-item-detail' data-sun-class='faqs-page-list-item-detail'><p>"+aC[bW].faq_answer+"</p></div></div>")
}else{if(aC[bW].faq_question!=undefined&&aC[bW].faq_answer==undefined){$(".search-results .faqs_filter_container .sun-faqs-page-details .sun-faqs-page-list.sun-faqs-page-list-alt").append("<div data-sun-class='faqs-page-list-item' class='sun-faqs-page-list-item'><a class='sun-faqs-page-list-item-header' data-sun-class='faqs-page-list-item-header' href='javascript:void(0);'>"+aC[bW].faq_question+"</a><div class='sun-faqs-page-list-item-detail' data-sun-class='faqs-page-list-item-detail'><p></p></div></div>")
}else{if(aC[bW].faq_question==undefined&&aC[bW].faq_answer==undefined){$(".search-results .faqs_filter_container .sun-faqs-page-details .sun-faqs-page-list.sun-faqs-page-list-alt").append("<div data-sun-class='faqs-page-list-item' class='sun-faqs-page-list-item'><a class='sun-faqs-page-list-item-header' data-sun-class='faqs-page-list-item-header' href='javascript:void(0);'></a><div class='sun-faqs-page-list-item-detail' data-sun-class='faqs-page-list-item-detail'><p></p></div></div>")
}}}}}$('.faq_shoeMoreLess_Content [href^="/content/suntrust/dotcom/us/en"], .sun-faqs-page-list-item-detail [href^="/content/suntrust/dotcom/us/en"]').each(function(bY){var bZ=$(this).attr("href").replace("/content/suntrust/dotcom/us/en","");
bZ=bZ.replace(".html","");
$(this).attr("href",bZ)
});
speedBumpCheck($(".sun-faqs-page-list-item-detail"));
speedBumpCheck($(".faq_shoeMoreLess_Content"));
y();
var bU=$("ul.search_select a.active").attr("index");
var bX=bU.replace(" ","_");
var bV=bX.toLowerCase();
if(bV=="faqs"){$(".search_result_filters_nonProducts").addClass("hide");
$(".result_filters_other").removeClass("author_hide");
$("."+bV+"_filter_container").removeClass("hide");
$(".search_result_filters_"+bV).removeClass("author_hide")
}}else{aT();
y();
var bU=$("ul.search_select a.active").attr("index");
var bX=bU.replace(" ","_");
var bV=bX.toLowerCase();
$("."+bV+"_no_result").removeClass("hide");
if(bV=="faqs"){$(".result_filters_other").addClass("author_hide");
$("."+bV+"_filter_container").addClass("hide");
$(".search_result_filters_"+bV).addClass("author_hide")
}}var e=$(".search-results .faqs_filter_container .sun-faqs-page-details .sun-faqs-page-list.sun-faqs-page-list-alt").children().length;
$(".search_result_count .faqs_result_count").text(e);
$(".search_result_count .faqs_result_count").removeClass("hide");
$(".location-search .search_result_count").removeClass("hide");
$("#loadingMask").fadeOut(100);
$("div.sun-faqs-page-list-item").hide();
$(".search-results .faqs_filter_container .sun-faqs-page-details .sun-faqs-page-list.sun-faqs-page-list-alt").children().show();
if(window.innerWidth>=768){$(".search-results .faqs_filter_container .sun-faqs-page-details .sun-faqs-page-list.sun-faqs-page-list-alt").children().hide();
d()
}ab()
}function ad(b5,bX,b4,bW){var b3=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
if(b5.length<b4){b4=b5.length
}if(b5.length>0){for(var b0=bW;
b0<b4;
b0++){if(b5[b0].resource_thumbnail_image!=undefined&&b5[b0].resource_thumbnail_image!=""){$(".search_result_description .search-results .resources_filter_container .search_result_content").append("<div class='search_result_content_data clearfix'><div class='search_result_content_img'><a title='"+b5[b0].resource_title+"' href='"+b5[b0].resource_page+"'><img src='"+b5[b0].resource_thumbnail_image+"' alt='"+b5[b0].resource_title+"'/></a></div><div class='search_result_content_img_data'><a title='"+b5[b0].resource_title+"' href='"+b5[b0].resource_page+"'>"+b5[b0].resource_title+"</a><p>"+b5[b0].resource_desc+"</p></div></div>")
}else{$(".search_result_description .search-results .resources_filter_container .search_result_content").append("<div class='search_result_content_data clearfix'><div class='search_result_content_img_data'><a title='"+b5[b0].resource_title+"' href='"+b5[b0].resource_page+"'>"+b5[b0].resource_title+"</a><p>"+b5[b0].resource_desc+"</p></div></div>")
}}}var b1=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
var bV=$(".search_result_description .search-results .resources_filter_container .search_result_content").children().length;
$(".resources-filter-no-result-identifier").remove();
if(bV!=0){bo();
var bU=$("ul.search_select a.active").attr("index");
var bY=bU.replace(" ","_");
var b2=bY.toLowerCase();
if(b2=="resources"){$(".faqs_result_count").addClass("hide");
$(".products_result_count").addClass("hide");
$("."+b2+"_result_count").removeClass("hide");
$(".search_result_filters_nonProducts").removeClass("hide");
$("."+b2+"_filter_desktop").removeClass("hide");
$("."+b2+"_filter_container").removeClass("hide");
$("."+b2+"_filter_mobile").removeClass("hide")
}$(".search_result_description .search-results .resources_filter_container .search_result_content").children().show();
if(window.innerWidth>=768){bt()
}}else{if(bX=="newSearch"&&aw=="resources"){aT();
bo();
var bU=$("ul.search_select a.active").attr("index");
var bY=bU.replace(" ","_");
var b2=bY.toLowerCase();
if(b2="resources"){$(".faqs_result_count").addClass("hide");
$(".products_result_count").addClass("hide");
$("."+b2+"_no_result").removeClass("hide");
$("."+b2+"_result_count").removeClass("hide")
}}else{if(bX=="refineResult"){$(".search_result_description .search-results .resources_filter_container").append("<div class='filter-no-result zero_result_found'> <div class='zero_result_text'>"+I+"</div></div>");
$(".search_result_description .search-results .resources_filter_container .filter-no-result").append('<input class="resources-filter-no-result-identifier" type="hidden" value="NoResultsDuringFilter">');
bt()
}}}$(".location-search .search_result_count").removeClass("hide");
var e=b5.length;
resourcesResultCount=e;
$(".search_result_count .resources_result_count").text(e);
if(bX=="newSearch"){bm()
}$("#loadingMask").fadeOut(100);
var bZ=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
}function a4(bW,b4,ca){$(".faqs_result_count").addClass("hide");
$(".locations_result_count").addClass("hide");
$(".products_result_count").addClass("hide");
$(".search_result_filters_nonProducts").addClass("hide");
if(bW.length>0){for(var b9=ca;
b9<b4;
b9++){if(bW[b9].result_type=="faq_result"){if(bW[b9].faq_question!=undefined&&bW[b9].faq_answer!=undefined){$(".all_results_filter_container").append("<div class='search_result_content'><div class='search_result_content_cat'><span>FAQs</span></div><div class='search_result_content_data'><div class='faq_result_data'><a href='javascript:void(0);'>"+bW[b9].faq_question+"</a><div class='faq_shoeMoreLess_Content'><p>"+bW[b9].faq_answer+"</p></div></div><a href='javascript:void(0);' class='show_more hide'>Show More</a></div></div>")
}else{if(bW[b9].faq_question==undefined&&bW[b9].faq_answer!=undefined){$(".all_results_filter_container").append("<div class='search_result_content'><div class='search_result_content_cat'><span>FAQs</span></div><div class='search_result_content_data'><div class='faq_result_data'><a href='javascript:void(0);'></a><div class='faq_shoeMoreLess_Content'><p>"+bW[b9].faq_answer+"</p></div></div><a href='javascript:void(0);' class='show_more hide'>Show More</a></div></div>")
}else{if(bW[b9].faq_question!=undefined&&bW[b9].faq_answer==undefined){$(".all_results_filter_container").append("<div class='search_result_content'><div class='search_result_content_cat'><span>FAQs</span></div><div class='search_result_content_data'><div class='faq_result_data'><a href='javascript:void(0);'>"+bW[b9].faq_question+"</a><div class='faq_shoeMoreLess_Content'><p></p></div></div><a href='javascript:void(0);' class='show_more hide'>Show More</a></div></div>")
}else{if(bW[b9].faq_question==undefined&&bW[b9].faq_answer==undefined){$(".all_results_filter_container").append("<div class='search_result_content'><div class='search_result_content_cat'><span>FAQs</span></div><div class='search_result_content_data'><div class='faq_result_data'><a href='javascript:void(0);'></a><div class='faq_shoeMoreLess_Content'><p></p></div></div><a href='javascript:void(0);' class='show_more hide'>Show More</a></div></div>")
}}}}$('.faq_shoeMoreLess_Content [href^="/content/suntrust/dotcom/us/en"], .sun-faqs-page-list-item-detail [href^="/content/suntrust/dotcom/us/en"]').each(function(ce){var cf=$(this).attr("href").replace("/content/suntrust/dotcom/us/en","");
cf=cf.replace(".html","");
$(this).attr("href",cf)
});
speedBumpCheck($(".sun-faqs-page-list-item-detail"));
speedBumpCheck($(".faq_shoeMoreLess_Content"))
}else{if(bW[b9].result_type=="product_result"){if(bW[b9].hasOwnProperty("enable_search_boosting")&&bW[b9].enable_search_boosting=="true"){if(bW[b9].hasOwnProperty("search_boost_description")&&bW[b9].search_boost_description!==""){$(".all_results_filter_container").append("<div class='search_result_content search_result_content_featured'><div class='featured-result-mobile'><span class='featured-result-label'>"+bW[b9].feature_result_label+"</span></div><div class='product-desc'><div class='search_result_content_cat'><span>Products</span></div><div class='search_result_content_data'><a href='"+bW[b9].product_page+"' class='boosted_search' data-boosted-result='"+bW[b9].product_title+"' >"+bW[b9].product_title+"</a><p>"+bW[b9].search_boost_description+"</p></div></div><div class='featured-result-desktopandtablet'><span class='featured-result-label'>"+bW[b9].feature_result_label+"</span></div></div>")
}else{$(".all_results_filter_container").append("<div class='search_result_content search_result_content_featured'><div class='featured-result-mobile'><span class='featured-result-label'>"+bW[b9].feature_result_label+"</span></div><div class='product-desc'><div class='search_result_content_cat'><span>Products</span></div><div class='search_result_content_data'><a href='"+bW[b9].product_page+"' class='boosted_search' data-boosted-result='"+bW[b9].product_title+"' >"+bW[b9].product_title+"</a><p>"+bW[b9].product_desc+"</p></div></div><div class='featured-result-desktopandtablet'><span class='featured-result-label'>"+bW[b9].feature_result_label+"</span></div></div>")
}}else{$(".all_results_filter_container").append("<div class='search_result_content'><div class='search_result_content_cat'><span>Products</span></div><div class='search_result_content_data'><a href='"+bW[b9].product_page+"'>"+bW[b9].product_title+"</a><p>"+bW[b9].product_desc+"</p></div></div>")
}}else{if(bW[b9].result_type=="people_result"){var cb="";
var cd=bW[b9].advisor_designationcodes;
if(cd!=""&&cd!=null&&cd!=undefined){cd=cd+", "
}else{cd=""
}for(var b8=0;
b8<bW[b9].advisor_addressListArray.addressListArray.length;
b8++){if(o!=undefined&&m!=undefined){var b7=bW[b9].advisor_addressListArray.addressListArray[b8].adv_latitude;
var b0=bW[b9].advisor_addressListArray.addressListArray[b8].adv_longitude;
var bV=bg(o,m,b7,b0);
var bZ="<p>"+bV+" Miles</p>";
var b6="";
var b2=bW[b9].advisor_profilePage+"?start="+aj;
if(bW[b9].advisor_addressListArray.addressListArray[b8].adv_address!=""&&bW[b9].advisor_addressListArray.addressListArray[b8].adv_address!=undefined){b6=bW[b9].advisor_addressListArray.addressListArray[b8].adv_address
}if(bW[b9].advisor_addressListArray.addressListArray[b8].adv_city!=""&&bW[b9].advisor_addressListArray.addressListArray[b8].adv_city!=undefined){if(b6!=""){b6=b6+" "+bW[b9].advisor_addressListArray.addressListArray[b8].adv_city
}else{b6=bW[b9].advisor_addressListArray.addressListArray[b8].adv_city
}}if(bW[b9].advisor_addressListArray.addressListArray[b8].adv_state!=""&&bW[b9].advisor_addressListArray.addressListArray[b8].adv_state!=undefined){if(b6!=""){b6=b6+", "+bW[b9].advisor_addressListArray.addressListArray[b8].adv_state
}else{b6=bW[b9].advisor_addressListArray.addressListArray[b8].adv_state
}}if(bW[b9].advisor_addressListArray.addressListArray[b8].adv_zipcode!=""&&bW[b9].advisor_addressListArray.addressListArray[b8].adv_zipcode!=undefined){if(b6!=""){b6=b6+" "+bW[b9].advisor_addressListArray.addressListArray[b8].adv_zipcode
}else{b6=bW[b9].advisor_addressListArray.addressListArray[b8].adv_zipcode
}}if($(window).width()<767){if(/Android/i.test(navigator.userAgent)){var bY="https://www.google.com/maps/dir/?api=1&origin="+aj+"&destination="+b6+"&mode=d"
}else{if(/iPhone/i.test(navigator.userAgent)){var bY="http://maps.apple.com?saddr="+aj+"&daddr="+b6+"&directionsmode=transit"
}else{var bY=bW[b9].advisor_profilePage+"?start="+aj+"&destination="+b6
}}}else{var bY=bW[b9].advisor_profilePage+"?start="+aj+"&destination="+b6
}var b3="<div class='loction_show_hide_direction clearfix'><div class='loction_show_hide_direction_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_location.png' alt='Map pin drop icon'></div><div class='loction_show_hide_direction_details'><p><a target='_blank' class='get-direction-link-mobile' data-mobile-link='"+bY+"' href='"+bY+"'>Get Directions</a></p></div></div>"
}else{var bZ="";
var b3="";
var b2=bW[b9].advisor_profilePage
}cb=cb+"<div class='clearfix'><div class='location_show_hide_addr'><a href='#'><strong>"+bW[b9].advisor_addressListArray.addressListArray[b8].adv_location_name+"</strong></a><p>"+bW[b9].advisor_addressListArray.addressListArray[b8].adv_address+"</p><p>"+bW[b9].advisor_addressListArray.addressListArray[b8].adv_city+", "+bW[b9].advisor_addressListArray.addressListArray[b8].adv_state+" "+bW[b9].advisor_addressListArray.addressListArray[b8].adv_zipcode+"</p>"+bZ+"</div>"+b3+"</div>"
}var cc="";
if(bW[b9].advisor_title2!=undefined){cc="<p>"+bW[b9].advisor_title2+"</p>"
}if(bW[b9].advisor_pictureFilePath!=undefined&&bW[b9].advisor_pictureFilePath!=""){var b5="<div class='search_result_description_detail_img clearfix'><a title='"+bW[b9].advisor_title+", "+cd+bW[b9].advisor_title1+"'href='"+b2+"'><img src='"+bW[b9].advisor_pictureFilePath+"' alt='"+bW[b9].advisor_title+"'></a></div>"
}else{var b5=""
}$(".all_results_filter_container").append("<div class='search_result_content allPeopleresult'><div class='search_result_content_cat'><span>People</span></div><div class='search_result_description_details clearfix'>"+b5+"<div class='search_result_details_individual_details'><div><a href='"+b2+"'><strong>"+bW[b9].advisor_title+", "+cd+bW[b9].advisor_title1+"</strong></a>"+cc+"</div><div class='search_result_location_contact visible-xs'><div class='search_result_location_phone clearfix'><div class='search_result_location_phone_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_phone.png' alt='Black phone icon'></div><div class='search_result_location_phone_details'><h5><strong>Phone</strong></h5><p><a href='tel:"+bW[b9].advisor_phone+"'>"+bW[b9].advisor_phone+"</a></p></div></div><div class='search_result_location_phone clearfix'><div class='search_result_location_phone_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_email.png' alt='Black envelope icon'></div><div class='search_result_location_phone_details'><h5><strong>Email</strong></h5><p><a href='mailto:"+bW[b9].advisor_emailaddress+"'>"+bW[b9].advisor_emailaddress+"</a></p></div></div><div class='search_result_location_phone clearfix'><div class='search_result_location_phone_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_contact.png' alt='Right arrow icon'></div><div class='search_result_location_phone_details'><h5><strong>Contact</strong></h5><p><a target='_blank' href='/dotcom/external?clickedUrl="+bW[b9].advisor_onlineContactFormUrl+"'>Online Contact Form</a></p></div></div></div><div class='location_tog'><a href='javascript:void(0);' class='location_toggle'><span>+</span><strong> Show Locations</strong></a><div class='location_show_hide' style='display:none'>"+cb+"</div></div></div><div class='search_result_location_contact hidden-xs'><div class='search_result_location_phone clearfix'><div class='search_result_location_phone_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_phone.png' alt='Black phone icon'></div><div class='search_result_location_phone_details'><h5><strong>Phone</strong></h5><p><a href='tel:"+bW[b9].advisor_phone+"'>"+bW[b9].advisor_phone+"</a></p></div></div><div class='search_result_location_phone clearfix'><div class='search_result_location_phone_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_email.png' alt='Black envelope icon'></div><div class='search_result_location_phone_details'><h5><strong>Email</strong></h5><p><a href='mailto:"+bW[b9].advisor_emailaddress+"'>"+bW[b9].advisor_emailaddress+"</a></p></div></div><div class='search_result_location_phone clearfix'><div class='search_result_location_phone_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_contact.png' alt='Right arrow icon'></div><div class='search_result_location_phone_details'><h5><strong>Contact</strong></h5><p><a target='_blank' href='/dotcom/external?clickedUrl="+bW[b9].advisor_onlineContactFormUrl+"'>Online Contact Form</a></p></div></div></div></div></div>")
}else{if(bW[b9].result_type=="location_result"){if(o!=undefined&&m!=undefined){var b7=bW[b9].loc_latitude;
var b0=bW[b9].loc_longitude;
var bV=bg(o,m,b7,b0);
var bZ="<div class='search_result_description_detail_addr'><h5><strong>Miles</strong></h5><div class=addressDistance' latitude='"+b7+"' longitude='endLng'><div class='miles-away'>"+bV+"</div></div></div>";
if($(window).width()<767){if(/Android/i.test(navigator.userAgent)){var bY="https://www.google.com/maps/dir/?api=1&origin="+aj+"&destination="+bW[b9].loc_address+", "+bW[b9].loc_city+", "+bW[b9].loc_state_tag.toUpperCase()+", "+bW[b9].loc_zipcode+"&mode=d"
}else{if(/iPhone/i.test(navigator.userAgent)){var bY="http://maps.apple.com?saddr="+aj+"&daddr="+bW[b9].loc_address+", "+bW[b9].loc_city+", "+bW[b9].loc_state_tag.toUpperCase()+", "+bW[b9].loc_zipcode+"&directionsmode=transit"
}else{var bY=bW[b9].loc_detail_page+"?start="+aj
}}}else{var bY=bW[b9].loc_detail_page+"?start="+aj
}var b1=bW[b9].loc_detail_page+"?location="+aj
}else{var bZ="";
var bY=bW[b9].loc_detail_page;
var b1=bW[b9].loc_detail_page
}$(".all_results_filter_container").append("<div class='search_result_content'><div class='search_result_content_cat'><span>Locations</span></div><div class='search_result_content_data'><div class='search_result_description_details clearfix'><div class='search_result_location_name'><div class='address search_result_description_detail_addr'><h5><strong><a target='_self' href='"+b1+"'>"+bW[b9].loc_locationname+"</a></strong></h5><p>"+bW[b9].loc_address+"</p><p class='city-state-zipcode'><span class='city'>"+bW[b9].loc_city+", </span><span class='state'>"+bW[b9].loc_state_tag.toUpperCase()+" </span><span class='zipcode'> "+bW[b9].loc_zipcode+"</span></p></div>"+bZ+"<div class='search_result_location_contact visible-xs'><div class='search_result_location_phone clearfix'><div class='search_result_location_phone_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon'/></div><div class='search_result_location_phone_details'><h5><strong>Phone</strong></h5><p><a href='tel:"+bW[b9].loc_phone+"'>"+bW[b9].loc_phone+"</a></p></div></div><div class='search_result_location_fax clearfix'><div class='search_result_location_fax_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon faxing'/></div><div class='search_result_location_fax_details'><h5><strong>Fax</strong></h5><p>"+bW[b9].loc_fax+"</p></div></div><div class='search_result_location_direction clearfix'><div class='search_result_location_direction_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_location.png' alt='Map pin drop icon'/></div><div class='search_result_location_direction_details'><p><a target='_blank' class='get-direction-link-mobile' data-mobile-link='"+bY+"' href='"+bY+"'>Get Directions</a></p></div></div></div><div class='search_result_description_detail_service'><h5><strong>Services</strong></h5><div>"+bW[b9].loc_services+"</div></div></div><div class='search_result_location_working_hours'><div class='search_result_location_branch_hours'><h5><strong>Branch Hours</strong></h5><p>"+bW[b9].loc_branch_hours+"</p></div><div class='search_result_location_drive_thru_hours'><h5><strong>Drive-Thru Hours</strong></h5><p>"+bW[b9].loc_drive_in_hours+"</p></div><div class='search_result_location_teller_connect_hours'><h5><strong>Teller Connect Hours</strong></h5><p>"+bW[b9].loc_teller_hours+"</p></div></div><div class='search_result_location_contact hidden-xs'><div class='search_result_location_phone clearfix'><div class='search_result_location_phone_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon'/></div><div class='search_result_location_phone_details'><h5><strong>Phone</strong></h5><p><a href='tel:"+bW[b9].loc_phone+"'>"+bW[b9].loc_phone+"</a></p></div></div><div class='search_result_location_fax clearfix'><div class='search_result_location_fax_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_cell.png' alt='Black phone icon faxing'/></div><div class='search_result_location_fax_details'><h5><strong>Fax</strong></h5><p>"+bW[b9].loc_fax+"</p></div></div><div class='search_result_location_direction clearfix'><div class='search_result_location_direction_icon'><img src='/content/dam/suntrust/us/en/elements/2017/graphic-elements/icon_location.png' alt='Map pin drop icon'/></div><div class='search_result_location_direction_details'><p><a target='_blank' href='"+bY+"'>Get Directions</a></p></div></div></div></div></div></div>")
}else{if(bW[b9].result_type=="resource_result"){if(bW[b9].resource_thumbnail_image!=undefined&&bW[b9].resource_thumbnail_image!=""){$(".all_results_filter_container").append("<div class='search_result_content'><div class='search_result_content_cat'><span>Resources</span></div><div class='search_result_content_data clearfix'><div class='search_result_content_img'><a title='"+bW[b9].resource_title+"' href='"+bW[b9].resource_page+"'><img src='"+bW[b9].resource_thumbnail_image+"' alt='"+bW[b9].resource_title+"'/></a></div><div class='search_result_content_img_data'><a title='"+bW[b9].resource_title+"' href='"+bW[b9].resource_page+"'>"+bW[b9].resource_title+"</a><p>"+bW[b9].resource_desc+"</p> </div></div></div>")
}else{$(".all_results_filter_container").append("<div class='search_result_content'><div class='search_result_content_cat'><span>Resources</span></div><div class='search_result_content_data clearfix'><div class='search_result_content_img_data'><a title='"+bW[b9].resource_title+"' href='"+bW[b9].resource_page+"'>"+bW[b9].resource_title+"</a><p>"+bW[b9].resource_desc+"</p> </div></div></div>")
}}else{if(bW[b9].result_type=="document_result"){if(bW[b9].hasOwnProperty("doc_description")){$(".all_results_filter_container").append("<div class='search_result_content'><div class='search_result_content_cat'><span>Document</span></div><div class='search_result_content_data'><a href='"+bW[b9].doc_path+"'>"+bW[b9].doc_title+"</a><div class='faq_result_data'><div class='faq_shoeMoreLess_Content'><p>"+bW[b9].doc_description+"</p></div></div><a href='javascript:void(0);' class='show_more hide'>Show More</a></div></div>")
}else{$(".all_results_filter_container").append("<div class='search_result_content'><div class='search_result_content_cat'><span>Document</span></div><div class='search_result_content_data'><a href='"+bW[b9].doc_path+"'>"+bW[b9].doc_title+"</a></div></div>")
}}}}}}}}aG();
bd();
var bX=$("ul.search_select a.active").attr("index");
var e=bX.replace(" ","_");
var bU=e.toLowerCase();
if(bU=="all_results"){$(".search_result_filters_nonProducts").addClass("hide");
$(".result_filters_other").removeClass("author_hide");
$("."+bU+"_filter_container").removeClass("hide");
$(".search_result_filters_"+bU).removeClass("author_hide")
}F()
}else{aT();
bd();
var bX=$("ul.search_select a.active").attr("index");
var e=bX.replace(" ","_");
var bU=e.toLowerCase();
$("."+bU+"_no_result").removeClass("hide");
if(bU=="all_results"){$(".result_filters_other").addClass("author_hide");
$("."+bU+"_filter_container").addClass("hide");
$(".search_result_filters_"+bU).addClass("author_hide")
}}$(".all_results_filter_container .faq_result_data .faq_shoeMoreLess_Content").each(function(){var ce=$(this).innerHeight();
if(ce>40){if($(this).parent().next(".show_more").html()!="View Less"){$(this).parent().next(".show_more").removeClass("hide");
$(this).addClass("faq_showMore")
}}else{if(ce==40&&$(this).parent().next(".show_more").html()!="View Less"){}else{$(this).parent().next(".show_more").addClass("hide");
$(this).removeClass("faq_showMore")
}}});
$("#loadingMask").fadeOut(100);
if(window.innerWidth>=768){a8()
}T()
}function K(){$(".faqs_result_count").addClass("hide");
$(".locations_result_count").addClass("hide");
$(".search_result_filters_nonProducts").addClass("hide");
if(aY.length>0){$(".products_no_result").addClass("hide");
for(var bV=0;
bV<aY.length;
bV++){if(aY[bV].hasOwnProperty("enable_search_boosting")&&aY[bV].enable_search_boosting=="true"){if(aY[bV].hasOwnProperty("search_boost_description")&&aY[bV].search_boost_description!==""){$(".search-results .products_filter_container .search_result_content").append("<div class='product-desc-featured'><div class='featured-result-mobile'><span class='featured-result-label'>"+aY[bV].feature_result_label+"</span></div><div class='search_result_content_data search_result_content_featured'><a href='"+aY[bV].product_page+"' class='boosted_search' data-boosted-result='"+aL[bV].product_title+"'>"+aY[bV].product_title+"</a><p>"+aY[bV].search_boost_description+"</p></div><div class='featured-result-desktopandtablet'><span class='featured-result-label'>"+aY[bV].feature_result_label+"</span></div></div>")
}else{$(".search-results .products_filter_container .search_result_content").append("<div class='product-desc-featured'><div class='featured-result-mobile'><span class='featured-result-label'>"+aY[bV].feature_result_label+"</span></div><div class='search_result_content_data search_result_content_featured'><a href='"+aY[bV].product_page+"' class='boosted_search' data-boosted-result='"+aL[bV].product_title+"'>"+aY[bV].product_title+"</a><p>"+aY[bV].product_desc+"</p></div><div class='featured-result-desktopandtablet'><span class='featured-result-label'>"+aY[bV].feature_result_label+"</span></div></div>")
}}else{$(".search-results .products_filter_container .search_result_content").append("<div class='product-desc'><div class='search_result_content_data'><a href='"+aY[bV].product_page+"'>"+aY[bV].product_title+"</a><p>"+aY[bV].product_desc+"</p></div></div>")
}}y();
var e=$("ul.search_select a.active").attr("index");
var bW=e.replace(" ","_");
var bU=bW.toLowerCase();
if(bU=="products"){$(".search_result_filters_nonProducts").addClass("hide");
$(".result_filters_other").removeClass("author_hide");
$("."+bU+"_filter_container").removeClass("hide");
$(".search_result_filters_"+bU).removeClass("author_hide")
}}else{aT();
y();
var e=$("ul.search_select a.active").attr("index");
var bW=e.replace(" ","_");
var bU=bW.toLowerCase();
$("."+bU+"_no_result").removeClass("hide");
if(bU=="products"){$(".result_filters_other").addClass("author_hide");
$("."+bU+"_filter_container").addClass("hide");
$(".search_result_filters_"+bU).addClass("author_hide")
}}$(".search_result_count .products_result_count").text(aY.length);
$(".search_result_count .products_result_count").removeClass("hide");
$(".location-search .search_result_count").removeClass("hide");
$("#loadingMask").fadeOut(100);
$(".search-results .products_filter_container .search_result_content").children().show();
if(window.innerWidth>=768){$(".search-results .products_filter_container .search_result_content").children().hide();
B()
}G()
}function J(){$(".all_results_no_result.zero_result_found").addClass("hide");
$(".search_result_count").addClass("hide");
var e=new Date().getDay();
$(".all_results_filter_container").children().remove();
if(aj==""){$(".all_results_filter_container").addClass("hide")
}if(aj!=""){$.ajax({type:"GET",url:"/dotcom/search",async:false,data:{searchString:aj,currentDay:e,searchingFor:"allResults"},success:function(bU,bW,bV){console.log(bU);
C=bU.all_results;
$(".number-of-results-in-all-category-search").val(C.length);
aL=C;
$(".search_result_categories").removeClass("hide");
if(p<aL.length){a4(aL,p,h);
af();
bk()
}else{a4(aL,aL.length,h);
af();
bk()
}},error:function(bV,bU,bW){console.log("Error occured");
$("#loadingMask").fadeOut(100)
}})
}}function r(){var e=new Date().getDay();
$(".faqs_filter_container .sun-faqs-page-list.sun-faqs-page-list-alt").children().remove();
if(aj==""){$(".faqs_filter_container .sun-faqs-page-list.sun-faqs-page-list-alt").hide()
}if(aj!=""){$.ajax({type:"GET",url:"/dotcom/search",async:false,data:{searchString:aj,currentDay:e,searchingFor:"Faqs"},success:function(bU,bW,bV){$(".search_result_categories").removeClass("hide");
R=bU.location_results;
ar=bU.people_results;
aC=bU.faq_results;
aN()
},error:function(bV,bU,bW){console.log("Error occured");
$("#loadingMask").fadeOut(100)
}})
}}function bu(){var bU=new Date().getDay();
$(".products_filter_container .search_result_content").children().remove();
if(aj==""){$(".products_filter_container .search_result_content").hide()
}var e=a0("productTag");
if(aj!=""){$.ajax({type:"GET",url:"/dotcom/search",async:false,data:{searchString:aj,currentDay:bU,productTag:e,searchingFor:"Products"},success:function(bV,bX,bW){$(".search_result_categories").removeClass("hide");
R=bV.location_results;
ar=bV.people_results;
aC=bV.faq_results;
aY=bV.product_results;
K()
},error:function(bW,bV,bX){console.log("Error occured");
$("#loadingMask").fadeOut(100)
}})
}}function u(b0){$("#loadingMask").show();
a2=parseInt($(".resources_result_show_more_results a").attr("data-search-visible-items-limit"));
ah=0;
var ca=[];
var bY=[];
var b7=[];
var bV=[];
var b2=false;
var b9=false;
var b1=false;
var b8=false;
var bW=false;
var e=false;
var bZ=0;
var bX=[];
$(".search_result_description .search-results .resources_filter_container .filter-no-result").remove();
$(".search_result_description .search-results .resources_filter_container .search_result_content").children().remove();
$(".location-search .search_result_count").addClass("hide");
if(window.innerWidth<768){$(".resources_filter_mobile .resource-type input").each(function(cb){if($(this).is(":checked")){b2=true;
if(!$(this).hasClass("dontAdd")){ca.push($(this).val())
}}if(!($(this).is(":checked"))){b1=true
}});
$(".resources_filter_mobile .article-type input").each(function(cb){if($(this).is(":checked")){b9=true;
bY.push($(this).val())
}if(!($(this).is(":checked"))){b8=true
}})
}if(window.innerWidth>=768){$(".resources_filter_desktop .resource-type input").each(function(cb){if($(this).is(":checked")){b2=true;
if(!$(this).hasClass("dontAdd")){ca.push($(this).val())
}}if(!($(this).is(":checked"))){b1=true
}});
$(".resources_filter_desktop .article-type input").each(function(cb){if($(this).is(":checked")){b9=true;
bY.push($(this).val())
}if(!($(this).is(":checked"))){b8=true
}})
}if(b9==false&&b2==false){H=Q;
H=aV(H,"resource_page");
ad(H,b0,a2,ah)
}else{if(b2==false||b9==false){var bU=[];
H=bU;
ad(H,b0,a2,ah)
}}if(b2==true&&b9==true){if(b8==true){bW=true;
for(var b5=0;
b5<Q.length;
b5++){for(var b4=0;
b4<bY.length;
b4++){b7.push($(Q[b5]).filter(function(cb,cc){return cc.resource_content_type===bY[b4]
}))
}}}else{if(b8==false){b7=Q;
bZ=bZ+1
}}if(b1==true){if(bW==true){e=true;
for(var b5=0;
b5<b7.length;
b5++){for(var b3=0;
b3<b7[b5].length;
b3++){for(var b4=0;
b4<ca.length;
b4++){bV.push($(b7[b5][b3]).filter(function(cb,cc){if(cc.resource_primary_tag.toString().indexOf(ca[b4])>=0||cc.resource_secondary_tag.toString().indexOf(ca[b4])>=0){return true
}else{return false
}}))
}}}}else{if(bW==false){for(var b5=0;
b5<b7.length;
b5++){for(var b4=0;
b4<ca.length;
b4++){bV.push($(b7[b5]).filter(function(cb,cc){if(cc.resource_primary_tag.toString().indexOf(ca[b4])>=0||cc.resource_secondary_tag.toString().indexOf(ca[b4])>=0){return true
}else{return false
}}))
}}}}}else{bV=b7;
bZ=bZ+1
}if(bZ==2){H=bV;
H=aV(H,"resource_page");
ad(H,b0,a2,ah)
}else{for(var b6=0;
b6<bV.length;
b6++){for(var b5=0;
b5<bV[b6].length;
b5++){bX.push(bV[b6][b5])
}}H=bX;
H=aV(H,"resource_page");
ad(H,b0,a2,ah)
}}}$(document).on("change",".resources_filter_desktop .resource-type input, .resources_filter_desktop .article-type input",function(b0){var bW="refineResult";
var bV=$(this).parents().hasClass("search_detail_services_level1");
var bU=false;
var bX=true;
var bZ=$(this).parents(".search_detail_services_level1").find("input").length;
var bY=0;
if($(this).parents(".sun-checkbox-input-field").next().hasClass("search_detail_services_level1")){if($(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").is(":visible")){$(this).parents(".sun-checkbox-input-field").next().find(".sun-checkbox-input-field span").removeClass("sun-checked");
$(this).parents(".sun-checkbox-input-field").next().find(".sun-checkbox-input-field span input").prop("checked",false);
$(this).parents(".sun-checkbox-input-field").next().slideToggle()
}else{$(this).parents(".sun-checkbox-input-field").next().slideToggle();
$(this).parents(".sun-checkbox-input-field").next().find(".sun-checkbox-input-field span").addClass("sun-checked");
$(this).parents(".sun-checkbox-input-field").next().find(".sun-checkbox-input-field span input").prop("checked",true)
}}if(bV){$(this).parents(".search_detail_services_level1").find("input").each(function(){bU=$(this).is(":checked");
if(bU==false){$(this).parents(".search_detail_services_level1").prev().find("input").addClass("dontAdd");
bX=false;
bY=bY+1
}});
if(bY==bZ){bX=true
}if(bX){$(this).parents(".search_detail_services_level1").find("input").each(function(){$(this).parents(".search_detail_services_level1").prev().find("input").removeClass("dontAdd")
})
}}u(bW)
});
function bh(bX){$(".resources_filter_desktop .search_filter_result_cat.resource-type .search_detail_services_level0").children().remove();
$(".resources_filter_mobile .filter_tog.resource-type .filter_show_hide").children().remove();
$(".resources_filter_desktop .search_filter_result_cat.article-type .article-type-level-1").children().remove();
$(".resources_filter_mobile .filter_tog.article-type .filter_show_hide").children().remove();
var b6=[];
var b1=[];
var b3=[];
for(var b0=0;
b0<bX.length;
b0++){var b8=bX[b0].resource_primary_tag;
var b4=bX[b0].resource_secondary_tag;
var b7=bX[b0].resource_content_type;
if(b8!=undefined&&b8!=""&&b8!=null){if(b8.indexOf("/")>0){var b5=b8.split("/");
if(b6.indexOf(b5[0])==-1){b6.push(b5[0])
}if(b1.indexOf(b5[0]+"/"+b5[1])==-1){b1.push(b5[0]+"/"+b5[1])
}}else{if(b6.indexOf(b8)==-1){b6.push(b8)
}}}if(b4!=undefined&&b4!=""&&b4!=null){if(b4.indexOf(",")!=-1){var bZ=[];
bZ=b4.split(",");
for(var bW=0;
bW<bZ.length;
bW++){if(bZ[bW].indexOf("/")>0){var bV=bZ[bW].split("/");
if(b6.indexOf(bV[0])==-1){b6.push(bV[0])
}if(b1.indexOf(bV[0]+"/"+bV[1])==-1){b1.push(bV[0]+"/"+bV[1])
}}else{if(b6.indexOf(bZ[bW])==-1){b6.push(bZ[bW])
}}}}else{if(b4.indexOf("/")>0){var bV=b4.split("/");
if(b6.indexOf(bV[0])==-1){b6.push(bV[0])
}if(b1.indexOf(bV[0]+"/"+bV[1])==-1){b1.push(bV[0]+"/"+bV[1])
}}else{if(b6.indexOf(b4)==-1){b6.push(b4)
}}}}if(b7!=undefined&&b7!=""&&b7!=null){if(b3.indexOf(b7)==-1){b3.push(b7)
}}}for(var b0=0;
b0<b6.length;
b0++){$(".resources_filter_desktop .search_filter_result_cat.resource-type .search_detail_services_level0").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' class='suntrust-checkbox' value='"+b6[b0]+"' name='"+b6[b0]+"' /></span></div><label class='suntrust-checkbox-label'>"+b6[b0]+" <span class='resource-child-filter-count'></span></label></div>");
$(".resources_filter_mobile .filter_tog.resource-type .filter_show_hide").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' class='suntrust-checkbox' value='"+b6[b0]+"' name='"+b6[b0]+"' /></span></div><label class='suntrust-checkbox-label'>"+b6[b0]+" <span class='resource-child-filter-count'></span></label></div>")
}for(var bY=0;
bY<b1.length;
bY++){$(".resources_filter_desktop .search_filter_result_cat.resource-type input").each(function(ca){if(b1[bY].indexOf($(this).val())!=-1){if($(this).parents(".sun-checkbox-input-field").next().attr("class")!=undefined&&$(this).parents(".sun-checkbox-input-field").next().attr("class").indexOf("search_detail_services_level1")!=-1){var cb=b1[bY].split("/")[1];
$(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' class='suntrust-checkbox' value='"+b1[bY]+"' name='"+cb+"' /></span></div><label class='suntrust-checkbox-label'>"+cb+" </label></div>")
}else{if(!$(this).parents().hasClass("search_detail_services_level1")){var cb=b1[bY].split("/")[1];
$(this).parents(".sun-checkbox-input-field").after("<div class='search_detail_services_level1' ><div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' class='suntrust-checkbox' value='"+b1[bY]+"' name='"+cb+"'/></span></div><label class='suntrust-checkbox-label'>"+cb+"</label></div></div>")
}}}});
$(".resources_filter_mobile .filter_tog.resource-type .filter_show_hide input").each(function(ca){if(b1[bY].indexOf($(this).val())!=-1){if($(this).parents(".sun-checkbox-input-field").next().attr("class")!=undefined&&$(this).parents(".sun-checkbox-input-field").next().attr("class").indexOf("search_detail_services_level1")!=-1){var cb=b1[bY].split("/")[1];
$(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' class='suntrust-checkbox' value='"+b1[bY]+"' name='"+cb+"' /></span></div><label class='suntrust-checkbox-label'>"+cb+" </label></div>")
}else{if(!$(this).parents().hasClass("search_detail_services_level1")){var cb=b1[bY].split("/")[1];
$(this).parents(".sun-checkbox-input-field").after("<div class='search_detail_services_level1' ><div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' class='suntrust-checkbox' value='"+b1[bY]+"' name='"+cb+"'/></span></div><label class='suntrust-checkbox-label'>"+cb+"</label></div></div>")
}}}})
}$(".resources_filter_desktop .search_filter_result_cat.resource-type .search_detail_services_level0 .sun-checkbox-input-field").each(function(ca){if($(this).next().attr("class")!=undefined&&$(this).next().attr("class").indexOf("search_detail_services_level1")!=-1){var cb=$(this).next().children().length;
$(this).find(".resource-child-filter-count").text("("+cb+")")
}else{$(this).find(".resource-child-filter-count").remove()
}});
$(".resources_filter_mobile .filter_tog.resource-type .filter_show_hide .sun-checkbox-input-field").each(function(ca){if($(this).next().attr("class")!=undefined&&$(this).next().attr("class").indexOf("search_detail_services_level1")!=-1){var cb=$(this).next().children().length;
$(this).find(".resource-child-filter-count").text("("+cb+")")
}else{$(this).find(".resource-child-filter-count").remove()
}});
var b2=$(".resources_filter_desktop .search_filter_result_cat.resource-type input").length;
var bU=$(".resources_filter_mobile .filter_tog.resource-type .filter_show_hide input").length;
$(".resources_filter_desktop .search_filter_result_cat.resource-type h4 strong span").text(b2);
$(".resources_filter_mobile .filter_tog.resource-type span.resources-count").text(bU);
for(var b0=0;
b0<b3.length;
b0++){$(".resources_filter_desktop .search_filter_result_cat.article-type .article-type-level-1").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' class='suntrust-checkbox' value='"+b3[b0]+"' name='"+b3[b0]+"' /></span></div><label class='suntrust-checkbox-label'>"+b3[b0]+"</label></div>");
$(".resources_filter_mobile .filter_tog.article-type .filter_show_hide").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' class='suntrust-checkbox' value='"+b3[b0]+"' name='"+b3[b0]+"' /></span></div><label class='suntrust-checkbox-label'>"+b3[b0]+"</label></div>")
}var b9=$(".resources_filter_desktop .search_filter_result_cat.article-type .article-type-level-1 input").length;
var e=$(".resources_filter_mobile .filter_tog.article-type .filter_show_hide input").length;
$(".resources_filter_desktop .search_filter_result_cat.article-type h4 strong span").text(b9);
$(".resources_filter_mobile .filter_tog.article-type span.article-count").text(e)
}function bH(){var bU=new Date().getDay();
$(".resources_filter_container .search_result_content").children().remove();
if(aj==""){$(".resources_filter_container .search_result_content").hide()
}var e=a0("resourcesTag");
if(aj!=""){$.ajax({type:"GET",url:"/dotcom/search",data:{searchString:aj,currentDay:bU,resourcesTag:e,searchingFor:"Resource"},success:function(bV,bX,bW){$(".search_result_categories").removeClass("hide");
Q=bV.resource_results;
H=Q;
bh(H);
V();
ad(Q,"newSearch",a2,ah)
},error:function(bW,bV,bX){console.log("Error occured");
$("#loadingMask").fadeOut(100)
}})
}}function bp(e,b1,ca){if(!bw){var cb=a0("locationServices");
if(cb!=null&&cb!=""&&cb!=undefined&&cb!="undefined"){ca=cb
}}bc=0;
ay=parseInt($(".location_result_show_more_results a").attr("data-search-visible-items-limit"));
var cc=[];
var b4=[];
var bY=[];
var b2=[];
var b8=[];
var bZ=[];
cc=a5(".locations_filter_mobile .mobile-services");
b4=a5(".locations_filter_mobile .mobile-state");
bY=a5(".locations_filter_mobile .mobile-city");
bZ=a5(".locations_filter_desktop .search_detail_city");
b8=a5(".locations_filter_desktop .search_detail_state");
b2=a5(".locations_filter_desktop .search_detail_services");
if(b1=="refineResult"){j=""
}else{if(b1=="newSearch"){j="";
R=""
}}A=[];
W=[];
c=[];
$(".locations_no_result").addClass("hide");
$(".faqs_no_result.zero_result_found").addClass("hide");
$(".locations_filter_desktop .search_result_filters.col-lg-4.col-md-4.col-sm-4.hidden-xs").hide();
$(".location_result_show_more_results").addClass("hide");
$(".search_result_show_more_results").addClass("hide");
$(".location-search .search_result_count").addClass("hide");
$(".search_result_description .search-results .locations_filter_container .filter-no-result").remove();
$(".search_result_description .search-results .locations_filter_container .location_mq_results").children().remove();
$(".search_result_description .search-results .locations_filter_container .location_aem_results").children().remove();
$(".locations_filter_desktop").hide();
$(".locations_filter_mobile").addClass("hide");
$(".locations_filter_container").addClass("hide");
$(".locations_filter_desktop .search_by_filter.search_detail_services .search_detail_services_level0").children().remove();
$(".locations_filter_desktop .search_detail_state .search_detail_state_city_select").children().remove();
$(".locations_filter_desktop .search_detail_city .search_detail_state_city_select").children().remove();
$(".locations_filter_mobile .filter_tog .mobile-services").children().remove();
$(".locations_filter_mobile .filter_tog .mobile-state").children().remove();
$(".locations_filter_mobile .filter_tog .mobile-city").children().remove();
$(".locations_filter_desktop .search_by_filter.search_detail_location_radius").show();
$(".locations_filter_mobile .mobile-radius-filter").show();
var b0=new Date().getDay();
var bV=[];
var bW=[];
var b5="";
by=[];
var b7=false;
var cd=false;
var b3=false;
var bU=e;
var b9=R.length;
var b6;
if(aj==""){$(".locations_filter_desktop").hide();
$(".locations_filter_mobile").addClass("hide");
$(".search_result_description .search-results .locations_filter_container").addClass("hide")
}if(aj!=""){$("#loadingMask").show().focus();
var bX="https://www.mapquestapi.com/search/v2/radius?origin="+aj+"&radius="+bU+"&maxMatches=500&ambiguities=ignore&hostedData=mqap.32547_SunTrust_Branch_Loc&outFormat=json&key=Gmjtd|lu6zn1ua2d,70=o5-l0850";
$.ajax({type:"GET",url:bX,async:false,success:function(ci,cj,cA){if(ci.info.statusCode!="500"){bf=parseInt(ci.resultsCount);
if(bf!=0&&ci.searchResults!=undefined){for(var cG=0;
cG<ci.searchResults.length;
cG++){var cx=ci.searchResults[cG].fields.lat;
var cv=ci.searchResults[cG].fields.lng;
bW[cG]=ci.searchResults[cG].fields.postal;
if(cx!=""&&cx!="null"&&cx!=null&&cv!="null"&&cv!=null&&cv!=""){bV[cG]=cx.toString()+cv.toString()
}else{bV[cG]=0
}}bV=$.unique(bV);
bW=$.unique(bW);
for(var cG=0;
cG<bW.length;
cG++){if(b5.length==0){b5=bW[cG]
}else{b5=b5+","+bW[cG]
}}}if(j.length==0){b5="mqPostalCodeData"+b5;
$.ajax({type:"GET",url:"/dotcom/search",async:false,data:{searchString:b5,currentDay:b0,LocationService:ca,searchingFor:"Locations"},success:function(cQ,di,dd){j=cQ.location_results;
var cN=j.length;
if(o!=undefined&&m!=undefined){for(var dk=0;
dk<cN;
dk++){var cZ=j[dk].loc_latitude;
var cY=j[dk].loc_longitude;
var c5=bg(o,m,cZ,cY);
j[dk].loc_miles_away=c5
}}if(R.length==0){$.ajax({type:"GET",url:"/dotcom/search",async:false,data:{searchString:aj,currentDay:b0,LocationService:ca,searchingFor:"Locations"},success:function(dq,dU,dP){var ds=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
R=dq.location_results;
var dv=R.length;
if(o!=undefined&&m!=undefined){for(var dW=0;
dW<dv;
dW++){var dA=R[dW].loc_latitude;
var dz=R[dW].loc_longitude;
var dG=bg(o,m,dA,dz);
R[dW].loc_miles_away=dG
}}if(bf!=0&&j.length>0){for(var dS=0;
dS<bV.length;
dS++){by.push($(j).filter(function(dY,dZ){return dZ.loc_latitude_longitude===bV[dS]
}))
}var dD=[];
for(var dW=0;
dW<by.length;
dW++){for(var dV=0;
dV<by[dW].length;
dV++){dD.push(by[dW][dV].loc_detail_page)
}}for(var dW=0;
dW<R.length;
dW++){for(var dV=0;
dV<dD.length;
dV++){if(dD[dV]!=R[dW].loc_detail_page){b6="notPresent"
}else{b6="present";
break
}}if(b6=="notPresent"){R[dW].loc_result_type="AEM";
c.push(R[dW])
}}for(var dW=0;
dW<by.length;
dW++){for(var dV=0;
dV<by[dW].length;
dV++){by[dW][dV].loc_result_type="MQ";
A.push(by[dW][dV]);
W.push(by[dW][dV])
}}for(var dW=0;
dW<c.length;
dW++){A.push(c[dW])
}}else{if(bf==0||j.length==0){for(var dW=0;
dW<R.length;
dW++){R[dW].loc_result_type="AEM";
c.push(R[dW])
}A=c
}}var dy=[];
var dr=[];
var dt=[];
var dC=[];
var dO=[];
var dH=[];
var dE=[];
var dN=[];
var du=[];
var dx=[];
var dm=[];
var dK=[];
var dB=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
for(var dW=0;
dW<A.length;
dW++){dy[dW]=A[dW].loc_services;
dO[dW]=A[dW].loc_services_tag;
for(var dS=0;
dS<dy[dW].length;
dS++){if(dt.indexOf(dy[dW][dS].trim())==-1){dt.push(dy[dW][dS].trim())
}}for(var dV=0;
dV<dO[dW].length;
dV++){if(dE.indexOf(dO[dW][dV])==-1){dE.push(dO[dW][dV])
}}du[dW]=A[dW].loc_state+":"+A[dW].loc_state_tag;
$.each(du,function(dY,dZ){if($.inArray(dZ,dx)===-1){dx.push(dZ)
}});
dm[dW]=A[dW].loc_city;
$.each(dm,function(dY,dZ){if($.inArray(dZ,dK)===-1){dK.push(dZ)
}})
}var dF=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
dt.sort();
dE.sort();
dx.sort();
dK.sort();
var dF=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
for(var dX=0;
dX<dt.length;
dX++){$(".locations_filter_desktop .search_by_filter.search_detail_services .search_detail_services_level0").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+dE[dX]+"' class='suntrust-checkbox' value='"+dE[dX]+"' name='"+dE[dX]+"' aria-label='"+dE[dX]+"' /></span></div><label for='"+dE[dX]+"'class='suntrust-checkbox-label'>"+dt[dX]+"</label></div>");
$(".mobile_filter_search .locations_filter_mobile .mobile-services").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+dE[dX]+"' class='suntrust-checkbox' value='"+dE[dX]+"' name='"+dE[dX]+"' aria-label='"+dE[dX]+"' /></span></div><label for='"+dE[dX]+"'class='suntrust-checkbox-label'>"+dt[dX]+"</label></div>")
}$(".locations_filter_desktop .search_detail_services_level0 input").each(function(dY){if(($(this).val()=="branch")){$(this).parent().parent().parent().after("<div class='desktop search_detail_services_level1'></div>")
}});
$(".locations_filter_desktop .search_detail_services_level0 input").each(function(dZ){if(($(this).val()=="drive-thru-banking")||($(this).val()=="weekend-hours")||($(this).val()=="instore-branch")){var dY=$(this).parent().parent().parent().detach();
$(".locations_filter_desktop .desktop.search_detail_services_level1").append(dY)
}});
$(".locations_filter_mobile .mobile-services-tog input").each(function(dY){if(($(this).val()=="branch")){$(this).parent().parent().parent().after("<div class='mobile search_detail_services_level1'></div>")
}});
$(".locations_filter_mobile .mobile-services-tog input").each(function(dZ){if(($(this).val()=="drive-thru-banking")||($(this).val()=="weekend-hours")||($(this).val()=="instore-branch")){var dY=$(this).parent().parent().parent().detach();
$(".locations_filter_mobile .mobile.search_detail_services_level1").append(dY)
}});
if($(".locations_filter_mobile .search_detail_services_level1").children().length==0){$(".locations_filter_mobile .search_detail_services_level1").remove()
}if($(".locations_filter_desktop .search_detail_services_level1").children().length==0){$(".locations_filter_desktop .search_detail_services_level1").remove()
}for(var dR=0;
dR<dx.length;
dR++){var dL=dx[dR].substring(0,dx[dR].indexOf(":"));
var dQ=dx[dR].substring(dx[dR].indexOf(":")+1,dx[dR].length);
$(".locations_filter_desktop .search_detail_state .search_detail_state_city_select").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+dL+"'class='suntrust-checkbox' value='"+dQ+"' name='"+dL+"' aria-label='"+dL+"' /></span></div><label for='"+dL+"'class='suntrust-checkbox-label'>"+dL+"</label></div>");
$(".locations_filter_mobile .mobile-state").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input id='"+dL+"'type='checkbox' class='suntrust-checkbox' value='"+dQ+"' name='"+dL+"' aria-label='"+dL+"' /></span></div><label for='"+dL+"'class='suntrust-checkbox-label'>"+dL+"</label></div>")
}for(var dJ=0;
dJ<dK.length;
dJ++){$(".locations_filter_desktop .search_detail_city .search_detail_state_city_select").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+dK[dJ]+"'class='suntrust-checkbox' value='"+dK[dJ]+"' name='"+dK[dJ]+"' aria-label='"+dK[dJ]+"' /></span></div><label for='"+dK[dJ]+"' class='suntrust-checkbox-label'>"+dK[dJ]+"</label></div>");
$(".locations_filter_mobile .mobile-city").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+dK[dJ]+"' class='suntrust-checkbox' value='"+dK[dJ]+"' name='"+dK[dJ]+"' aria-label='"+dK[dJ]+"' /></span></div><label for='"+dK[dJ]+"' class='suntrust-checkbox-label'>"+dK[dJ]+"</label></div>")
}af();
var dn=$(".locations_filter_desktop .search_detail_state .search_detail_state_city_select").children().length;
var dT=$(".locations_filter_desktop .search_detail_city .search_detail_state_city_select").children().length;
$(".locations_filter_desktop .search_detail_city h4 span").text(dT);
$(".locations_filter_desktop .city-count").text(dT);
$(".locations_filter_mobile .city-count").text(dT);
$(".locations_filter_desktop .search_detail_state h4 span").text(dn);
$(".locations_filter_mobile .state-count").text(dn);
if(window.innerWidth<768){if(b1=="newSearch"){bK()
}else{if(b1=="refineResult"){S(".locations_filter_mobile .mobile-services",cc);
S(".locations_filter_mobile .mobile-state",b4);
S(".locations_filter_mobile .mobile-city",bY)
}}}else{if(b1=="newSearch"){bK()
}else{if(b1=="refineResult"){S(".locations_filter_desktop .search_detail_services",b2);
S(".locations_filter_desktop .search_detail_state",b8);
S(".locations_filter_desktop .search_detail_city",bZ)
}}}$(".search_result_filters.col-lg-4.col-md-4.col-sm-4.hidden-xs").show();
var dw=$(".locations_filter_desktop .search_detail_services_level0").children().length;
var dp=$(".search_detail_state .search_detail_state_city_select").children().length;
var dM=$(".search_detail_city .search_detail_state_city_select").children().length;
if(dw!=0||dp!=0||dM!=0){$(".locations_filter_desktop").show();
$(".locations_filter_mobile").removeClass("hide")
}$(".locations_filter_container").removeClass("hide");
var dF=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
if(window.innerWidth<768){$(".locations_filter_mobile .mobile-city input").each(function(dY){if(!($(this).is(":checked"))){b3=true
}});
$(".locations_filter_mobile .mobile-state input").each(function(dY){if(!($(this).is(":checked"))){cd=true
}});
$(".locations_filter_mobile .mobile-services input").each(function(dY){if(!($(this).is(":checked"))){b7=true
}})
}if(window.innerWidth>=768){$(".locations_filter_desktop .search_detail_city input").each(function(dY){if(!($(this).is(":checked"))){b3=true
}});
$(".locations_filter_desktop .search_detail_state input").each(function(dY){if(!($(this).is(":checked"))){cd=true
}});
$(".locations_filter_desktop .search_detail_services_level0 input").each(function(dY){if(!($(this).is(":checked"))){b7=true
}})
}if(b1=="newSearch"){bz=A;
ai(bz,"singleDimension","newSearch",ay,bc)
}else{if((b1=="refineResult")&&(b3==true||cd==true||b7==true)){aF(bU,b1)
}else{if((b1=="refineResult")&&(b3==false&&cd==false&&b7==false)){bz=A;
ai(bz,"singleDimension","refineResult",ay,bc)
}}}var dI=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
},error:function(dm,dp,dn){console.log("Error occured");
$("#loadingMask").fadeOut(100)
}})
}else{var cU=R.length;
if(bf!=0&&j.length>0){for(var dg=0;
dg<bV.length;
dg++){by.push($(j).filter(function(dm,dn){return dn.loc_latitude_longitude===bV[dg]
}))
}var c2=[];
for(var dk=0;
dk<by.length;
dk++){for(var dj=0;
dj<by[dk].length;
dj++){c2.push(by[dk][dj].loc_detail_page)
}}for(var dk=0;
dk<R.length;
dk++){for(var dj=0;
dj<c2.length;
dj++){if(c2[dj]!=R[dk].loc_detail_page){b6="notPresent"
}else{b6="present";
break
}}if(b6=="notPresent"){R[dk].loc_result_type="AEM";
c.push(R[dk])
}}for(var dk=0;
dk<by.length;
dk++){for(var dj=0;
dj<by[dk].length;
dj++){by[dk][dj].loc_result_type="MQ";
A.push(by[dk][dj]);
W.push(by[dk][dj])
}}for(var dk=0;
dk<c.length;
dk++){A.push(c[dk])
}}else{if(bf==0||j.length==0){for(var dk=0;
dk<R.length;
dk++){R[dk].loc_result_type="AEM";
c.push(R[dk])
}A=c
}}var cX=[];
var cR=[];
var cS=[];
var c1=[];
var dc=[];
var c6=[];
var c3=[];
var db=[];
var cT=[];
var cW=[];
var cM=[];
var c8=[];
var c0=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
for(var dk=0;
dk<A.length;
dk++){cX[dk]=A[dk].loc_services;
dc[dk]=A[dk].loc_services_tag;
for(var dg=0;
dg<cX[dk].length;
dg++){if(cS.indexOf(cX[dk][dg].trim())==-1){cS.push(cX[dk][dg].trim())
}}for(var dj=0;
dj<dc[dk].length;
dj++){if(c3.indexOf(dc[dk][dj])==-1){c3.push(dc[dk][dj])
}}cT[dk]=A[dk].loc_state+":"+A[dk].loc_state_tag;
$.each(cT,function(dm,dn){if($.inArray(dn,cW)===-1){cW.push(dn)
}});
cM[dk]=A[dk].loc_city;
$.each(cM,function(dm,dn){if($.inArray(dn,c8)===-1){c8.push(dn)
}})
}var c4=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
cS.sort();
c3.sort();
cW.sort();
c8.sort();
var c4=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
for(var dl=0;
dl<cS.length;
dl++){$(".locations_filter_desktop .search_by_filter.search_detail_services .search_detail_services_level0").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+c3[dl]+"' class='suntrust-checkbox' value='"+c3[dl]+"' name='"+c3[dl]+"' aria-label='"+c3[dl]+"' /></span></div><label for='"+c3[dl]+"'class='suntrust-checkbox-label'>"+cS[dl]+"</label></div>");
$(".mobile_filter_search .locations_filter_mobile .mobile-services").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+c3[dl]+"' class='suntrust-checkbox' value='"+c3[dl]+"' name='"+c3[dl]+"' aria-label='"+c3[dl]+"' /></span></div><label for='"+c3[dl]+"'class='suntrust-checkbox-label'>"+cS[dl]+"</label></div>")
}$(".locations_filter_desktop .search_detail_services_level0 input").each(function(dm){if(($(this).val()=="branch")){$(this).parent().parent().parent().after("<div class='desktop search_detail_services_level1'></div>")
}});
$(".locations_filter_desktop .search_detail_services_level0 input").each(function(dn){if(($(this).val()=="drive-thru-banking")||($(this).val()=="weekend-hours")||($(this).val()=="instore-branch")){var dm=$(this).parent().parent().parent().detach();
$(".locations_filter_desktop .desktop.search_detail_services_level1").append(dm)
}});
$(".locations_filter_mobile .mobile-services-tog input").each(function(dm){if(($(this).val()=="branch")){$(this).parent().parent().parent().after("<div class='mobile search_detail_services_level1'></div>")
}});
$(".locations_filter_mobile .mobile-services-tog input").each(function(dn){if(($(this).val()=="drive-thru-banking")||($(this).val()=="weekend-hours")||($(this).val()=="instore-branch")){var dm=$(this).parent().parent().parent().detach();
$(".locations_filter_mobile .mobile.search_detail_services_level1").append(dm)
}});
if($(".locations_filter_mobile .search_detail_services_level1").children().length==0){$(".locations_filter_mobile .search_detail_services_level1").remove()
}if($(".locations_filter_desktop .search_detail_services_level1").children().length==0){$(".locations_filter_desktop .search_detail_services_level1").remove()
}for(var df=0;
df<cW.length;
df++){var c9=cW[df].substring(0,cW[df].indexOf(":"));
var de=cW[df].substring(cW[df].indexOf(":")+1,cW[df].length);
$(".locations_filter_desktop .search_detail_state .search_detail_state_city_select").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+c9+"'class='suntrust-checkbox' value='"+de+"' name='"+c9+"' aria-label='"+c9+"' /></span></div><label for='"+c9+"'class='suntrust-checkbox-label'>"+c9+"</label></div>");
$(".locations_filter_mobile .mobile-state").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input id='"+c9+"'type='checkbox' class='suntrust-checkbox' value='"+de+"' name='"+c9+"' aria-label='"+c9+"' /></span></div><label for='"+c9+"'class='suntrust-checkbox-label'>"+c9+"</label></div>")
}for(var c7=0;
c7<c8.length;
c7++){$(".locations_filter_desktop .search_detail_city .search_detail_state_city_select").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+c8[c7]+"'class='suntrust-checkbox' value='"+c8[c7]+"' name='"+c8[c7]+"' aria-label='"+c8[c7]+"' /></span></div><label for='"+c8[c7]+"' class='suntrust-checkbox-label'>"+c8[c7]+"</label></div>");
$(".locations_filter_mobile .mobile-city").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+c8[c7]+"' class='suntrust-checkbox' value='"+c8[c7]+"' name='"+c8[c7]+"' aria-label='"+c8[c7]+"' /></span></div><label for='"+c8[c7]+"' class='suntrust-checkbox-label'>"+c8[c7]+"</label></div>")
}af();
var cO=$(".locations_filter_desktop .search_detail_state .search_detail_state_city_select").children().length;
var dh=$(".locations_filter_desktop .search_detail_city .search_detail_state_city_select").children().length;
$(".locations_filter_desktop .search_detail_city h4 span").text(dh);
$(".locations_filter_desktop .city-count").text(dh);
$(".locations_filter_mobile .city-count").text(dh);
$(".locations_filter_desktop .search_detail_state h4 span").text(cO);
$(".locations_filter_mobile .state-count").text(cO);
if(window.innerWidth<768){if(b1=="newSearch"){bK()
}else{if(b1=="refineResult"){S(".locations_filter_mobile .mobile-services",cc);
S(".locations_filter_mobile .mobile-state",b4);
S(".locations_filter_mobile .mobile-city",bY)
}}}else{if(b1=="newSearch"){bK()
}else{if(b1=="refineResult"){S(".locations_filter_desktop .search_detail_services",b2);
S(".locations_filter_desktop .search_detail_state",b8);
S(".locations_filter_desktop .search_detail_city",bZ)
}}}$(".search_result_filters.col-lg-4.col-md-4.col-sm-4.hidden-xs").show();
var cV=$(".locations_filter_desktop .search_detail_services_level0").children().length;
var cP=$(".search_detail_state .search_detail_state_city_select").children().length;
var da=$(".search_detail_city .search_detail_state_city_select").children().length;
if(cV!=0||cP!=0||da!=0){$(".locations_filter_desktop").show();
$(".locations_filter_mobile").removeClass("hide")
}$(".locations_filter_container").removeClass("hide");
var c4=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
if(window.innerWidth<768){$(".locations_filter_mobile .mobile-city input").each(function(dm){if(!($(this).is(":checked"))){b3=true
}});
$(".locations_filter_mobile .mobile-state input").each(function(dm){if(!($(this).is(":checked"))){cd=true
}});
$(".locations_filter_mobile .mobile-services input").each(function(dm){if(!($(this).is(":checked"))){b7=true
}})
}if(window.innerWidth>=768){$(".locations_filter_desktop .search_detail_city input").each(function(dm){if(!($(this).is(":checked"))){b3=true
}});
$(".locations_filter_desktop .search_detail_state input").each(function(dm){if(!($(this).is(":checked"))){cd=true
}});
$(".locations_filter_desktop .search_detail_services_level0 input").each(function(dm){if(!($(this).is(":checked"))){b7=true
}})
}if(b1=="newSearch"){bz=A;
ai(bz,"singleDimension","newSearch",ay,bc)
}else{if((b1=="refineResult")&&(b3==true||cd==true||b7==true)){aF(bU,b1)
}else{if((b1=="refineResult")&&(b3==false&&cd==false&&b7==false)){bz=A;
ai(bz,"singleDimension","refineResult",ay,bc)
}}}}},error:function(cM,cO,cN){console.log("Error occured");
$("#loadingMask").fadeOut(100)
}})
}else{var cK=R.length;
if(bf!=0&&j.length>0){for(var cD=0;
cD<bV.length;
cD++){by.push($(j).filter(function(cM,cN){return cN.loc_latitude_longitude===bV[cD]
}))
}var cq=[];
for(var cG=0;
cG<by.length;
cG++){for(var cE=0;
cE<by[cG].length;
cE++){cq.push(by[cG][cE].loc_detail_page)
}}for(var cG=0;
cG<R.length;
cG++){for(var cE=0;
cE<cq.length;
cE++){if(cq[cE]!=R[cG].loc_detail_page){b6="notPresent"
}else{b6="present";
break
}}if(b6=="notPresent"){R[cG].loc_result_type="AEM";
c.push(R[cG])
}}for(var cG=0;
cG<by.length;
cG++){for(var cE=0;
cE<by[cG].length;
cE++){by[cG][cE].loc_result_type="MQ";
A.push(by[cG][cE]);
W.push(by[cG][cE])
}}for(var cG=0;
cG<c.length;
cG++){A.push(c[cG])
}}else{if(bf==0||j.length==0){for(var cG=0;
cG<R.length;
cG++){R[cG].loc_result_type="AEM";
c.push(R[cG])
}A=c
}}var cu=[];
var cB=[];
var cz=[];
var ch=[];
var cr=[];
var cm=[];
var cL=[];
var cg=[];
var cH=[];
var cn=[];
var cf=[];
var cI=[];
var cs=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
for(var cG=0;
cG<A.length;
cG++){cu[cG]=A[cG].loc_services;
cr[cG]=A[cG].loc_services_tag;
for(var cD=0;
cD<cu[cG].length;
cD++){if(cz.indexOf(cu[cG][cD].trim())==-1){cz.push(cu[cG][cD].trim())
}}for(var cE=0;
cE<cr[cG].length;
cE++){if(cL.indexOf(cr[cG][cE])==-1){cL.push(cr[cG][cE])
}}cH[cG]=A[cG].loc_state+":"+A[cG].loc_state_tag;
$.each(cH,function(cM,cN){if($.inArray(cN,cn)===-1){cn.push(cN)
}});
cf[cG]=A[cG].loc_city;
$.each(cf,function(cM,cN){if($.inArray(cN,cI)===-1){cI.push(cN)
}})
}var cy=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
cz.sort();
cL.sort();
cn.sort();
cI.sort();
var cy=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
for(var ct=0;
ct<cz.length;
ct++){$(".locations_filter_desktop .search_by_filter.search_detail_services .search_detail_services_level0").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+cL[ct]+"' class='suntrust-checkbox' value='"+cL[ct]+"' name='"+cL[ct]+"' aria-label='"+cL[ct]+"' /></span></div><label for='"+cL[ct]+"'class='suntrust-checkbox-label'>"+cz[ct]+"</label></div>");
$(".mobile_filter_search .locations_filter_mobile .mobile-services").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+cL[ct]+"' class='suntrust-checkbox' value='"+cL[ct]+"' name='"+cL[ct]+"' aria-label='"+cL[ct]+"' /></span></div><label for='"+cL[ct]+"'class='suntrust-checkbox-label'>"+cz[ct]+"</label></div>")
}$(".locations_filter_desktop .search_detail_services_level0 input").each(function(cM){if(($(this).val()=="branch")){$(this).parent().parent().parent().after("<div class='desktop search_detail_services_level1'></div>")
}});
$(".locations_filter_desktop .search_detail_services_level0 input").each(function(cN){if(($(this).val()=="drive-thru-banking")||($(this).val()=="weekend-hours")||($(this).val()=="instore-branch")){var cM=$(this).parent().parent().parent().detach();
$(".locations_filter_desktop .desktop.search_detail_services_level1").append(cM)
}});
$(".locations_filter_mobile .mobile-services-tog input").each(function(cM){if(($(this).val()=="branch")){$(this).parent().parent().parent().after("<div class='mobile search_detail_services_level1'></div>")
}});
$(".locations_filter_mobile .mobile-services-tog input").each(function(cN){if(($(this).val()=="drive-thru-banking")||($(this).val()=="weekend-hours")||($(this).val()=="instore-branch")){var cM=$(this).parent().parent().parent().detach();
$(".locations_filter_mobile .mobile.search_detail_services_level1").append(cM)
}});
if($(".locations_filter_mobile .search_detail_services_level1").children().length==0){$(".locations_filter_mobile .search_detail_services_level1").remove()
}if($(".locations_filter_desktop .search_detail_services_level1").children().length==0){$(".locations_filter_desktop .search_detail_services_level1").remove()
}for(var cF=0;
cF<cn.length;
cF++){var cl=cn[cF].substring(0,cn[cF].indexOf(":"));
var cw=cn[cF].substring(cn[cF].indexOf(":")+1,cn[cF].length);
$(".locations_filter_desktop .search_detail_state .search_detail_state_city_select").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+cl+"'class='suntrust-checkbox' value='"+cw+"' name='"+cl+"' aria-label='"+cl+"' /></span></div><label for='"+cl+"'class='suntrust-checkbox-label'>"+cl+"</label></div>");
$(".locations_filter_mobile .mobile-state").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input id='"+cl+"'type='checkbox' class='suntrust-checkbox' value='"+cw+"' name='"+cl+"' aria-label='"+cl+"' /></span></div><label for='"+cl+"'class='suntrust-checkbox-label'>"+cl+"</label></div>")
}for(var ce=0;
ce<cI.length;
ce++){$(".locations_filter_desktop .search_detail_city .search_detail_state_city_select").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+cI[ce]+"'class='suntrust-checkbox' value='"+cI[ce]+"' name='"+cI[ce]+"' aria-label='"+cI[ce]+"' /></span></div><label for='"+cI[ce]+"' class='suntrust-checkbox-label'>"+cI[ce]+"</label></div>");
$(".locations_filter_mobile .mobile-city").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+cI[ce]+"' class='suntrust-checkbox' value='"+cI[ce]+"' name='"+cI[ce]+"' aria-label='"+cI[ce]+"' /></span></div><label for='"+cI[ce]+"' class='suntrust-checkbox-label'>"+cI[ce]+"</label></div>")
}af();
var cp=$(".locations_filter_desktop .search_detail_state .search_detail_state_city_select").children().length;
var ck=$(".locations_filter_desktop .search_detail_city .search_detail_state_city_select").children().length;
$(".locations_filter_desktop .search_detail_city h4 span").text(ck);
$(".locations_filter_desktop .city-count").text(ck);
$(".locations_filter_mobile .city-count").text(ck);
$(".locations_filter_desktop .search_detail_state h4 span").text(cp);
$(".locations_filter_mobile .state-count").text(cp);
if(window.innerWidth<768){if(b1=="newSearch"){bK()
}else{if(b1=="refineResult"){S(".locations_filter_mobile .mobile-services",cc);
S(".locations_filter_mobile .mobile-state",b4);
S(".locations_filter_mobile .mobile-city",bY)
}}}else{if(b1=="newSearch"){bK()
}else{if(b1=="refineResult"){S(".locations_filter_desktop .search_detail_services",b2);
S(".locations_filter_desktop .search_detail_state",b8);
S(".locations_filter_desktop .search_detail_city",bZ)
}}}$(".search_result_filters.col-lg-4.col-md-4.col-sm-4.hidden-xs").show();
var cC=$(".locations_filter_desktop .search_detail_services_level0").children().length;
var co=$(".search_detail_state .search_detail_state_city_select").children().length;
var cJ=$(".search_detail_city .search_detail_state_city_select").children().length;
if(cC!=0||co!=0||cJ!=0){$(".locations_filter_desktop").show();
$(".locations_filter_mobile").removeClass("hide")
}$(".locations_filter_container").removeClass("hide");
var cy=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
if(window.innerWidth<768){$(".locations_filter_mobile .mobile-city input").each(function(cM){if(!($(this).is(":checked"))){b3=true
}});
$(".locations_filter_mobile .mobile-state input").each(function(cM){if(!($(this).is(":checked"))){cd=true
}});
$(".locations_filter_mobile .mobile-services input").each(function(cM){if(!($(this).is(":checked"))){b7=true
}})
}if(window.innerWidth>=768){$(".locations_filter_desktop .search_detail_city input").each(function(cM){if(!($(this).is(":checked"))){b3=true
}});
$(".locations_filter_desktop .search_detail_state input").each(function(cM){if(!($(this).is(":checked"))){cd=true
}});
$(".locations_filter_desktop .search_detail_services_level0 input").each(function(cM){if(!($(this).is(":checked"))){b7=true
}})
}if(b1=="newSearch"){bz=A;
ai(bz,"singleDimension","newSearch",ay,bc)
}else{if((b1=="refineResult")&&(b3==true||cd==true||b7==true)){aF(bU,b1)
}else{if((b1=="refineResult")&&(b3==false&&cd==false&&b7==false)){bz=A;
ai(bz,"singleDimension","refineResult",ay,bc)
}}}}}else{$("#loadingMask").fadeOut(100);
$(".locations_no_result.zero_result_found").removeClass("hide");
$(".search_result_count").removeClass("hide");
$(".locations_result_count").text("0");
$(".locations_result_count").removeClass("hide")
}$(".search_result_categories").removeClass("hide")
},error:function(ce,cg,cf){console.log("Error occured");
$("#loadingMask").fadeOut(100)
}})
}}function br(bU,b5,bW){var b6=[];
var b8=[];
var b1=[];
var e=[];
var cc=[];
var b2=[];
b6=at(".people_filter_mobile .mobile-speciality");
b8=at(".people_filter_mobile .mobile-state");
b1=at(".people_filter_mobile .mobile-city");
b2=at(".people_filter_desktop .search_detail_city");
cc=at(".people_filter_desktop .search_detail_state");
e=at(".people_filter_desktop .search_detail_speciality");
O=0;
aR=parseInt($(".people_result_show_more_results a").attr("data-search-visible-items-limit"));
if(b5=="refineResult"){aJ=""
}else{if(b5=="newSearch"){aJ="";
ar=""
}}aU=[];
aE=[];
a9=[];
$(".people_no_result").addClass("hide");
$(".faqs_no_result.zero_result_found").addClass("hide");
$(".locations_no_result.zero_result_found").addClass("hide");
$(".people_filter_desktop .search_result_filters.col-lg-4.col-md-4.col-sm-4.hidden-xs").hide();
$(".people_result_show_more_results").addClass("hide");
$(".search_result_show_more_results").addClass("hide");
$(".location-search .search_result_count").addClass("hide");
$(".search_result_description .search-results .people_filter_container .filter-no-result").remove();
$(".search_result_description .search-results .people_filter_container .people_mq_results").children().remove();
$(".search_result_description .search-results .people_filter_container .people_aem_results").children().remove();
$(".people_filter_desktop").hide();
$(".people_filter_mobile").addClass("hide");
$(".people_filter_container").addClass("hide");
$(".people_filter_desktop .search_by_filter.search_detail_speciality .search_detail_speciality_level").children().remove();
$(".people_filter_desktop .search_detail_state .search_detail_state_city_select").children().remove();
$(".people_filter_desktop .search_detail_city .search_detail_state_city_select").children().remove();
$(".people_filter_mobile .filter_tog .mobile-speciality").children().remove();
$(".people_filter_mobile .filter_tog .mobile-state").children().remove();
$(".people_filter_mobile .filter_tog .mobile-city").children().remove();
$(".people_filter_desktop .search_by_filter.search_detail_people_radius").show();
$(".people_filter_mobile .mobile-radius-filter").show();
var b3=new Date().getDay();
var bX=[];
var bY=[];
var b9="";
by=[];
var ca=false;
var cd=false;
var b7=false;
var bV=bU;
var b0=ar.length;
var cb;
var b4=[];
if(aj==""){$(".people_filter_desktop").hide();
$(".people_filter_mobile").addClass("hide");
$(".search_result_description .search-results .people_filter_container").addClass("hide")
}if(aj!=""){$("#loadingMask").show().focus();
var bZ="https://www.mapquestapi.com/search/v2/radius?origin="+aj+"&radius="+bV+"&maxMatches=500&ambiguities=ignore&hostedData=mqap.32547_SunTrust_Branch_Loc&outFormat=json&key=Gmjtd|lu6zn1ua2d,70=o5-l0850";
$.ajax({type:"GET",url:bZ,async:false,dataType:"json",crossDomain:true,success:function(cg,ck,ch){if(cg.info.statusCode!="500"){bf=parseInt(cg.resultsCount);
if(bf!=0&&cg.searchResults!=undefined){for(var cf=0;
cf<cg.searchResults.length;
cf++){var cj=cg.searchResults[cf].fields.lat;
var ci=cg.searchResults[cf].fields.lng;
bY[cf]=cg.searchResults[cf].fields.postal;
if(cj!=""&&cj!="null"&&cj!=null&&ci!="null"&&ci!=null&&ci!=""){bX[cf]=cj.toString()+ci.toString()
}else{bX[cf]=0
}}bX=$.unique(bX);
bY=$.unique(bY);
for(var cf=0;
cf<bY.length;
cf++){if(b9.length==0){b9=bY[cf]
}else{b9=b9+","+bY[cf]
}}}if(aJ.length==0){b9="mqPostalCodeData"+b9;
$.ajax({type:"GET",url:"/dotcom/search",async:false,data:{searchString:b9,currentDay:new Date().getDay(),aboutMe:bW,searchingFor:"People"},success:function(cp,co,ct){aJ=cp.people_results;
var cn=aJ.length;
if(o!=undefined&&m!=undefined){for(var cr=0;
cr<cn;
cr++){b4=[];
for(var cq=0;
cq<aJ[cr].advisor_addressListArray.addressListArray.length;
cq++){var cl=aJ[cr].advisor_addressListArray.addressListArray[cq].adv_latitude;
var cm=aJ[cr].advisor_addressListArray.addressListArray[cq].adv_longitude;
var cs=bg(o,m,cl,cm);
aJ[cr].advisor_addressListArray.addressListArray[cq].people_eachloc_miles_away=cs;
b4.push(cs)
}aJ[cr].people_miles_away=b4.min()
}}if(ar.length==0){$.ajax({type:"GET",url:"/dotcom/search",async:false,data:{searchString:aj,currentDay:new Date().getDay(),aboutMe:bW,searchingFor:"People"},success:function(cz,cy,cE){var cx=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
ar=cz.people_results;
var cF=ar.length;
if(o!=undefined&&m!=undefined){for(var cB=0;
cB<cF;
cB++){b4=[];
for(var cA=0;
cA<ar[cB].advisor_addressListArray.addressListArray.length;
cA++){var cv=ar[cB].advisor_addressListArray.addressListArray[cA].adv_latitude;
var cw=ar[cB].advisor_addressListArray.addressListArray[cA].adv_longitude;
var cD=bg(o,m,cv,cw);
ar[cB].advisor_addressListArray.addressListArray[cA].people_eachloc_miles_away=cD;
b4.push(cD)
}ar[cB].people_miles_away=b4.min()
}}N(b5,b6,b8,b1,b2,cc,e);
if(window.innerWidth<768){$(".people_filter_mobile .mobile-city input").each(function(cG){if(!($(this).is(":checked"))){b7=true
}});
$(".people_filter_mobile .mobile-state input").each(function(cG){if(!($(this).is(":checked"))){cd=true
}});
$(".people_filter_mobile .mobile-speciality input").each(function(cG){if(!($(this).is(":checked"))){ca=true
}})
}if(window.innerWidth>=768){$(".people_filter_desktop .search_detail_city input").each(function(cG){if(!($(this).is(":checked"))){b7=true
}});
$(".people_filter_desktop .search_detail_state input").each(function(cG){if(!($(this).is(":checked"))){cd=true
}});
$(".people_filter_desktop .search_detail_speciality_level input").each(function(cG){if(!($(this).is(":checked"))){ca=true
}})
}if(b5=="newSearch"){n=aU;
bB(n,"singleDimension","newSearch",aR,O)
}else{if((b5=="refineResult")&&(b7==true||cd==true||ca==true)){aW(bV,b5)
}else{if((b5=="refineResult")&&(b7==false&&cd==false&&ca==false)){n=aU;
bB(n,"singleDimension","refineResult",aR,O)
}}}var cC=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
},error:function(cv,cx,cw){console.log("Error occured");
$("#loadingMask").fadeOut(100)
}})
}else{var cu=ar.length;
N(b5,b6,b8,b1,b2,cc,e);
if(window.innerWidth<768){$(".people_filter_mobile .mobile-city input").each(function(cv){if(!($(this).is(":checked"))){b7=true
}});
$(".people_filter_mobile .mobile-state input").each(function(cv){if(!($(this).is(":checked"))){cd=true
}});
$(".people_filter_mobile .mobile-speciality input").each(function(cv){if(!($(this).is(":checked"))){ca=true
}})
}if(window.innerWidth>=768){$(".people_filter_desktop .search_detail_city input").each(function(cv){if(!($(this).is(":checked"))){b7=true
}});
$(".people_filter_desktop .search_detail_state input").each(function(cv){if(!($(this).is(":checked"))){cd=true
}});
$(".people_filter_desktop .search_detail_speciality_level input").each(function(cv){if(!($(this).is(":checked"))){ca=true
}})
}if(b5=="newSearch"){n=aU;
bB(n,"singleDimension","newSearch",aR,O)
}else{if((b5=="refineResult")&&(b7==true||cd==true||ca==true)){aW(bV,b5)
}else{if((b5=="refineResult")&&(b7==false&&cd==false&&ca==false)){n=aU;
bB(n,"singleDimension","refineResult",aR,O)
}}}}},error:function(cl,cn,cm){console.log("Error occured");
$("#loadingMask").fadeOut(100)
}})
}else{var ce=ar.length;
N(b5,b6,b8,b1,b2,cc,e);
if(window.innerWidth<768){$(".people_filter_mobile .mobile-city input").each(function(cl){if(!($(this).is(":checked"))){b7=true
}});
$(".people_filter_mobile .mobile-state input").each(function(cl){if(!($(this).is(":checked"))){cd=true
}});
$(".people_filter_mobile .mobile-speciality input").each(function(cl){if(!($(this).is(":checked"))){ca=true
}})
}if(window.innerWidth>=768){$(".people_filter_desktop .search_detail_city input").each(function(cl){if(!($(this).is(":checked"))){b7=true
}});
$(".people_filter_desktop .search_detail_state input").each(function(cl){if(!($(this).is(":checked"))){cd=true
}});
$(".people_filter_desktop .search_detail_speciality_level input").each(function(cl){if(!($(this).is(":checked"))){ca=true
}})
}if(b5=="newSearch"){n=aU;
bB(n,"singleDimension","newSearch",aR,O)
}else{if((b5=="refineResult")&&(b7==true||cd==true||ca==true)){aW(bV,b5)
}else{if((b5=="refineResult")&&(b7==false&&cd==false&&ca==false)){n=aU;
bB(n,"singleDimension","refineResult",aR,O)
}}}}}else{$("#loadingMask").fadeOut(100);
$(".people_no_result.zero_result_found").removeClass("hide");
$(".search_result_count").removeClass("hide");
$(".people_result_count").text("0");
$(".people_result_count").removeClass("hide")
}$(".search_result_categories").removeClass("hide")
},error:function(ce,cg,cf){console.log("Error occured");
$("#loadingMask").fadeOut(100)
}})
}}function N(b6,b1,cw,b2,cu,b5,cm){if(bf!=0&&aJ.length>0){by=aJ;
var b9=[];
for(var ct=0;
ct<by.length;
ct++){b9.push(by[ct].advisor_profilePage)
}for(var ct=0;
ct<ar.length;
ct++){for(var cs=0;
cs<b9.length;
cs++){if(b9[cs]!=ar[ct].advisor_profilePage){flag="notPresent"
}else{flag="present";
break
}}if(flag=="notPresent"){ar[ct].people_result_type="AEM";
a9.push(ar[ct])
}}for(var ct=0;
ct<by.length;
ct++){by[ct].people_result_type="MQ";
aU.push(by[ct])
}for(var ct=0;
ct<a9.length;
ct++){aU.push(a9[ct])
}}else{if(bf==0||aJ.length==0){for(var ct=0;
ct<ar.length;
ct++){ar[ct].people_result_type="AEM";
a9.push(ar[ct])
}aU=a9
}}var e=[];
var bY=[];
var cv=[];
var cc=[];
var b4=[];
var bV=[];
var ch=[];
var bZ=[];
var b0=[];
var bU=[];
var cg=[];
var b3=[];
var b7=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
for(var ct=0;
ct<aU.length;
ct++){e[ct]=aU[ct].advisor_specialty;
for(var cr=0;
cr<e[ct].length;
cr++){if(cv.indexOf(e[ct].toUpperCase())==-1){cv.push(e[ct].toUpperCase())
}}bZ[ct]=aU[ct].advisor_state;
if(bZ[ct]!=""&&bZ[ct]!=null&&bZ[ct]!=undefined){bZ[ct]=bZ[ct].toUpperCase()
}$.each(bZ,function(cy,cz){if($.inArray(cz,b0)===-1){b0.push(cz)
}});
bU[ct]=aU[ct].advisor_city
}for(ct=0;
ct<bU.length;
ct++){if(bU[ct]!=""&&bU[ct]!=null&&bU[ct]!=undefined){bU[ct]=bU[ct].toUpperCase();
if(bU[ct].indexOf(",")>=0){bU[ct].split(",").forEach(function(cy){b3[ct]=cy
})
}else{b3[ct]=bU[ct]
}}}$.each(b3,function(cy,cz){if($.inArray(cz,cg)===-1){cg.push(cz)
}});
var co=[];
var cl=[];
for(ct=0;
ct<cv.length;
ct++){var cj=[];
var cx=0;
var b8=cv[ct];
switch(b8){case"MEDICAL":$(".medical").each(function(){cj.push($(this).attr("value"))
});
break;
case"MEDICAL & LEGAL":$(".medical-and-legal").each(function(){cj.push($(this).attr("value"))
});
break;
case"LEGAL":$(".legal").each(function(){cj.push($(this).attr("value"))
});
break;
case"SPORTS AND ENTERTAINMENT GROUP":$(".sports-and-entertainment-group").each(function(){cj.push($(this).attr("value"))
});
break;
case"BUSINESS WEALTH PARTNER":$(".business-wealth-partner").each(function(){cj.push($(this).attr("value"))
});
break;
case"RETIREMENT":$(".retirement").each(function(){cj.push($(this).attr("value"))
});
break;
case"INTERNATIONAL":$(".international").each(function(){cj.push($(this).attr("value"))
});
break;
case"WEALTH":$(".wealth").each(function(){cj.push($(this).attr("value"))
});
break;
case"MORTGAGE":$(".mortgage").each(function(){cj.push($(this).attr("value"))
});
break;
case"MORTGAGE1":$(".mortgage1").each(function(){cj.push($(this).attr("value"))
});
break;
case"FOUNDATIONS AND ENDOWMENTS SPECIALTY PRACTICE":$(".foundations-and-endowments-specialty-practice").each(function(){cj.push($(this).attr("value"))
});
break
}var cj=cj.filter(function(cA,cy,cz){return cy==cz.indexOf(cA)
});
if(cj!=undefined&&cj!=null&&cj!=""){for(var ca=0;
ca<cj.length;
ca++){co.push({name:cj[ca],value:cv[ct]})
}}}co.forEach(function(cA){var cz=cl.filter(function(cB,cC){return cB.name==cA.name
});
if(cz.length){var cy=cl.indexOf(cz[0]);
cl[cy].value=cl[cy].value.concat(cA.value)
}else{if(typeof cA.value=="string"){cA.value=[cA.value]
}cl.push(cA)
}});
var cb=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
cl.sort();
b0.sort();
cg.sort();
if(cl!=null&&cl!=undefined&&cl!=""){a3=cl.length;
$("#specialityListCount").html(a3);
$("#specialityListCountM").html(a3)
}var cb=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
for(var cd=0;
cd<cl.length;
cd++){$(".people_filter_desktop .search_by_filter.search_detail_speciality .search_detail_speciality_level").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span class='sun-checked'><input type='checkbox' class='suntrust-checkbox' value='"+cl[cd].value+"' name='"+cl[cd].name+"' title='"+cl[cd].name+"' data-search-filter='"+cl[cd].value+"' /></span></div><label for='"+cl[cd].name+"'class='suntrust-checkbox-label'>"+cl[cd].name+"</label></div>");
$(".mobile_filter_search .people_filter_mobile .mobile-speciality").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span class='sun-checked'><input type='checkbox' class='suntrust-checkbox' value='"+cl[cd].value+"' name='"+cl[cd].name+"' title='"+cl[cd].name+"' data-search-filter='"+cl[cd].value+"' /></span></div><label for='"+cl[cd].name+"'class='suntrust-checkbox-label'>"+cl[cd].name+"</label></div>")
}for(var cq=0;
cq<b0.length;
cq++){var cn=b0[cq];
$(".people_filter_desktop .search_detail_state .search_detail_state_city_select").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+cn+"'class='suntrust-checkbox' value='"+cn+"' name='"+cn+"' aria-label='"+cn+"' /></span></div><label for='"+cn+"'class='suntrust-checkbox-label'>"+cn+"</label></div>");
$(".people_filter_mobile .mobile-state").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input id='"+cn+"'type='checkbox' class='suntrust-checkbox' value='"+cn+"' name='"+cn+"' aria-label='"+cn+"' /></span></div><label for='"+cn+"'class='suntrust-checkbox-label'>"+cn+"</label></div>")
}for(var ce=0;
ce<cg.length;
ce++){$(".people_filter_desktop .search_detail_city .search_detail_state_city_select").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+cg[ce]+"'class='suntrust-checkbox' value='"+cg[ce]+"' name='"+cg[ce]+"' aria-label='"+cg[ce]+"' /></span></div><label for='"+cg[ce]+"' class='suntrust-checkbox-label'>"+cg[ce]+"</label></div>");
$(".people_filter_mobile .mobile-city").append("<div class='sun-checkbox-input-field'><div class='sun-checkbox-input-container'><span><input type='checkbox' id='"+cg[ce]+"' class='suntrust-checkbox' value='"+cg[ce]+"' name='"+cg[ce]+"' aria-label='"+cg[ce]+"' /></span></div><label for='"+cg[ce]+"' class='suntrust-checkbox-label'>"+cg[ce]+"</label></div>")
}af();
var bX=$(".people_filter_desktop .search_detail_state .search_detail_state_city_select").children().length;
var cf=$(".people_filter_desktop .search_by_filter.search_detail_speciality .search_detail_speciality_level").children().length;
var cp=$(".people_filter_desktop .search_detail_city .search_detail_state_city_select").children().length;
$(".people_filter_desktop .search_detail_city h4 span").text(cp);
$(".people_filter_desktop .city-count").text(cp);
$(".people_filter_mobile .city-count").text(cp);
$(".people_filter_desktop .search_detail_state h4 span").text(bX);
$(".people_filter_mobile .state-count").text(bX);
$("#specialityListCount").html(cf);
$("#specialityListCountM").html(cf);
if(window.innerWidth<768){if(b6=="newSearch"){bC()
}else{if(b6=="refineResult"){q(".people_filter_mobile .mobile-speciality",b1);
q(".people_filter_mobile .mobile-state",cw);
q(".people_filter_mobile .mobile-city",b2)
}}}else{if(b6=="newSearch"){bC()
}else{if(b6=="refineResult"){q(".people_filter_desktop .search_detail_speciality",cm);
q(".people_filter_desktop .search_detail_state",b5);
q(".people_filter_desktop .search_detail_city",cu)
}}}$(".search_result_filters.col-lg-4.col-md-4.col-sm-4.hidden-xs").show();
$(".search_result_filters.col-lg-4.col-md-4.col-sm-4.hidden-xs").removeClass("hide");
var ci=$(".people_filter_desktop .search_detail_speciality_level").children().length;
var bW=$(".search_detail_state .search_detail_state_city_select").children().length;
var ck=$(".search_detail_city .search_detail_state_city_select").children().length;
if(ci!=0||bW!=0||ck!=0){$(".people_filter_desktop").show();
$(".people_filter_mobile").removeClass("hide")
}$(".people_filter_container").removeClass("hide");
var cb=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
}$(document).on("click",".locations_filter_mobile .mobile_filter_submit_reset .submit",function(bV){bV.preventDefault();
var bU=$(".locations_filter_mobile .filter_tog.mobile-radius-filter .search_detail_radius_select span").text();
bU=bU.split("Miles");
bU=bU[0].trim();
bp(bU,"refineResult");
$(this).parents(".mobile_filter_search").animate({left:"-320px"});
setTimeout(function(){l("mobileView")
},1000)
});
$(document).on("click",".locations_filter_mobile .mobile_filter_submit_reset .reset",function(bU){bU.preventDefault();
bK();
$(".locations_filter_mobile .mobile-radius-filter .search_detail_radius_select span").text("10 Miles")
});
$(document).on("click",".resources_filter_mobile .suntrust-promo-cta-button.suntrust_apply",function(bU){bU.preventDefault();
u("refineResult");
$(this).parents(".mobile_filter_search").animate({left:"-320px"})
});
$(document).on("click",".resource_filter_checkTypes .filter_show_hide input",function(bZ){var bV=$(this).parents().hasClass("search_detail_services_level1");
var bU=false;
var bW=true;
var bY=$(this).parents(".search_detail_services_level1").find("input").length;
var bX=0;
if($(this).parents(".sun-checkbox-input-field").next().hasClass("search_detail_services_level1")){if($(this).parents(".sun-checkbox-input-field").next(".search_detail_services_level1").is(":visible")){$(this).parents(".sun-checkbox-input-field").next().find(".sun-checkbox-input-field span").removeClass("sun-checked");
$(this).parents(".sun-checkbox-input-field").next().find(".sun-checkbox-input-field span input").prop("checked",false);
$(this).parents(".sun-checkbox-input-field").next().slideToggle()
}else{$(this).parents(".sun-checkbox-input-field").next().slideToggle();
$(this).parents(".sun-checkbox-input-field").next().find(".sun-checkbox-input-field span").addClass("sun-checked");
$(this).parents(".sun-checkbox-input-field").next().find(".sun-checkbox-input-field span input").prop("checked",true)
}}if(bV){$(this).parents(".search_detail_services_level1").find("input").each(function(){bU=$(this).is(":checked");
if(bU==false){$(this).parents(".search_detail_services_level1").prev().find("input").addClass("dontAdd");
bW=false;
bX=bX+1
}});
if(bX==bY){bW=true
}if(bW){$(this).parents(".search_detail_services_level1").find("input").each(function(){$(this).parents(".search_detail_services_level1").prev().find("input").removeClass("dontAdd")
})
}}});
$(document).on("click",".resources_filter_mobile .suntrust-promo-cta-button.suntrust_reset",function(bU){bU.preventDefault();
V()
});
$(".locations_filter_desktop .search_detail_radius_select select").on("change",function(bV){var bU=$(this).val();
bp(bU,"refineResult")
});
$(document).on("click",".people_filter_mobile .mobile_filter_submit_reset .submit",function(bV){bV.preventDefault();
var bU=$(".people_filter_mobile .filter_tog.mobile-radius-filter .search_detail_radius_select span").text();
bU=bU.split("Miles");
bU=bU[0].trim();
br(bU,"refineResult",aO);
$(this).parents(".mobile_filter_search").animate({left:"-320px"});
setTimeout(function(){l("mobileView")
},1000)
});
$(document).on("click",".people_filter_mobile .mobile_filter_submit_reset .reset",function(bU){bU.preventDefault();
bC();
$(".people_filter_mobile .mobile-radius-filter .search_detail_radius_select span").text("10 Miles")
});
$(".people_filter_desktop .search_detail_radius_select select").on("change",function(bV){var bU=$(this).val();
br(bU,"refineResult",aO)
});
setTimeout(function(){l("desktopView")
},7000);
function l(e){var bV=window.location.href;
var bU=bV.split("#")[1];
bU=(bU===undefined)?"all_results":bU;
if(true){switch(bU){case"all_results":bv(bU);
break;
case"locations":bq(bU,e);
break;
case"people":be(bU,e);
break;
case"products":ap(bU);
break;
case"faqs":g(bU);
break;
case"resources":b(bU);
break
}}}$(".search_result_categories a.analytics-placeholder-allsch,a.analytics-placeholder-locsch,a.analytics-placeholder-peoplesch,a.analytics-placeholder-prodsch,a.analytics-placeholder-faqsch,a.analytics-placeholder-resourcesch").on("click",function(){var bU=$(this).attr("index");
var e=$("#search .suntrust_search").val();
if(true&&bU!=null){switch(bU){case"all_results":window.dataLayer.pageSet="STcom_AEM_FindUs_Search";
bv(bU);
break;
case"people":window.dataLayer.pageSet="STcom_AEM_PF_Search";
setTimeout(function(){be(bU,"desktopView")
},1000);
break;
case"locations":window.dataLayer.pageSet="STcom_AEM_FindUs_Search";
setTimeout(function(){bq(bU,"desktopView")
},1000);
break;
case"products":window.dataLayer.pageSet="STcom_AEM_FindUs_Search";
ap(bU);
break;
case"faqs":window.dataLayer.pageSet="STcom_AEM_FindUs_Search";
g(bU);
break;
case"resources":window.dataLayer.pageSet="STcom_AEM_FindUs_Search";
b(bU);
break
}}});
$("select#search_mobile_tab_navigation").on("change",function(){var e=$(this).val();
if(true){switch(e){case"all_results":window.dataLayer.pageSet="STcom_AEM_FindUs_Search";
bv(e);
break;
case"locations":window.dataLayer.pageSet="STcom_AEM_FindUs_Search";
setTimeout(function(){bq(e,"mobileView")
},1000);
break;
case"people":window.dataLayer.pageSet="STcom_AEM_PF_Search";
setTimeout(function(){be(e,"mobileView")
},1000);
break;
case"products":window.dataLayer.pageSet="STcom_AEM_FindUs_Search";
ap(e);
break;
case"faqs":window.dataLayer.pageSet="STcom_AEM_FindUs_Search";
g(e);
break;
case"resources":window.dataLayer.pageSet="STcom_AEM_FindUs_Search";
b(e);
break
}}});
function bv(bV){var e=$(".number-of-results-in-all-category-search").val();
window.dataLayer.pageName="STcom|Search|AllResults";
var bU=$("#search .suntrust_search").val();
window.dataLayer.eVar17=null;
window.dataLayer.eVar15=null;
window.dataLayer.prop2=null;
window.dataLayer.prop4=null;
window.dataLayer.eVar4=null;
window.dataLayer.prop27=null;
window.dataLayer.prop1=bU;
if(e!=0){window.dataLayer.prop2=e
}else{window.dataLayer.prop2="Zero"
}setTimeout(function(){Bootstrapper.ensEvent.trigger("STcom_AEM_FindUs_Search")
},1000)
}function bq(bX,bV){var e=[];
var bU="";
var bW=$("#search .suntrust_search").val();
aB=$(".locations_result_count").text();
var bY=bV.localeCompare("mobileView");
if(bY!=0){$(".search_detail_services_level0 .sun-checkbox-input-container .sun-checked").each(function(){var bZ=$(this).find("input[type='checkbox']").val();
e.push(bZ)
})
}else{$(".mobile-services .sun-checkbox-input-container .sun-checked").each(function(){var bZ=$(this).find("input[type='checkbox']").val();
e.push(bZ)
})
}e=$.unique(e);
$.each(e,function(bZ,b0){if(b0!=""){if(bU==""){bU=b0
}else{bU=bU+";"+b0
}}});
if(true){if(aB!=0){window.dataLayer.prop2=aB;
window.dataLayer.eVar17=null;
window.dataLayer.eVar15=null;
window.dataLayer.eVar15=bW
}else{window.dataLayer.prop2="Zero";
window.dataLayer.eVar15=null;
window.dataLayer.eVar17=null;
window.dataLayer.eVar17=bW
}window.dataLayer.pageName="STcom|Search|LocationResults";
window.dataLayer.prop1=bW;
window.dataLayer.prop27=bU;
setTimeout(function(){Bootstrapper.ensEvent.trigger("STcom_AEM_FindUs_Search")
},1000)
}}function be(b0,b5){var b4=$(".people_result_count").text();
var bX=[];
var bZ=[];
var bU=[];
var b2="";
var b1="";
var bY="";
var b6="";
var e=b5.localeCompare("mobileView");
if(e!=0){$("#cityList .sun-checkbox-input-field .sun-checkbox-input-container .sun-checked").each(function(){var b8=$(this).find("input[type='checkbox']").val();
bX.push(b8)
});
$("#stateList .sun-checkbox-input-field .sun-checkbox-input-container .sun-checked").each(function(){var b8=$(this).find("input[type='checkbox']").val();
bZ.push(b8)
});
$(".search_detail_speciality_level .sun-checkbox-input-field .sun-checkbox-input-container .sun-checked").each(function(){var b8=$(this).find("input[type='checkbox']").val();
bU.push(b8)
})
}else{$(".mobile-city .sun-checkbox-input-field .sun-checkbox-input-container .sun-checked").each(function(){var b8=$(this).find("input[type='checkbox']").val();
bX.push(b8)
});
$(".mobile-state .sun-checkbox-input-field .sun-checkbox-input-container .sun-checked").each(function(){var b8=$(this).find("input[type='checkbox']").val();
bZ.push(b8)
});
$(".mobile-speciality .sun-checkbox-input-field .sun-checkbox-input-container .sun-checked").each(function(){var b8=$(this).find("input[type='checkbox']").val();
bU.push(b8)
})
}bX=$.unique(bX);
bZ=$.unique(bZ);
bU=$.unique(bU);
$.each(bX,function(b8,b9){if(b9!=""){if(b2==""){b2=b9
}else{b2=b2+","+b9
}}});
b6=b2;
$.each(bZ,function(b8,b9){if(b9!=""){if(b1==""){b1=b9
}else{b1=b1+","+b9
}}});
if(b6!=""){var b7=(b1!="")?","+b1:"";
b6=b6+b7
}else{b6=b1
}$.each(bU,function(b8,b9){if(b9!=""){if(bY==""){bY=b9
}else{bY=bY+","+b9
}}});
if(b6!=""){var b3=(bY!="")?"|"+bY:"";
b6=b6+b3
}else{b6=bY
}var bW=$("#search .suntrust_search").val();
var bV=bY.replace(/,/g,";");
if(true){window.dataLayer.prop1=bW;
window.dataLayer.pageName="STcom|Search|PeopleResults";
window.dataLayer.prop2=null;
window.dataLayer.prop4=null;
window.dataLayer.eVar4=null;
window.dataLayer.eVar15=null;
window.dataLayer.eVar17=null;
window.dataLayer.prop27=null;
if(b4>0){window.dataLayer.prop2=b4;
window.dataLayer.prop4="PeopleFinder|PeopleFound";
window.dataLayer.eVar4="PeopleFinder|PeopleFound";
window.dataLayer.eVar15="peoplefinder|"+b6;
window.dataLayer.prop27=bV
}else{window.dataLayer.prop2="Zero";
window.dataLayer.prop4="PeopleFinder|NoPeopleFound";
window.dataLayer.eVar4="PeopleFinder|NoPeopleFound";
window.dataLayer.prop27=bV;
window.dataLayer.eVar17="peoplefinder|"+b6
}Bootstrapper.ensEvent.trigger("STcom_AEM_PF_Search")
}}function ap(bV){var e=$(".products_result_count").text();
window.dataLayer.pageName="STcom|Search|ProductResults";
var bU=$("#search .suntrust_search").val();
window.dataLayer.eVar17=null;
window.dataLayer.eVar15=null;
window.dataLayer.prop2=null;
window.dataLayer.prop4=null;
window.dataLayer.eVar4=null;
window.dataLayer.prop27=null;
window.dataLayer.prop1=bU;
if(e!=0){window.dataLayer.prop2=e
}else{window.dataLayer.prop2="Zero"
}setTimeout(function(){Bootstrapper.ensEvent.trigger("STcom_AEM_FindUs_Search")
},1000)
}function g(bV){var e=$(".faqs_result_count").text();
window.dataLayer.pageName="STcom|Search|FAQResults";
var bU=$("#search .suntrust_search").val();
window.dataLayer.eVar17=null;
window.dataLayer.eVar15=null;
window.dataLayer.prop2=null;
window.dataLayer.prop4=null;
window.dataLayer.eVar4=null;
window.dataLayer.prop27=null;
window.dataLayer.prop1=bU;
if(e!=0){window.dataLayer.prop2=e
}else{window.dataLayer.prop2="Zero"
}setTimeout(function(){Bootstrapper.ensEvent.trigger("STcom_AEM_FindUs_Search")
},1000)
}function b(bV){console.log(bV+" tab clicked.");
var bU=$(".resources_result_count").text();
window.dataLayer.pageName="STcom|Search|ResoucesResults";
var e=$("#search .suntrust_search").val();
window.dataLayer.eVar17=null;
window.dataLayer.eVar15=null;
window.dataLayer.prop2=null;
window.dataLayer.prop4=null;
window.dataLayer.eVar4=null;
window.dataLayer.prop27=null;
window.dataLayer.prop1=e;
if(bU!=0){window.dataLayer.prop2=bU
}else{window.dataLayer.prop2="Zero"
}setTimeout(function(){Bootstrapper.ensEvent.trigger("STcom_AEM_FindUs_Search")
},1000)
}}});
$(document).ready(function(){b();
$(window).resize(function(){b()
});
function b(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){$(".dcm-tooltip,.dcm-tooltip-right,.dcm-tooltip-left,.dcm-tooltip-top-small,.dcm-tooltip-top-large").removeAttr("tabindex")
}else{$(".dcm-tooltip,.dcm-tooltip-right,.dcm-tooltip-left,.dcm-tooltip-top-small,.dcm-tooltip-top-large").attr("tabindex","0")
}}});
$(document).ready(function(){if($(".suntrust-global-alert").is(":visible")){var b;
b=$("#globalalertconfig").val();
if($("#modecheck").val()!="edit"){$.ajax({url:b,dataType:"text",success:function(e){var d=$(e).find("#globalalert").html();
$(".suntrust-global-alert").html(d);
c()
}})
}}function c(){var g=$(".suntrust-global-alert");
var h=$('div[data-suntrust-class="notification-message"]'),e="notification-message notification-in-header";
if(h.length>0){var f=h.find('button[data-suntrust-class="close-notification-message"]'),d=getCookie(f.attr("data-name"));
if(d!=f.attr("data-val")){g.addClass(e)
}f.click(function(){g.removeClass(e);
var j={expire:30,name:$(this).attr("data-name"),value:$(this).attr("data-val"),secure:window.location.protocol=="https:"?true:false,domain:window.location.host,path:"/"};
setCookie(j.name,j.value,j.expire,j.path,j.domain,j.secure)
})
}}});
var track_video=true;
function playOnevideo(){var c=document.querySelectorAll("video");
for(var b=0;
b<c.length;
b++){c[b].addEventListener("play",function(){d(this)
},true)
}function d(f){for(var e=0;
e<c.length;
e++){if(c[e]==f){continue
}if(c[e].played.length>0&&!c[e].paused){c[e].pause()
}}}track_video=false
}$(document).ready(function(l){var o;
var k="";
var c="";
var n=$("input.typeahead").length;
var f=$("input.loc_typeahead").length;
if(n>0){b();
$.ajax({type:"GET",url:"/dotcom/search/typeahead",cache:false,data:{searchpath:$("input.typeahead").attr("data-searchpath")},success:function(p,q,e){o=p;
$.each($("input.typeahead"),function(){if($(this).data("cat")!=null&&$(this).data("cat")!=""&&$(this).data("cat")!=undefined&&$(this).data("cat").length>0){if($(this).data("cat")=="locations"){m($(this),d(p,$(this).data("cat")))
}else{if($(this).hasClass("minThree")){m($(this),d(p,$(this).data("cat")))
}else{j($(this),d(p,$(this).data("cat")))
}}}else{if($(this).hasClass("minThree")){m($(this),d(p,k))
}else{if(k=="locations"||k=="people"){m($(this),d(p,k))
}else{j($(this),d(p,k))
}}}})
},error:function(e,q,p){console.log("error in typeahead response:"+q)
}})
}$(document).on("click",".search_result_categories ul.text-center a",function(){$("input.typeahead#search-input").typeahead("destroy");
var e=$(".search_result_categories ul.text-center a.active").attr("index");
if($(".search_result_categories ul.text-center a.active").attr("index").indexOf("people")>-1||$(".search_result_categories ul.text-center a.active").attr("index").indexOf("locations")>-1){m($("input.typeahead#search-input"),d(o,e))
}else{j($("input.typeahead#search-input"),d(o,e))
}});
$("select.search_select").on("change",function(p){tabName=$(this).val();
$("input.typeahead#search-input").typeahead("destroy");
if(tabName=="people"||tabName=="locations"){m($("input.typeahead#search-input"),d(o,tabName))
}else{j($("input.typeahead#search-input"),d(o,tabName))
}});
$(document).on("click",".suntrust-get-directions-route-switch",function(){$("input#MyLocationText").typeahead("destroy");
m(("input#MyLocationText"),d(o,"locations"))
});
var d=function(q,e){b();
var p=JSON.stringify(q.all_results[0]).replace(/]|[[]/g,"").replace(/"/g,"").split(",");
p=g(p);
if(k=="all_results"||e=="all_results"){p=JSON.stringify(q.all_results[0]).replace(/]|[[]/g,"").replace(/"/g,"").split(",");
p=g(p)
}else{if(k=="locations"||e=="locations"){p=JSON.stringify(q.location_results[0]).replace(/]|[[]/g,"").replace(/"/g,"").split(",");
p=g(p)
}else{if(k=="people"||e=="people"){p=JSON.stringify(q.people_results[0]).replace(/]|[[]/g,"").replace(/"/g,"").split(",");
p=g(p)
}else{if(k=="faqs"||e=="faqs"){p=JSON.stringify(q.faq_results[0]).replace(/]|[[]/g,"").replace(/"/g,"").split(",");
p=g(p)
}else{if(k=="products"||e=="products"){p=JSON.stringify(q.product_results[0]).replace(/]|[[]/g,"").replace(/"/g,"").split(",");
p=g(p)
}else{if(k=="resources"||e=="resources"){p=JSON.stringify(q.resource_results[0]).replace(/]|[[]/g,"").replace(/"/g,"").split(",");
p=g(p)
}}}}}}return p
};
function g(p){var e=[];
$.each(p,function(q,r){if($.inArray(r,e)==-1){e.push(r)
}});
return e
}function b(){if(window.location.hash=="#all_results"||window.location.hash=="#locations"||window.location.hash=="#people"||window.location.hash=="#faqs"||window.location.hash=="#products"||window.location.hash=="#resources"){k=window.location.hash
}while(k!=""&&k.charAt(0)==="#"){k=k.substr(1)
}k=k.trim()
}var j=function(p,e){$(p).typeahead({hint:false,highlight:true,minLength:1},{name:"keywords",source:h(e),limit:$(p).attr("data-suggestcount"),templates:{header:'<div class="suggested-name">Suggested Searches</div>'}})
};
var m=function(p,e){$(p).typeahead({hint:false,highlight:true,minLength:3},{name:"keywords",source:h(e),limit:$(p).attr("data-suggestcount"),templates:{header:'<div class="suggested-name">Suggested Searches</div>'}})
};
var h=function(e){return function p(v,r){var u,t;
u=[];
try{substrRegex=new RegExp(v,"i")
}catch(w){}$.each(e,function(q,y){if(substrRegex.test(y)){u.push(y)
}});
r(u)
}
}
});
$(".disclaimer-collapse-title").click(function(c){var b=$(this);
b.parent().next(".disclaimer-contentSec").slideToggle("slow");
$(".disclaimer-collapse-title").toggleClass("disclaimer-collapsed");
c.preventDefault()
});
var lastCardActive=false;
$(document).ready(function(){$(document).on("click",".slick-dots li",function(){if($(this).is(":last-child")){lastCardActive=true
}else{lastCardActive=false
}})
});
$(window).resize(function(){var b=$(window).width();
var d="";
var c;
if(!detectDevices()){if(b>=1300){d="296px";
$(".threeCol .grid-image").css("top","-77px")
}else{if(b==1226){$(".threeCol .grid-image").css("top","-77px");
d="288px"
}else{if(b==1051){d="220px"
}else{if(b>1000&&b<1300){d="259px";
$(".threeCol .grid-image").css("top","-77px")
}else{if(b<=1000){d="211px";
$(".bankProdCard-PrimaryBtn").css("right","5px");
$(".threeCol .grid-image").css("top","-7%");
setTimeout(function(){$(".threeColProductCards").each(function(){var e=$(this).attr("data-card-length");
if(e==1){$(this).find(".slick-track").css("width","261px")
}else{if(e==2){$(this).find(".slick-track").css("width","522px")
}else{if(e==3){$(this).find(".slick-track").css("width","783px")
}}}console.log("Number of Cards"+e)
})
},800)
}}}}}setTimeout(function(){$(".threeColProductCards").each(function(){$(this).find(".bankProdCard").css("width",d);
c=$(this).attr("data-card-length")
});
setCardHeight(true);
setCardAlign();
setLastCardActive(lastCardActive);
reinitializeSlick(c,b)
},500)
}});
function setLastCardActive(b){var c=$(".slick-dots li:last");
if(c.hasClass("slick-active")){c.trigger("click")
}if(b){var c=$(".slick-dots li:last");
c.addClass("slick-active");
c.trigger("click")
}}function reinitializeSlick(c,b){if(c==3){$(".bankProdCard-PrimaryBtn").css("min-width","170px");
$(".threeColProductCards").slick("unslick").slick("reinit");
if(b>=1300){setTimeout(function(){cardWidth="296px";
$(".threeColProductCards").each(function(){$(this).find(".bankProdCard").css("width",cardWidth)
})
},500)
}}}function detectDevices(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Windows Phone/i)){return true
}else{return false
}}if($(".RightRail .threeColProductCards").length>0){$("section.RightRail").addClass("bothPad");
var a;
if(window.matchMedia("(device-width : 414px) and (device-height : 896px) and (-webkit-device-pixel-ratio : 3) and (orientation : landscape)").matches){a=2
}else{a=3
}$(".RightRail .threeColProductCards").slick({dots:true,infinite:false,speed:300,slidesToShow:2.1,draggable:false,swipe:true,touchMove:true,centerMode:false,initialSlide:0,slidesToScroll:1,arrows:false,accessibility:false,cssEase:"linear",responsive:[{breakpoint:480,settings:{infinite:false,slidesToShow:1,swipe:true,variableWidth:true,touchMove:true,slidesToScroll:1,centerMode:true,initialSlide:0,dots:true,outerEdgeLimit:true}},{breakpoint:667,settings:{slidesToShow:3,slidesToScroll:1,swipe:true,touchMove:true,infinite:false,centerMode:false,initialSlide:0,dots:true,variableWidth:true,outerEdgeLimit:true}},{breakpoint:740,settings:{slidesToShow:2,slidesToScroll:1,swipe:true,touchMove:true,infinite:false,centerMode:false,initialSlide:0,dots:true,variableWidth:true,outerEdgeLimit:true}},{breakpoint:769,settings:{slidesToShow:3,slidesToScroll:1,swipe:true,touchMove:false,infinite:false,centerMode:false,initialSlide:0,dots:true}},{breakpoint:812,settings:{slidesToShow:a,slidesToScroll:1,swipe:true,touchMove:true,infinite:false,centerMode:false,initialSlide:0,dots:true,variableWidth:true,outerEdgeLimit:true}},{breakpoint:1023,settings:{slidesToShow:2,slidesToScroll:1,swipe:true,touchMove:true,infinite:false,centerMode:false,initialSlide:0,dots:true,variableWidth:true,outerEdgeLimit:true}},{breakpoint:1025,settings:{slidesToShow:2.2,slidesToScroll:1,swipe:true,touchMove:true,infinite:false,centerMode:false,initialSlide:0,dots:true}}]})
}else{callThreeColumnSlider()
}function callThreeColumnSlider(){$(".threeColProductCards").slick({dots:true,infinite:false,speed:300,slidesToShow:3.5,draggable:false,swipe:true,touchMove:true,centerMode:false,initialSlide:0,slidesToScroll:1,arrows:false,accessibility:false,cssEase:"linear",responsive:[{breakpoint:480,settings:{infinite:false,slidesToShow:1,swipe:true,variableWidth:true,touchMove:true,slidesToScroll:1,centerMode:true,initialSlide:0,dots:true,outerEdgeLimit:true}},{breakpoint:667,settings:{slidesToShow:3,slidesToScroll:1,swipe:true,touchMove:true,infinite:false,centerMode:false,initialSlide:0,dots:true,variableWidth:true,outerEdgeLimit:true}},{breakpoint:740,settings:{slidesToShow:2,slidesToScroll:1,swipe:true,touchMove:true,infinite:false,centerMode:false,initialSlide:0,dots:true,variableWidth:true,outerEdgeLimit:true}},{breakpoint:769,settings:{slidesToShow:3,slidesToScroll:1,swipe:true,touchMove:false,infinite:false,centerMode:false,initialSlide:0,dots:true}},{breakpoint:812,settings:{slidesToShow:3,slidesToScroll:1,swipe:true,touchMove:true,infinite:false,centerMode:false,initialSlide:0,dots:true,variableWidth:true,outerEdgeLimit:true}},{breakpoint:1023,settings:{slidesToShow:3,slidesToScroll:1,swipe:true,touchMove:true,infinite:false,centerMode:false,initialSlide:0,dots:true,variableWidth:true,outerEdgeLimit:true}},{breakpoint:1025,settings:{slidesToShow:3,slidesToScroll:1,swipe:true,touchMove:true,infinite:false,centerMode:false,initialSlide:0,dots:true}}]})
}$(".fourProductCards").slick({dots:true,infinite:false,speed:300,slidesToShow:4.2,draggable:false,swipe:true,touchMove:true,centerMode:false,initialSlide:0,slidesToScroll:1,arrows:false,accessibility:false,cssEase:"linear",responsive:[{breakpoint:480,settings:{infinite:false,slidesToShow:1,swipe:true,variableWidth:true,touchMove:true,slidesToScroll:1,centerMode:true,initialSlide:0,dots:true,outerEdgeLimit:true}},{breakpoint:740,settings:{slidesToShow:2,slidesToScroll:1,swipe:true,touchMove:true,infinite:false,centerMode:false,initialSlide:0,dots:true,variableWidth:true,outerEdgeLimit:true}},{breakpoint:769,settings:{slidesToShow:3,slidesToScroll:1,swipe:true,touchMove:true,infinite:false,centerMode:false,initialSlide:0,dots:true}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,swipe:true,touchMove:true,infinite:false,centerMode:false,initialSlide:0,dots:true,variableWidth:true,outerEdgeLimit:true}},{breakpoint:1025,settings:{slidesToShow:3,slidesToScroll:1,swipe:true,touchMove:true,infinite:false,centerMode:false,initialSlide:0,dots:true}}]});
var stHeightFourCol=$(".container.fourCol .slick-track").height();
var stHeightThreeCol=$(".container.threeCol .slick-track").height();
$(window).bind("orientationchange",function(b){location.reload(true)
});
setCardHeight(false);
function setCardHeight(b){setTimeout(function(){var c=-1;
$(".productcompare").each(function(){c=-1;
if($(this).find(".three-card-layout-image").length>0){$(this).find(".three-card-layout-image").each(function(){if(b){$(this).removeAttr("style")
}c=c>$(this).height()?c:$(this).height()
});
$(this).find(".three-card-layout-image").each(function(){$(this).css("height",c)
})
}else{$(this).find(".three-card-layout-noimage").each(function(){if(b){$(this).removeAttr("style")
}c=c>$(this).height()?c:$(this).height()
});
$(this).find(".three-card-layout-noimage").each(function(){$(this).css("height",c)
})
}if($(this).find(".fourColLayoutCheck-noimages").length>0){$(this).find(".fourColLayoutCheck-noimages").each(function(){if(b){$(this).removeAttr("style")
}c=c>$(this).height()?c:$(this).height()
});
$(this).find(".fourColLayoutCheck-noimages").each(function(){$(this).css("height",c)
})
}})
},500)
}setCardAlign();
function setCardAlign(){setTimeout(function(){var c=$(".threeColProductCards").attr("data-card-alignment");
$(".threeColProductCards").each(function(){c=$(this).attr("data-card-alignment");
$(this).find("div.slick-track").addClass(c)
});
var b=$(".fourProductCards").attr("data-card-alignment");
$(".fourProductCards").each(function(){b=$(this).attr("data-card-alignment");
$(this).find("div.slick-track").addClass(b)
})
},500)
}setTimeout(function(){$(".threeColProductCards").each(function(){var b=$(this).attr("data-card-length");
console.log("Cards Length :: "+b);
if(b<="3"){if(!$("section").hasClass("RightRail")){$(this).find(".grid-image").addClass("customLeft")
}if(window.matchMedia("(min-device-width: 1112px)").matches){}}if(b>="4"){if(window.matchMedia("(min-device-width: 1112px)").matches){$(this).find(".grid-image").addClass("customLeft4")
}}if(b<="2"){if($(".RightRail .threeColProductCards").length>0){$(this).find(".bankProdCard").css("cssText","width: 300px")
}}})
},3000);
$(".threeColProductCards").each(function(){var b=$(this).attr("data-card-length");
console.log("Cards Length :: "+b);
if(b=="1"){$(this).find(".slick-list").addClass("slick-list1");
$(this).find(".slick-track").addClass("slick-track1")
}else{if(b=="2"){$(this).find(".slick-list").addClass("slick-list1");
$(this).find(".slick-track").addClass("slick-track1")
}}});
if(window.innerWidth>=667){$(".rowContainer.rowContainerEnh_colorBlkPairSpacing").removeClass("suntrust-background-color-white");
$(".rowContainerEnh_colorBlkPairSpacing .onup-img-text-container").find("img").hide()
}if(window.innerWidth<=417){$(".rowContainer").css("background","none");
$(".gradient-blue-height .suntrust-img-text-container").css("height","auto")
}$(".gradient-blue-height").each(function(){var b=0;
$(".imagetext",this).each(function(){if($(this).height()>b){b=$(this).height()
}});
$(".imagetext",this).height(b)
});
$(".bgImgWhiteContainer").each(function(){var b=$(this).innerHeight();
$(".imagetext",this).each(function(){var c=(b-$(this).height())/2;
$(this).css("margin-top",c-110+"px")
})
});
var isIE11=!!navigator.userAgent.match(/Trident.*rv\:11\./);
if(isIE11){$(".bgImgWhiteContainer").each(function(){var b=$(this).innerHeight();
$(".imagetext",this).each(function(){var c=(b-$(this).height())/2;
$(this).css("margin-top",c-40+"px")
})
})
}$(document).ready(function(){window.onpageshow=function(b){if(b.persisted){window.location.reload()
}}
});
$(document).ready(function(){$(".card-list").slick({slidesToShow:3,accessibility:false,responsive:[{breakpoint:1025,settings:{slidesToShow:2,slidesToScroll:2,swipe:true,touchMove:true,infinite:false,centerMode:false,initialSlide:0,dots:true}},{breakpoint:769,settings:{infinite:false,slidesToShow:2,swipe:true,touchMove:true,slidesToScroll:2,centerMode:false,initialSlide:0,dots:true}},{breakpoint:480,settings:{infinite:false,slidesToShow:1,swipe:true,touchMove:true,slidesToScroll:1,centerMode:true,initialSlide:0,dots:true}}]});
$(".card-footer a,.card-footer button").attr("tabindex","0");
$(window).bind("orientationchange",function(b){location.reload(true)
})
});
$(document).ready(function(){$(".s7socialbutton").attr("tabindex",-1);
if(window.screen.width>1024){var c=$("#fadeTime").val();
var b=parseInt(c);
setTimeout(function(){var d=$(".suntrust-video-player-onup").find("video")[0];
$(".suntrust-video-player").find(".video-description-container").css("display","block");
if(d){d.onplay=function(){$(".suntrust-video-player").find(".video-description-container").fadeOut(b)
};
d.onpause=function(){$(".suntrust-video-player").find(".video-description-container").fadeIn(b);
$(".suntrust-video-player").find(".video-description-container").css("display","block")
};
d.onended=function(){$(".suntrust-video-player").find(".video-description-container").fadeIn(b);
$(".suntrust-video-player").find(".video-description-container").css("display","block")
};
d.ontimeupdate=function(g){var f=g.target.currentTime;
if(f>2){$(".suntrust-video-player").find(".video-description-container").fadeOut(b)
}}
}},4500)
}});
$(window).resize(function(){setTimeout(function(){var b=$("#playOrPause").val();
var c=$(".suntrust-video-player").find("video")[0];
if($(window).width()<1160){if(c.paused||c.played.length==1){$(".video-description-container").css("display","none")
}}},1200)
});
$(document).ready(function(){$(document).on("show.bs.modal",function(){$("html").addClass("remove-scroll")
});
$(document).on("hide.bs.modal",function(){$("html").removeClass("remove-scroll")
})
});
$(".video-modal-link").click(function(f){f.stopPropagation();
f.preventDefault();
var c=$(this);
var d=$(".video-modal-link").attr("data-window-target");
var b=$.ajax({type:"GET",url:d});
b.done(function(h){if(h!=null){var e=$(h).find(".suntrust-video-player-container").html();
$("#video-modal-body").html(e);
$('[data-toggle="popover"]').popover({html:true,title:'<a href="#" class="close" data-dismiss="alert">&times;</a>'});
$(".info-btn-model").click(function(){$(this).addClass("active")
});
$("#VideoModal").modal("toggle");
$("#VideoModal").find(".modal-dialog").removeClass("video-small-modal-dialog video-medium-modal-dialog video-large-modal-dialog");
var g=c.data("modalsize");
$("#VideoModal").find(".modal-dialog").addClass(g)
}});
return false
});
var servletPath=$(".header-odo-params").attr("data-counter-fetch");
var counterDiffValue=$(".header-odo-params").attr("data-counter-differnce");
if($(".newClassStatic")&&$(".newClassStatic").length==1){if(typeof(Odometer)=="function"){$.ajax({type:"GET",url:servletPath,cache:false,crossdomain:true,async:true,success:function(c){var b=document.querySelector(".newClassStatic");
odbelow=new Odometer({el:b,auto:false,duration:1000,value:parseInt(c)-parseInt(counterDiffValue),selector:".newClassStatic",format:"(,ddd).dd",theme:"slot-machine"});
odbelow.update(c)
}})
}}$(function(){$("[data-toggle=popover]").popover({placement:"left"})
});
$(document).ready(function(){$("html").on("mouseup",function(b){if(!$(b.target).closest(".popover").length){$(".popover").each(function(){$(this).closest("div.popover").popover("hide")
})
}setTimeout(function(){var c=$(".popover").length;
if(c==0){$(".info-btn").removeClass("active")
}},300)
})
});
var $videoAccordionshow=$("#showTranscript .suntrust-video-transcript-accordion");
var $videoAccordionShowThis,$videoAccordionhideThis;
function videoAccordionshow(){$videoAccordionShowThis.parent().next().show();
$videoAccordionShowThis.parent().next().find(".suntrust-video-accordion-section").show();
$videoAccordionShowThis.parent().next().find(".suntrust-video-transcript-accordion").addClass("active");
$videoAccordionShowThis.parent().hide()
}function videoAccordionhide(){$videoAccordionhideThis.parent().prev("#showTranscript").show();
$videoAccordionhideThis.parent().hide();
$videoAccordionhideThis.parent().find(".suntrust-video-accordion-section").hide();
$videoAccordionShowThis.parent().find(".suntrust-video-transcript-accordion").removeClass("active")
}$(document).on("click","#showTranscript .suntrust-video-transcript-accordion",function(){$videoAccordionShowThis=$(this);
videoAccordionshow($videoAccordionShowThis)
});
var $videoAccordionhide=$("#hideTranscript .suntrust-video-transcript-accordion");
$(document).on("click","#hideTranscript .suntrust-video-transcript-accordion",function(){$videoAccordionhideThis=$(this);
videoAccordionhide($videoAccordionhideThis)
});
$(document).on("keypress","#showTranscript .suntrust-video-transcript-accordion",function(b){if(b.which==13){$videoAccordionShowThis=$(this);
videoAccordionshow($videoAccordionShowThis)
}});
$(document).on("keypress","#hideTranscript .suntrust-video-transcript-accordion",function(b){if(b.which==13){$videoAccordionhideThis=$(this);
videoAccordionhide($videoAccordionhideThis)
}});
(function(c,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):c.Popper=b()
})(this,function(){function bb(b){return b&&"[object Function]"==={}.toString.call(b)
}function aW(c,b){if(1!==c.nodeType){return[]
}var d=getComputedStyle(c,null);
return b?d[b]:d
}function a1(b){return"HTML"===b.nodeName?b:b.parentNode||b.host
}function a2(g){if(!g){return document.body
}switch(g.nodeName){case"HTML":case"BODY":return g.ownerDocument.body;
case"#document":return g.body
}var b=aW(g),d=b.overflow,f=b.overflowX,c=b.overflowY;
return/(auto|scroll|overlay)/.test(d+c+f)?g:a2(a1(g))
}function aY(b){return 11===b?aR:10===b?aH:aR||aH
}function a0(c){if(!c){return document.documentElement
}for(var d=aY(10)?document.body:null,f=c.offsetParent;
f===d&&c.nextElementSibling;
){f=(c=c.nextElementSibling).offsetParent
}var b=f&&f.nodeName;
return b&&"BODY"!==b&&"HTML"!==b?-1!==["TD","TABLE"].indexOf(f.nodeName)&&"static"===aW(f,"position")?a0(f):f:c?c.ownerDocument.documentElement:document.documentElement
}function aX(c){var b=c.nodeName;
return"BODY"!==b&&("HTML"===b||a0(c.firstElementChild)===c)
}function bc(b){return null===b.parentNode?b:bc(b.parentNode)
}function bg(j,d){if(!j||!j.nodeType||!d||!d.nodeType){return document.documentElement
}var k=j.compareDocumentPosition(d)&Node.DOCUMENT_POSITION_FOLLOWING,m=k?j:d,c=k?d:j,g=document.createRange();
g.setStart(m,0),g.setEnd(c,0);
var b=g.commonAncestorContainer;
if(j!==b&&d!==b||m.contains(c)){return aX(b)?b:a0(b)
}var h=bc(j);
return h.host?bg(h.host,d):bg(j,bc(d).host)
}function a4(f){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top",g="top"===c?"scrollTop":"scrollLeft",h=f.nodeName;
if("BODY"===h||"HTML"===h){var b=f.ownerDocument.documentElement,d=f.ownerDocument.scrollingElement||b;
return d[g]
}return f[g]
}function ba(f,c){var g=2<arguments.length&&void 0!==arguments[2]&&arguments[2],h=a4(c,"top"),b=a4(c,"left"),d=g?-1:1;
return f.top+=h*d,f.bottom+=h*d,f.left+=b*d,f.right+=b*d,f
}function a3(c,b){var d="x"===b?"Left":"Top",f="Left"==d?"Right":"Bottom";
return parseFloat(c["border"+d+"Width"],10)+parseFloat(c["border"+f+"Width"],10)
}function a8(c,b,d,f){return aJ(b["offset"+c],b["scroll"+c],d["client"+c],d["offset"+c],d["scroll"+c],aY(10)?d["offset"+c]+f["margin"+("Height"===c?"Top":"Left")]+f["margin"+("Height"===c?"Bottom":"Right")]:0)
}function bd(){var c=document.body,b=document.documentElement,d=aY(10)&&getComputedStyle(b);
return{height:a8("Height",c,b,d),width:a8("Width",c,b,d)}
}function a9(b){return aN({},b,{right:b.left+b.width,bottom:b.top+b.height})
}function aV(m){var c={};
try{if(aY(10)){c=m.getBoundingClientRect();
var g=a4(m,"top"),j=a4(m,"left");
c.top+=g,c.left+=j,c.bottom+=g,c.right+=j
}else{c=m.getBoundingClientRect()
}}catch(w){}var b={left:c.left,top:c.top,width:c.right-c.left,height:c.bottom-c.top},y="HTML"===m.nodeName?bd():{},q=y.width||m.clientWidth||b.right-b.left,r=y.height||m.clientHeight||b.bottom-b.top,l=m.offsetWidth-q,k=m.offsetHeight-r;
if(l||k){var v=w(m);
l-=a3(v,"x"),k-=a3(v,"y"),b.width-=l,b.height-=k
}return a9(b)
}function be(r,g){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],f=aY(10),C="HTML"===g.nodeName,t=aV(r),A=aV(g),k=a2(r),j=aW(g),q=parseFloat(j.borderTopWidth,10),u=parseFloat(j.borderLeftWidth,10);
n&&"HTML"===g.nodeName&&(A.top=aJ(A.top,0),A.left=aJ(A.left,0));
var z=a9({top:t.top-A.top-q,left:t.left-A.left-u,width:t.width,height:t.height});
if(z.marginTop=0,z.marginLeft=0,!f&&C){var v=parseFloat(j.marginTop,10),B=parseFloat(j.marginLeft,10);
z.top-=q-v,z.bottom-=q-v,z.left-=u-B,z.right-=u-B,z.marginTop=v,z.marginLeft=B
}return(f&&!n?g.contains(k):g===k&&"BODY"!==k.nodeName)&&(z=ba(z,g)),z
}function aQ(j){var l=1<arguments.length&&void 0!==arguments[1]&&arguments[1],f=j.ownerDocument.documentElement,g=be(j,f),h=aJ(f.clientWidth,window.innerWidth||0),b=aJ(f.clientHeight,window.innerHeight||0),c=l?0:a4(f),m=l?0:a4(f,"left"),k={top:c-g.top+g.marginTop,left:m-g.left+g.marginLeft,width:h,height:b};
return a9(k)
}function aT(b){var c=b.nodeName;
return"BODY"===c||"HTML"===c?!1:"fixed"===aW(b,"position")||aT(a1(b))
}function az(b){if(!b||!b.parentElement||aY()){return document.documentElement
}for(var c=b.parentElement;
c&&"none"===aW(c,"transform");
){c=c.parentElement
}return c||document.documentElement
}function aU(v,y,n,b){var c=4<arguments.length&&void 0!==arguments[4]&&arguments[4],z={top:0,left:0},w=c?az(v):bg(v,y);
if("viewport"===b){z=aQ(w,c)
}else{var k;
"scrollParent"===b?(k=a2(a1(y)),"BODY"===k.nodeName&&(k=v.ownerDocument.documentElement)):"window"===b?k=v.ownerDocument.documentElement:k=b;
var u=be(k,w,c);
if("HTML"===k.nodeName&&!aT(w)){var j=bd(),o=j.height,q=j.width;
z.top+=u.top-u.marginTop,z.bottom=o+u.top,z.left+=u.left-u.marginLeft,z.right=q+u.left
}else{z=u
}}return z.left+=n,z.top+=n,z.right-=n,z.bottom-=n,z
}function aS(c){var b=c.width,d=c.height;
return b*d
}function ao(q,w,g,h,k){var b=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;
if(-1===q.indexOf("auto")){return q
}var c=aU(g,h,b,k),y={top:{width:c.width,height:w.top-c.top},right:{width:c.right-w.right,height:c.height},bottom:{width:c.width,height:c.bottom-w.bottom},left:{width:w.left-c.left,height:c.height}},u=Object.keys(y).map(function(d){return aN({key:d},y[d],{area:aS(y[d])})
}).sort(function(f,d){return d.area-f.area
}),v=u.filter(function(f){var d=f.width,l=f.height;
return d>=g.clientWidth&&l>=g.clientHeight
}),j=0<v.length?v[0].key:u[0].key,m=q.split("-")[1];
return j+(m?"-"+m:"")
}function ar(d,c,f){var g=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,b=g?az(c):bg(c,f);
return be(f,b,g)
}function ak(d){var c=getComputedStyle(d),f=parseFloat(c.marginTop)+parseFloat(c.marginBottom),g=parseFloat(c.marginLeft)+parseFloat(c.marginRight),b={width:d.offsetWidth+g,height:d.offsetHeight+f};
return b
}function aj(c){var b={left:"right",right:"left",bottom:"top",top:"bottom"};
return c.replace(/left|right|bottom|top/g,function(d){return b[d]
})
}function aC(j,m,f){f=f.split("-")[0];
var g=ak(j),h={width:g.width,height:g.height},b=-1!==["right","left"].indexOf(f),c=b?"top":"left",q=b?"left":"top",k=b?"height":"width",l=b?"width":"height";
return h[c]=m[c]+m[k]/2-g[k]/2,h[q]=f===q?m[q]-g[l]:m[aj(q)],h
}function aB(c,b){return Array.prototype.find?c.find(b):c.filter(b)[0]
}function ap(c,b,d){if(Array.prototype.findIndex){return c.findIndex(function(g){return g[b]===d
})
}var f=aB(c,function(g){return g[b]===d
});
return c.indexOf(f)
}function an(c,d,e){var b=void 0===e?c:c.slice(0,ap(c,"name",e));
return b.forEach(function(f){f["function"]&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
var g=f["function"]||f.fn;
f.enabled&&bb(g)&&(d.offsets.popper=a9(d.offsets.popper),d.offsets.reference=a9(d.offsets.reference),d=g(d,f))
}),d
}function a5(){if(!this.state.isDestroyed){var b={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};
b.offsets.reference=ar(this.state,this.popper,this.reference,this.options.positionFixed),b.placement=ao(this.options.placement,b.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),b.originalPlacement=b.placement,b.positionFixed=this.options.positionFixed,b.offsets.popper=aC(this.popper,b.offsets.reference,b.placement),b.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",b=an(this.modifiers,b),this.state.isCreated?this.options.onUpdate(b):(this.state.isCreated=!0,this.options.onCreate(b))
}}function ag(c,b){return c.some(function(d){var f=d.name,g=d.enabled;
return g&&f===b
})
}function aE(f){for(var c=[!1,"ms","Webkit","Moz","O"],g=f.charAt(0).toUpperCase()+f.slice(1),h=0;
h<c.length;
h++){var b=c[h],d=b?""+b+g:f;
if("undefined"!=typeof document.body.style[d]){return d
}}return null
}function aw(){return this.state.isDestroyed=!0,ag(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[aE("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this
}function aF(c){var b=c.ownerDocument;
return b?b.defaultView:window
}function aq(g,c,h,b){var d="BODY"===g.nodeName,f=d?g.ownerDocument.defaultView:g;
f.addEventListener(c,h,{passive:!0}),d||aq(a2(f.parentNode),c,h,b),b.push(f)
}function av(f,c,g,b){g.updateBound=b,aF(f).addEventListener("resize",g.updateBound,{passive:!0});
var d=a2(f);
return aq(d,"scroll",g.updateBound,g.scrollParents),g.scrollElement=d,g.eventsEnabled=!0,g
}function ay(){this.state.eventsEnabled||(this.state=av(this.reference,this.options,this.state,this.scheduleUpdate))
}function al(c,b){return aF(c).removeEventListener("resize",b.updateBound),b.scrollParents.forEach(function(d){d.removeEventListener("scroll",b.updateBound)
}),b.updateBound=null,b.scrollParents=[],b.scrollElement=null,b.eventsEnabled=!1,b
}function ai(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=al(this.reference,this.state))
}function ac(b){return""!==b&&!isNaN(parseFloat(b))&&isFinite(b)
}function a6(c,b){Object.keys(b).forEach(function(d){var e="";
-1!==["width","height","top","right","bottom","left"].indexOf(d)&&ac(b[d])&&(e="px"),c.style[d]=b[d]+e
})
}function at(c,b){Object.keys(b).forEach(function(d){var e=b[d];
!1===e?c.removeAttribute(d):c.setAttribute(d,b[d])
})
}function aZ(f,c,g){var h=aB(f,function(j){var k=j.name;
return k===c
}),b=!!h&&f.some(function(j){return j.name===g&&j.enabled&&j.order<h.order
});
if(!b){var d="`"+c+"`";
console.warn("`"+g+"` modifier is required by "+d+" modifier in order to work, be sure to include it before "+d+"!")
}return b
}function ax(b){return"end"===b?"start":"start"===b?"end":b
}function aP(c){var b=1<arguments.length&&void 0!==arguments[1]&&arguments[1],d=aG.indexOf(c),f=aG.slice(d+1).concat(aG.slice(0,d));
return b?f.reverse():f
}function ah(j,m,f,g){var h=j.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),b=+h[1],c=h[2];
if(!b){return j
}if(0===c.indexOf("%")){var q;
switch(c){case"%p":q=f;
break;
case"%":case"%r":default:q=g
}var k=a9(q);
return k[m]/100*b
}if("vh"===c||"vw"===c){var l;
return l="vh"===c?aJ(document.documentElement.clientHeight,window.innerHeight||0):aJ(document.documentElement.clientWidth,window.innerWidth||0),l/100*b
}return b
}function bi(j,m,f,g){var h=[0,0],b=-1!==["right","left"].indexOf(g),c=j.split(/(\+|\-)/).map(function(d){return d.trim()
}),q=c.indexOf(aB(c,function(d){return -1!==d.search(/,|\s/)
}));
c[q]&&-1===c[q].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
var k=/\s*,\s*|\s+/,l=-1===q?[c]:[c.slice(0,q).concat([c[q].split(k)[0]]),[c[q].split(k)[1]].concat(c.slice(q+1))];
return l=l.map(function(r,t){var d=(1===t?!b:b)?"height":"width",o=!1;
return r.reduce(function(p,n){return""===p[p.length-1]&&-1!==["+","-"].indexOf(n)?(p[p.length-1]=n,o=!0,p):o?(p[p.length-1]+=n,o=!1,p):p.concat(n)
},[]).map(function(n){return ah(n,d,m,f)
})
}),l.forEach(function(n,d){n.forEach(function(e,p){ac(e)&&(h[d]+=e*("-"===n[p-1]?-1:1))
})
}),h
}function ad(j,l){var f,g=l.offset,h=j.placement,b=j.offsets,c=b.popper,m=b.reference,k=h.split("-")[0];
return f=ac(+g)?[+g,0]:bi(g,c,m,k),"left"===k?(c.top+=f[0],c.left-=f[1]):"right"===k?(c.top+=f[0],c.left+=f[1]):"top"===k?(c.left+=f[0],c.top-=f[1]):"bottom"===k&&(c.left+=f[0],c.top+=f[1]),j.popper=c,j
}for(var au=Math.min,am=Math.round,ab=Math.floor,aJ=Math.max,bf="undefined"!=typeof window&&"undefined"!=typeof document,af=["Edge","Trident","Firefox"],aO=0,aa=0;
aa<af.length;
aa+=1){if(bf&&0<=navigator.userAgent.indexOf(af[aa])){aO=1;
break
}}var a7=bf&&window.Promise,aM=a7?function(c){var b=!1;
return function(){b||(b=!0,window.Promise.resolve().then(function(){b=!1,c()
}))
}
}:function(c){var b=!1;
return function(){b||(b=!0,setTimeout(function(){b=!1,c()
},aO))
}
},aR=bf&&!!(window.MSInputMethodContext&&document.documentMode),aH=bf&&/MSIE 10/.test(navigator.userAgent),aI=function(c,b){if(!(c instanceof b)){throw new TypeError("Cannot call a class as a function")
}},aD=function(){function b(d,c){for(var f,g=0;
g<c.length;
g++){f=c[g],f.enumerable=f.enumerable||!1,f.configurable=!0,"value" in f&&(f.writable=!0),Object.defineProperty(d,f.key,f)
}}return function(c,d,e){return d&&b(c.prototype,d),e&&b(c,e),c
}
}(),aA=function(c,b,d){return b in c?Object.defineProperty(c,b,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[b]=d,c
},aN=Object.assign||function(c){for(var b,d=1;
d<arguments.length;
d++){for(var f in b=arguments[d],b){Object.prototype.hasOwnProperty.call(b,f)&&(c[f]=b[f])
}}return c
},aL=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],aG=aL.slice(3),bh={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},aK=function(){function b(f,g){var c=this,d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};
aI(this,b),this.scheduleUpdate=function(){return requestAnimationFrame(c.update)
},this.update=aM(this.update.bind(this)),this.options=aN({},b.Defaults,d),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=f&&f.jquery?f[0]:f,this.popper=g&&g.jquery?g[0]:g,this.options.modifiers={},Object.keys(aN({},b.Defaults.modifiers,d.modifiers)).forEach(function(h){c.options.modifiers[h]=aN({},b.Defaults.modifiers[h]||{},d.modifiers?d.modifiers[h]:{})
}),this.modifiers=Object.keys(this.options.modifiers).map(function(h){return aN({name:h},c.options.modifiers[h])
}).sort(function(j,h){return j.order-h.order
}),this.modifiers.forEach(function(h){h.enabled&&bb(h.onLoad)&&h.onLoad(c.reference,c.popper,c.options,h,c.state)
}),this.update();
var e=this.options.eventsEnabled;
e&&this.enableEventListeners(),this.state.eventsEnabled=e
}return aD(b,[{key:"update",value:function(){return a5.call(this)
}},{key:"destroy",value:function(){return aw.call(this)
}},{key:"enableEventListeners",value:function(){return ay.call(this)
}},{key:"disableEventListeners",value:function(){return ai.call(this)
}}]),b
}();
return aK.Utils=("undefined"==typeof window?global:window).PopperUtils,aK.placements=aL,aK.Defaults={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(k){var u=k.placement,f=u.split("-")[0],g=u.split("-")[1];
if(g){var j=k.offsets,b=j.reference,c=j.popper,v=-1!==["bottom","top"].indexOf(f),m=v?"left":"top",q=v?"width":"height",h={start:aA({},m,b[m]),end:aA({},m,b[m]+b[q]-c[q])};
k.offsets.popper=aN({},c,h[g])
}return k
}},offset:{order:200,enabled:!0,fn:ad,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(q,w){var c=w.boundariesElement||a0(q.instance.popper);
q.instance.reference===c&&(c=a0(c));
var g=aE("transform"),k=q.instance.popper.style,b=k.top,y=k.left,u=k[g];
k.top="",k.left="",k[g]="";
var v=aU(q.instance.popper,q.instance.reference,w.padding,c,q.positionFixed);
k.top=b,k.left=y,k[g]=u,w.boundaries=v;
var j=w.priority,p=q.offsets.popper,h={primary:function(d){var f=p[d];
return p[d]<v[d]&&!w.escapeWithReference&&(f=aJ(p[d],v[d])),aA({},d,f)
},secondary:function(d){var f="right"===d?"left":"top",l=p[f];
return p[d]>v[d]&&!w.escapeWithReference&&(l=au(p[f],v[d]-("right"===d?p.width:p.height))),aA({},f,l)
}};
return j.forEach(function(f){var d=-1===["left","top"].indexOf(f)?"secondary":"primary";
p=aN({},p,h[d](f))
}),q.offsets.popper=p,q
},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(j){var m=j.offsets,f=m.popper,g=m.reference,h=j.placement.split("-")[0],b=ab,c=-1!==["top","bottom"].indexOf(h),q=c?"right":"bottom",k=c?"left":"top",l=c?"width":"height";
return f[q]<b(g[k])&&(j.offsets.popper[k]=b(g[k])-f[l]),f[k]>b(g[q])&&(j.offsets.popper[k]=b(g[q])),j
}},arrow:{order:500,enabled:!0,fn:function(K,C){var D;
if(!aZ(K.instance.modifiers,"arrow","keepTogether")){return K
}var H=C.element;
if("string"==typeof H){if(H=K.instance.popper.querySelector(H),!H){return K
}}else{if(!K.instance.popper.contains(H)){return console.warn("WARNING: `arrow.element` must be child of its popper element!"),K
}}var A=K.placement.split("-")[0],B=K.offsets,z=B.popper,M=B.reference,P=-1!==["left","right"].indexOf(A),G=P?"height":"width",J=P?"Top":"Left",F=J.toLowerCase(),I=P?"left":"top",N=P?"bottom":"right",q=ak(H)[G];
M[N]-q<z[F]&&(K.offsets.popper[F]-=z[F]-(M[N]-q)),M[F]+q>z[N]&&(K.offsets.popper[F]+=M[F]+q-z[N]),K.offsets.popper=a9(K.offsets.popper);
var O=M[F]+M[G]/2-q/2,g=aW(K.instance.popper),j=parseFloat(g["margin"+J],10),t=parseFloat(g["border"+J+"Width"],10),k=O-K.offsets.popper[F]-j-t;
return k=aJ(au(z[G]-q,k),0),K.arrowElement=H,K.offsets.arrow=(D={},aA(D,F,am(k)),aA(D,I,""),D),K
},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(g,c){if(ag(g.instance.modifiers,"inner")){return g
}if(g.flipped&&g.placement===g.originalPlacement){return g
}var h=aU(g.instance.popper,g.instance.reference,c.padding,c.boundariesElement,g.positionFixed),j=g.placement.split("-")[0],b=aj(j),d=g.placement.split("-")[1]||"",f=[];
switch(c.behavior){case bh.FLIP:f=[j,b];
break;
case bh.CLOCKWISE:f=aP(j);
break;
case bh.COUNTERCLOCKWISE:f=aP(j,!0);
break;
default:f=c.behavior
}return f.forEach(function(C,q){if(j!==C||f.length===q+1){return g
}j=g.placement.split("-")[0],b=aj(j);
var z=g.offsets.popper,k=g.offsets.reference,p=ab,e="left"===j&&p(z.right)>p(k.left)||"right"===j&&p(z.left)<p(k.right)||"top"===j&&p(z.bottom)>p(k.top)||"bottom"===j&&p(z.top)<p(k.bottom),n=p(z.left)<p(h.left),r=p(z.right)>p(h.right),o=p(z.top)<p(h.top),B=p(z.bottom)>p(h.bottom),v="left"===j&&n||"right"===j&&r||"top"===j&&o||"bottom"===j&&B,t=-1!==["top","bottom"].indexOf(j),A=!!c.flipVariations&&(t&&"start"===d&&n||t&&"end"===d&&r||!t&&"start"===d&&o||!t&&"end"===d&&B);
(e||v||A)&&(g.flipped=!0,(e||v)&&(j=f[q+1]),A&&(d=ax(d)),g.placement=j+(d?"-"+d:""),g.offsets.popper=aN({},g.offsets.popper,aC(g.instance.popper,g.offsets.reference,g.placement)),g=an(g.instance.modifiers,g,"flip"))
}),g
},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(h){var c=h.placement,j=c.split("-")[0],k=h.offsets,b=k.popper,f=k.reference,g=-1!==["left","right"].indexOf(j),d=-1===["top","left"].indexOf(j);
return b[g?"left":"top"]=f[j]-(d?b[g?"width":"height"]:0),h.placement=aj(c),h.offsets.popper=a9(b),h
}},hide:{order:800,enabled:!0,fn:function(c){if(!aZ(c.instance.modifiers,"hide","preventOverflow")){return c
}var b=c.offsets.reference,d=aB(c.instance.modifiers,function(f){return"preventOverflow"===f.name
}).boundaries;
if(b.bottom<d.top||b.left>d.right||b.top>d.bottom||b.right<d.left){if(!0===c.hide){return c
}c.hide=!0,c.attributes["x-out-of-boundaries"]=""
}else{if(!1===c.hide){return c
}c.hide=!1,c.attributes["x-out-of-boundaries"]=!1
}return c
}},computeStyle:{order:850,enabled:!0,fn:function(I,q){var z=q.x,A=q.y,D=I.offsets.popper,v=aB(I.instance.modifiers,function(b){return"applyStyle"===b.name
}).gpuAcceleration;
void 0!==v&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
var u,J,N=void 0===v?q.gpuAcceleration:v,C=a0(I.instance.popper),H=aV(C),B={position:D.position},F={left:ab(D.left),top:am(D.top),bottom:am(D.bottom),right:ab(D.right)},K="bottom"===z?"top":"bottom",G="right"===A?"left":"right",M=aE("transform");
if(J="bottom"==K?-H.height+F.bottom:F.top,u="right"==G?-H.width+F.right:F.left,N&&M){B[M]="translate3d("+u+"px, "+J+"px, 0)",B[K]=0,B[G]=0,B.willChange="transform"
}else{var j="bottom"==K?-1:1,k="right"==G?-1:1;
B[K]=J*j,B[G]=u*k,B.willChange=K+", "+G
}var p={"x-placement":I.placement};
return I.attributes=aN({},p,I.attributes),I.styles=aN({},B,I.styles),I.arrowStyles=aN({},I.offsets.arrow,I.arrowStyles),I
},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(b){return a6(b.instance.popper,b.styles),at(b.instance.popper,b.attributes),b.arrowElement&&Object.keys(b.arrowStyles).length&&a6(b.arrowElement,b.arrowStyles),b
},onLoad:function(g,c,h,j,b){var d=ar(b,c,g,h.positionFixed),f=ao(h.placement,d,c,g,h.modifiers.flip.boundariesElement,h.modifiers.flip.padding);
return c.setAttribute("x-placement",f),a6(c,{position:h.positionFixed?"fixed":"absolute"}),h
},gpuAcceleration:void 0}}},aK
});