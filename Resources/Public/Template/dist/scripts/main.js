function attachValidationEvents(){jQuery(".Tx-Formhandler FORM *[name='contact[name]']").blur(function(){var a=jQuery(this),b=encodeURIComponent(a.val());("radio"==a.attr("type")||"checkbox"==a.attr("type"))&&""==a.attr("checked")&&(b="");var c=jQuery(".Tx-Formhandler FORM #loading_name"),d=jQuery(".Tx-Formhandler FORM #result_name");c.show(),d.hide();var e="/index.php?&id=2&L=0&randomID=e4469484725f4b36d6a90f7c37cfc68a&field=name&uploadedFileName=&eID=formhandler&value=";e=e.replace("value=","value="+b),d.load(e,function(){c.hide(),d.show(),isFieldValid=!1,d.find("SPAN.error").length>0?d.data("isValid",!1):(isFieldValid=!0,d.data("isValid",!0))})}),jQuery(".Tx-Formhandler FORM *[name='contact[email]']").blur(function(){var a=jQuery(this),b=encodeURIComponent(a.val());("radio"==a.attr("type")||"checkbox"==a.attr("type"))&&""==a.attr("checked")&&(b="");var c=jQuery(".Tx-Formhandler FORM #loading_email"),d=jQuery(".Tx-Formhandler FORM #result_email");c.show(),d.hide();var e="/index.php?&id=2&L=0&randomID=e4469484725f4b36d6a90f7c37cfc68a&field=email&uploadedFileName=&eID=formhandler&value=";e=e.replace("value=","value="+b),d.load(e,function(){c.hide(),d.show(),isFieldValid=!1,d.find("SPAN.error").length>0?d.data("isValid",!1):(isFieldValid=!0,d.data("isValid",!0))})}),jQuery(".Tx-Formhandler FORM *[name='contact[message]']").blur(function(){var a=jQuery(this),b=encodeURIComponent(a.val());("radio"==a.attr("type")||"checkbox"==a.attr("type"))&&""==a.attr("checked")&&(b="");var c=jQuery(".Tx-Formhandler FORM #loading_message"),d=jQuery(".Tx-Formhandler FORM #result_message");c.show(),d.hide();var e="/index.php?&id=2&L=0&randomID=e4469484725f4b36d6a90f7c37cfc68a&field=message&uploadedFileName=&eID=formhandler&value=";e=e.replace("value=","value="+b),d.load(e,function(){c.hide(),d.show(),isFieldValid=!1,d.find("SPAN.error").length>0?d.data("isValid",!1):(isFieldValid=!0,d.data("isValid",!0))})})}var mpSite={updateSecondaryNavigation:function(){var a=$(".cd-section"),b=$(".cd-secondary-nav");a.each(function(){var a=$(this),c=a.height()+parseInt(a.css("paddingTop").replace("px",""))+parseInt(a.css("paddingBottom").replace("px","")),d=b.find('a[href="#'+a.attr("id")+'"]');console.log(d),console.log(c),console.log(a),a.offset().top-b.height()<=$(window).scrollTop()&&a.offset().top+c-b.height()>$(window).scrollTop()?d.addClass("active"):d.removeClass("active")})}},mpReferenzen={collection:null,checkResult:function(){},printResult:function(){},getBaseUrl:function(){return"undefined"==typeof location.origin?location.origin=location.protocol+"//"+location.host:location.origin},makeRequest:function(a){var b=mpReferenzen.getBaseUrl()+"/index.php?id=2",c=parseInt(a.find("figure").attr("data-referenz"));$.ajax({url:b,type:"POST",data:{"tx_mpreferenzen_gallery[referenz]":c,"tx_mpreferenzen_gallery[action]":"show","tx_mpreferenzen_gallery[controller]":"Referenz",type:"999"},beforeSend:function(){$("body,html").animate({scrollTop:$("#c2").offset().top},700)},success:function(a){$("#single_reference").html(a),$("#close-referenz").on("click",function(a){a.preventDefault(),$("#single_reference").html(""),$("body,html").animate({scrollTop:$("#c2").offset().top},700)})},error:function(a,b,c){console.log(a.status),console.log(c)}})},init:function(){mpReferenzen.collection=$(".tx-mp-referenzen > a"),mpReferenzen.collection.on("click",function(a){a.preventDefault(),mpReferenzen.makeRequest($(this))})}};jQuery(document).ready(function(a){mpReferenzen.init();var b=a(".cd-secondary-nav"),c=b.offset().top,d=a("#cd-intro").height()+parseInt(a("#logo").css("paddingTop").replace("px","")),e=a("#foward"),f=a("#home");a(window).on("scroll",function(){a(window).scrollTop()>d&&f.addClass("is-hidden"),a(window).scrollTop()>c?(b.addClass("is-fixed"),a("#c1").addClass("has-top-margin"),setTimeout(function(){f.addClass("slide-in")},50)):(b.removeClass("is-fixed"),a("#c1").removeClass("has-top-margin"),setTimeout(function(){b.removeClass("animate-children"),f.removeClass("slide-in")},50))}),a(".cd-secondary-nav-trigger").on("click",function(c){c.preventDefault(),a(this).toggleClass("menu-is-open"),b.find("ul").toggleClass("is-visible")}),b.find("ul a").on("click",function(c){c.preventDefault();var d=a(this.hash);a("body,html").animate({scrollTop:d.offset().top-b.height()+1},400),a(".cd-secondary-nav-trigger").removeClass("menu-is-open"),b.find("ul").removeClass("is-visible")}),e.on("click",function(b){b.preventDefault(),a("body,html").animate({scrollTop:a(".cd-secondary-nav").offset().top},700)}),f.on("click",function(b){b.preventDefault(),a("body,html").animate({scrollTop:a("main").offset().top},700)}),a("#toTop").on("click",function(b){b.preventDefault(),a("body,html").animate({scrollTop:a("main").offset().top},700)}),a("a.internal-link").on("click",function(b){b.preventDefault(),a("body,html").animate({scrollTop:a(a(this).attr("href")).offset().top},700)}),a(".cd-primary-nav").on("click",function(b){a(b.target).is(".cd-primary-nav")&&a(this).children("ul").toggleClass("is-visible")})}),jQuery(function(){function a(b){var c=b.closest(".Tx-Formhandler"),d=b.closest("FORM");b.attr("disabled","disabled");var e="/index.php?&id=2&L=0&randomID=e4469484725f4b36d6a90f7c37cfc68a&field=&uploadedFileName=&eID=formhandler-ajaxsubmit&uid=11",f=d.serialize()+"&"+b.attr("name")+"=submit";return c.find(".loading_ajax-submit").show(),jQuery.ajax({type:"post",url:e,data:f,dataType:"json",success:function(b){b.redirect?window.location.href=b.redirect:(d.closest(".Tx-Formhandler").replaceWith(b.form),jQuery(".Tx-Formhandler INPUT[type='submit']").on("click",function(b){b.preventDefault(),a(jQuery(this))}),jQuery(".Tx-Formhandler FORM").on("submit",function(a){return a.preventDefault(),!1}),attachValidationEvents())}}),!1}jQuery(".Tx-Formhandler FORM").on("submit",function(a){return a.preventDefault(),!1}),jQuery(".Tx-Formhandler INPUT[type='submit']").on("click",function(b){b.preventDefault(),a(jQuery(this))})}),jQuery(function(){attachValidationEvents()});