var mpSite = {
    updateSecondaryNavigation: function() {
        var contentSections = $('.cd-section'),
            secondaryNav    = $('.cd-secondary-nav');

        contentSections.each(function() {
            var actual = $(this),
                actualHeight = actual.height() + parseInt(actual.css('paddingTop').replace('px', '')) + parseInt(actual.css('paddingBottom').replace('px', '')),
                actualAnchor = secondaryNav.find('a[href="#' + actual.attr('id') + '"]');

            console.log(actualAnchor);
            console.log(actualHeight);
            console.log(actual);

            if ((actual.offset().top - secondaryNav.height() <= $(window).scrollTop()) &&
                (actual.offset().top + actualHeight - secondaryNav.height() > $(window).scrollTop())) {
                actualAnchor.addClass('active');
            } else {
                actualAnchor.removeClass('active');
            }
        });
    }
}

var mpReferenzen = {

    collection: null,

    checkResult: function(response) {
    },
    printResult: function(result) {

    },
    makeRequest: function (elem) {
        var staticUrl = "http://etter-bau.local/index.php?id=2",
            Id = parseInt(elem.find('figure').attr('data-referenz'));

        $.ajax({
            url: staticUrl,
            type: 'POST',
            data: { 'tx_mpreferenzen_gallery[referenz]': Id,
                'tx_mpreferenzen_gallery[action]': 'show',
                'tx_mpreferenzen_gallery[controller]': 'Referenz',
                'type':'999'
                    },
            beforeSend: function() {
                $('body,html').animate({
                    'scrollTop': $('#c2').offset().top
                }, 700);
            },
            success: function (response) {
                $('#single_reference').html(response);
                $('#close-referenz').on('click', function(event) {
                    event.preventDefault();
                    $('#single_reference').html("");
                    $('body,html').animate({
                        'scrollTop': $('#c2').offset().top
                    }, 700);
                });
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    },
    init: function() {
        mpReferenzen.collection = $(".tx-mp-referenzen > a");

        mpReferenzen.collection.on('click', function(event) {
            event.preventDefault();
            mpReferenzen.makeRequest($(this));
        });
    }
}

jQuery(document).ready(function($) {
    //Referenzen
    mpReferenzen.init();

    //Site
    var secondaryNav            = $('.cd-secondary-nav'),
        secondaryNavTopPosition = secondaryNav.offset().top,
        taglineOffesetTop       = $('#cd-intro').height() + parseInt($('#logo').css('paddingTop').replace('px', '')),
        mainArrowDown           = $('#foward'),
        logo                    = $('#home');

    $(window).on('scroll', function() {
        //on desktop - assign a position fixed to logo and action button and move them outside the viewport
        if( $(window).scrollTop() > taglineOffesetTop) {
            logo.addClass('is-hidden');
        }
        //on desktop - fix secondary navigation on scrolling
        if ($(window).scrollTop() > secondaryNavTopPosition) {
            //fix secondary navigation
            secondaryNav.addClass('is-fixed');
            //push the .cd-main-content giving it a top-margin
            $('#c1').addClass('has-top-margin');
            setTimeout(function() {
                logo.addClass('slide-in');
            }, 50);
        } else {
            secondaryNav.removeClass('is-fixed');
            $('#c1').removeClass('has-top-margin');
            setTimeout(function() {
                secondaryNav.removeClass('animate-children');
                logo.removeClass('slide-in');
            }, 50);
        }

        //on desktop - update the active link in the secondary fixed navigation
        //updateSecondaryNavigation();
    });

    //remove first

    //on mobile - open/close secondary navigation clicking/tapping the .cd-secondary-nav-trigger
    $('.cd-secondary-nav-trigger').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('menu-is-open');
        secondaryNav.find('ul').toggleClass('is-visible');
    });

    //smooth scrolling when clicking on the secondary navigation items
    secondaryNav.find('ul a').on('click', function(event) {
        event.preventDefault();
        var target = $(this.hash);
        $('body,html').animate({
            'scrollTop': target.offset().top - secondaryNav.height() + 1
        }, 400);
        //on mobile - close secondary navigation
        $('.cd-secondary-nav-trigger').removeClass('menu-is-open');
        secondaryNav.find('ul').removeClass('is-visible');
    });

    mainArrowDown.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            'scrollTop': $('.cd-secondary-nav').offset().top
        }, 700);
    });

    logo.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            'scrollTop': $('main').offset().top
        }, 700);
    });

    $('#toTop').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            'scrollTop': $('main').offset().top
        }, 700);
    });

    $('a.internal-link').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            'scrollTop': $($(this).attr('href')).offset().top
        }, 700);
    });

    //on mobile - open/close primary navigation clicking/tapping the menu icon
    $('.cd-primary-nav').on('click', function(event) {
        if ($(event.target).is('.cd-primary-nav')) $(this).children('ul').toggleClass('is-visible');
    });
});



jQuery(function() {

    function submitButtonClick(el) {
        var container = el.closest(".Tx-Formhandler");
        var form = el.closest("FORM");
        el.attr("disabled", "disabled");

        var requestURL = "/index.php?&id=2&L=0&randomID=e4469484725f4b36d6a90f7c37cfc68a&field=&uploadedFileName=&eID=formhandler-ajaxsubmit&uid=11";
        var postData = form.serialize() + "&" + el.attr("name") + "=submit";
        container.find(".loading_ajax-submit").show();
        jQuery.ajax({
            type: "post",
            url: requestURL,
            data: postData,
            dataType: "json",
            success: function(data, textStatus) {
                if (data.redirect) {
                    window.location.href = data.redirect;
                } else {
                    form.closest(".Tx-Formhandler").replaceWith(data.form);
                    jQuery(".Tx-Formhandler INPUT[type='submit']").on("click", function(e) {
                        e.preventDefault();
                        submitButtonClick(jQuery(this));
                    });
                    jQuery(".Tx-Formhandler FORM").on("submit", function(e) {
                        e.preventDefault();
                        return false;
                    });
                    attachValidationEvents();

                }
            }
        });
        return false;
    }

    jQuery(".Tx-Formhandler FORM").on("submit", function(e) {
        e.preventDefault();
        return false;
    });
    jQuery(".Tx-Formhandler INPUT[type='submit']").on("click", function(e) {
        e.preventDefault();
        submitButtonClick(jQuery(this));
    });
});

function attachValidationEvents() {
    jQuery(".Tx-Formhandler FORM *[name='contact[name]']").blur(function() {
        var field = jQuery(this);
        var fieldVal = encodeURIComponent(field.val());
        if(field.attr("type") == "radio" || field.attr("type") == "checkbox") {
            if (field.attr("checked") == "") {
                fieldVal = "";
            }
        }
        var loading = jQuery(".Tx-Formhandler FORM #loading_name");
        var result = jQuery(".Tx-Formhandler FORM #result_name");
        loading.show();
        result.hide();
        var url = "/index.php?&id=2&L=0&randomID=e4469484725f4b36d6a90f7c37cfc68a&field=name&uploadedFileName=&eID=formhandler&value=";

        url = url.replace("value=", "value=" + fieldVal);
        result.load(url, function() {
            loading.hide();
            result.show();
            isFieldValid = false;
            if(result.find("SPAN.error").length > 0) {
                result.data("isValid", false);
            } else {
                isFieldValid = true;
                result.data("isValid", true);
            }

        });
    });
    jQuery(".Tx-Formhandler FORM *[name='contact[email]']").blur(function() {
        var field = jQuery(this);
        var fieldVal = encodeURIComponent(field.val());
        if(field.attr("type") == "radio" || field.attr("type") == "checkbox") {
            if (field.attr("checked") == "") {
                fieldVal = "";
            }
        }
        var loading = jQuery(".Tx-Formhandler FORM #loading_email");
        var result = jQuery(".Tx-Formhandler FORM #result_email");
        loading.show();
        result.hide();
        var url = "/index.php?&id=2&L=0&randomID=e4469484725f4b36d6a90f7c37cfc68a&field=email&uploadedFileName=&eID=formhandler&value=";

        url = url.replace("value=", "value=" + fieldVal);
        result.load(url, function() {
            loading.hide();
            result.show();
            isFieldValid = false;
            if(result.find("SPAN.error").length > 0) {
                result.data("isValid", false);
            } else {
                isFieldValid = true;
                result.data("isValid", true);
            }

        });
    });
    jQuery(".Tx-Formhandler FORM *[name='contact[message]']").blur(function() {
        var field = jQuery(this);
        var fieldVal = encodeURIComponent(field.val());
        if(field.attr("type") == "radio" || field.attr("type") == "checkbox") {
            if (field.attr("checked") == "") {
                fieldVal = "";
            }
        }
        var loading = jQuery(".Tx-Formhandler FORM #loading_message");
        var result = jQuery(".Tx-Formhandler FORM #result_message");
        loading.show();
        result.hide();
        var url = "/index.php?&id=2&L=0&randomID=e4469484725f4b36d6a90f7c37cfc68a&field=message&uploadedFileName=&eID=formhandler&value=";

        url = url.replace("value=", "value=" + fieldVal);
        result.load(url, function() {
            loading.hide();
            result.show();
            isFieldValid = false;
            if(result.find("SPAN.error").length > 0) {
                result.data("isValid", false);
            } else {
                isFieldValid = true;
                result.data("isValid", true);
            }

        });
    });

}
jQuery(function() {
    attachValidationEvents();
});
