# **********************************************************
#   This setup generates all the needed icon images
#   for the site (favicons, hi-res icons, etc.)
#
#   Structure (roughly):
#   - 10 Loads REGISTER with icon source file path
#   - 20 The main icon COA. Contains all (!) icons in
#        different sizes based on $site.icons constants.
#   - 20.[10-100]   All "regular" png icons.
#   - 20.200        .ico file containing multiple sizes
#   - 20.300        Microsoft tile image & color.
# **********************************************************
page.headerData.20 = COA
page.headerData.20 {


    400 = TEXT
    400 {
        prepend = TEXT
        prepend.char = 10
        stdWrap.data = PATH:EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/app/images/favicon.ico
        wrap = <link href="|" rel="shortcut icon" type="image/x-icon">
        required = 1
        stdWrap.required = 1
    }

    500 = TEXT
    500 {
        prepend = TEXT
        prepend.char = 10
        stdWrap.data = PATH:EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/app/images/favicon-96x96.png
        wrap = <link href="|" rel="icon" sizes="96x96" type="image/png">
        required = 11
        stdWrap.required = 1
    }

}