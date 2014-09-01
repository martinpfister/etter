########################################################################
# Setup for new sites
########################################################################
- Create a new repository
- Clone repository locally
- Add origin to templatebootstrap ("add origin templatebootstrap https://stash.staempfli.com/scm/TYPO3/templatebootstrap.git")
- Fetch files from (non-default) origin "templatebootstrap": "git pull templatebootstrap master"
- Change extension name in ext_emconf.php
- Activate extension in the extension manager
- Choose "Site environment" in extension configuration accordingly.
- Install extension "realurl"
- RealURL: Set "basic.configFile" (in ext conf) to
    "typo3conf/ext/[YOUR NEW EXTENSION KEY]/Resources/Private/Extensions/realurl/realurl_conf.php"
- Install extension "gridelements". You need the 3.0.0 DEV version in order to make it work with T3 > 6.0
    https://github.com/TYPO3-extensions/gridelements
- Run "npm install" and then "grunt" from "typo3conf/ext/[YOUREXTENSIONKEY]/Resources/Public/Template" in order
    to install node modules and get going with SCSS.
- Add static templates to your root ts template. What you'll usually want is:
    - CSS Styled Content css_styled_content
    - Default TS (form)
    - Gridelements (gridelements)
    - yourextension (yourextension)

    => Make sure, your extension constants are included last!
    => Choose option "Include before all static templates if root flag is set"

- Start developing.