function updateSecondaryNavigation() {
    var contentSections = $('.cd-section'),
        secondaryNav    = $('.cd-secondary-nav');

    contentSections.each(function() {
        var actual = $(this),
            actualHeight = actual.height() + parseInt(actual.css('paddingTop').replace('px', '')) + parseInt(actual.css('paddingBottom').replace('px', '')),
            actualAnchor = secondaryNav.find('a[href="#' + actual.attr('id') + '"]');
        if ((actual.offset().top - secondaryNav.height() <= $(window).scrollTop()) && (actual.offset().top + actualHeight - secondaryNav.height() > $(window).scrollTop())) {
            actualAnchor.addClass('active');
        } else {
            actualAnchor.removeClass('active');
        }
    });
}

jQuery(document).ready(function($) {
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
            $('.cd-main-content').addClass('has-top-margin');
            setTimeout(function() {
                logo.addClass('slide-in');
            }, 50);
        } else {
            secondaryNav.removeClass('is-fixed');
            $('.cd-main-content').removeClass('has-top-margin');
            setTimeout(function() {
                secondaryNav.removeClass('animate-children');
                logo.removeClass('slide-in');
            }, 50);
        }

        //on desktop - update the active link in the secondary fixed navigation
        updateSecondaryNavigation();
    });

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
            'scrollTop': $('main').offset().top
        }, 700);
    });

    logo.on('click', function(event) {
        event.preventDefault();
        var height = $('main').offset().top;
        $('body,html').animate({
            'scrollTop':height
        }, 700);
    });

    //on mobile - open/close primary navigation clicking/tapping the menu icon
    $('.cd-primary-nav').on('click', function(event) {
        if ($(event.target).is('.cd-primary-nav')) $(this).children('ul').toggleClass('is-visible');
    });
});