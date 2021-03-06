page {
    includeCSS {
        #normalizer = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/css/lib/normalize.css
        #normalizer.media = screen,print
        mainCSS = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/dist/styles/main.css
        mainCSS.media = screen,print
        #fancybox = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/fancybox/jquery.fancybox.css
        #fancyboxThumbnailHelper = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/fancybox/jquery.fancybox-thumbs.css
    }

    includeJSlibs {
        modernizr = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/dist/scripts/vendor/modernizr.js
        venodr = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/dist/scripts/vendor.js
        slider = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/dist/scripts/bxslider/bower_components/fafnur-bxslider/dist/jquery.bxslider.min.js
    }

    includeJSFooterlibs {
        #jQuery = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/jquery-1.11.1.min.js
        #jQueryCookie = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/jquery.cookie.js
        #jQueryCookie = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/jquery.cookie.js
        #jQueryDoubleTapMenu = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/jquery.doubleTapMenu.js
        #jQueryToggler = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/jquery.toggler.js

        # Move/swipe events (swipe depends on move!)
        #jQueryMove = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/jquery.event.move.js
        #jQuerySwipe = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/jquery.event.swipe.js
        #jQueryPlaceholder = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/jquery.placeholder.js
        #jQueryFancybox = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/fancybox/jquery.fancybox_patched.js
        #jQueryFancyboxMediahelper = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/fancybox/jquery.fancybox-media.js
        #jQueryFancyboxThumbnailHelper = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/fancybox/jquery.fancybox-thumbs.js

        #foundation = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/foundation.js
        #foundationTopbar = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/foundation.topbar.js
        #foundationClearing = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/foundation.clearing.js
        #foundationAlert = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/foundation.alert.js
        #foundationReveal = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/foundation.reveal.js
        #foundationOffcanvas = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/foundation.offcanvas.js
        #foundationTabs = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/foundation.tab.js
        #foundationAccordion = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/foundation.accordion.js

        #slickslider = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/slick/slick.js

        # Click delay removal for mobile browsers
        #fastclick = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/fastclick/fastclick.js

    }


    # JS footer
    includeJSFooter {
        main   = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/dist/scripts/main.js
    }


    # Include polyfills for older browsers conditionally
    footerData.10 = COA
    footerData.10 {
        wrap (
            <!--[if lt IE 9]>
               |
            <![endif]-->
        )

        # Respond polyfill for IE<9
        10 = TEXT
        10.value = /typo3conf/ext/{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/respond/respond.js
        10.wrap = <script src="|"></script>
        10.insertData = 1

        # rem unit polyfill for IE<9
        20 = TEXT
        20.value = /typo3conf/ext/{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/rem/rem.min.js
        20.wrap = <script src="|"></script>
        20.insertData = 1
    }
} #page



# **********************************************************
# Google analytics (conditionally)
# **********************************************************
[globalVar = LIT:1 = {$site.googleAnalytics}]
    page.footerData.100 = COA
    page.footerData.100 {
        stdWrap.wrap = <script>|</script>

        10 = TEXT
        10.value (
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})
            (window,document,'script','//www.google-analytics.com/analytics.js','ga');
            ga('create', '{$site.googleAnalytics.account}', 'auto');
            ga('send', 'pageview');
        )
    }
[global]