#-------------------------------------------------------------------------------
#  User TSConfig
#-------------------------------------------------------------------------------
options {
    # Allow creation of new folders in Element Browser
    createFoldersInEB = 1

    # No alert box ad type change
    alertPopups = 254

    # Page tree
    pageTree {
        showPathAboveMounts = 1
        showPageIdWithTitle = 1

        # Shows the navigation title instead of the title if available
        showNavTitle = 1

        # Shows the domain name as a suffix of the title if available
        showDomainNameWithTitle = 1
    }

    # Available clear cache-buttons
    # (always available for admins)
    clearCache {
        pages = 1
        all = 1
        system = 1
    }
}


#-------------------------------------------------------------------------------
#  FE admin panel
#-------------------------------------------------------------------------------
admPanel {
    enable.preview = 0
    enable.edit = 0
    enable.info = 0
}

