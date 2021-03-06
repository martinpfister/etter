# **********************************************************
# Base
# **********************************************************
<INCLUDE_TYPOSCRIPT: source="FILE:./Page/config_language.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Page/config.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Page/page.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:./Page/page_socialmediametatags.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Page/page_felayoutrendering.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Page/page_jscssincludes.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Page/page_icons.ts">

# **********************************************************
# Extensions setups
# **********************************************************
#<INCLUDE_TYPOSCRIPT: source="FILE:./../Extensions/news/setup.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:./../Extensions/indexed_search/setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./../Extensions/formhandler/ajax-submit/ts/ts_setup.txt">

# **********************************************************
# Load typoscript template objects
# **********************************************************
<INCLUDE_TYPOSCRIPT: source="FILE:./Content/temp/menu.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:./Content/temp/menu-foundation-topbar.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:./Content/temp/menu-language.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Content/temp/contentloader.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:./Content/temp/contentloader-slide.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:./Content/temp/currentyear.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:./Content/temp/searchbox.ts">

# **********************************************************
# Load objects to be rendered
# **********************************************************
<INCLUDE_TYPOSCRIPT: source="FILE:./Content/lib/contentloader.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Content/lib/logo.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Content/lib/menu.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:./Content/lib/menu-language.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:./Content/lib/currentyear.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:./Content/lib/skiplinks.ts">

# **********************************************************
# T3 content objects render config
# **********************************************************
<INCLUDE_TYPOSCRIPT: source="FILE:./Content/tt_content.ts">

# **********************************************************
# Grid elements render config
# **********************************************************
<INCLUDE_TYPOSCRIPT: source="FILE:./GridElements/TwoColumns.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./GridElements/TwoColumnsContact.ts">
