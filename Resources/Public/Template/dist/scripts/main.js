function updateSecondaryNavigation(){var a=$(".cd-section"),b=$(".cd-secondary-nav");a.each(function(){var a=$(this),c=a.height()+parseInt(a.css("paddingTop").replace("px",""))+parseInt(a.css("paddingBottom").replace("px","")),d=b.find('a[href="#'+a.attr("id")+'"]');a.offset().top-b.height()<=$(window).scrollTop()&&a.offset().top+c-b.height()>$(window).scrollTop()?d.addClass("active"):d.removeClass("active")})}jQuery(document).ready(function(a){var b=a(".cd-secondary-nav"),c=b.offset().top,d=a("#cd-intro").height()+parseInt(a("#logo").css("paddingTop").replace("px","")),e=a("#foward"),f=a("#home");a(window).on("scroll",function(){a(window).scrollTop()>d&&f.addClass("is-hidden"),a(window).scrollTop()>c?(b.addClass("is-fixed"),a(".cd-main-content").addClass("has-top-margin"),setTimeout(function(){f.addClass("slide-in")},50)):(b.removeClass("is-fixed"),a(".cd-main-content").removeClass("has-top-margin"),setTimeout(function(){b.removeClass("animate-children"),f.removeClass("slide-in")},50)),updateSecondaryNavigation()}),a(".cd-secondary-nav-trigger").on("click",function(c){c.preventDefault(),a(this).toggleClass("menu-is-open"),b.find("ul").toggleClass("is-visible")}),b.find("ul a").on("click",function(c){c.preventDefault();var d=a(this.hash);a("body,html").animate({scrollTop:d.offset().top-b.height()+1},400),a(".cd-secondary-nav-trigger").removeClass("menu-is-open"),b.find("ul").removeClass("is-visible")}),e.on("click",function(b){b.preventDefault(),a("body,html").animate({scrollTop:a("main").offset().top},700)}),f.on("click",function(b){b.preventDefault();var c=a("main").offset().top;a("body,html").animate({scrollTop:c},700)}),a(".cd-primary-nav").on("click",function(b){a(b.target).is(".cd-primary-nav")&&a(this).children("ul").toggleClass("is-visible")})});