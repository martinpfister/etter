tt_content.gridelements_pi1.20.10.setup {

    # Match this number with the uid _or alias_ (has precedence!)
    # of the gridelement DB entry!
    twcolumnscontact < .default
    twcolumnscontact {
        cObject = FLUIDTEMPLATE
        cObject.file = typo3conf/ext/{$plugin.templatebootstrap.packageKey}/Resources/Private/Templates/GridElements/TwoColumnsContact.html

        # Custom content element rendering
        columns.0.renderObj = COA
        columns.0.renderObj.20 = COA
        columns.0.renderObj.20 {
            10 = TEXT
            10 =< tt_content
            10.stdWrap.innerWrap.cObject.default {
                20.10.5.value = element cd-two-columns-left contact
                10.cObject.default.value=<div id="c{field:uid}"
                30.cObject.default.value=>|</div>
            }
        }
        columns.1.renderObj = COA
        columns.1.renderObj.20 = COA
        columns.1.renderObj.20 {
            10 = TEXT
            10 =< tt_content
            10.stdWrap.innerWrap.cObject.default {
                20.10.5.value = element cd-two-columns-right contact
                10.cObject.default.value=<div id="c{field:uid}"
                30.cObject.default.value=>|</div>
            }
        }
    }
}