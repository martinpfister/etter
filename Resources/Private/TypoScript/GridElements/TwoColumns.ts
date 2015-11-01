tt_content.gridelements_pi1.20.10.setup {

    # Match this number with the uid _or alias_ (has precedence!)
    # of the gridelement DB entry!
    twcolumns < .default
    twcolumns {
        cObject = FLUIDTEMPLATE
        cObject.file = typo3conf/ext/{$plugin.templatebootstrap.packageKey}/Resources/Private/Templates/GridElements/TwoColumns.html

        # Custom content element rendering
        columns.0.renderObj = COA
        columns.0.renderObj.20 = COA
        columns.0.renderObj.20 {
            10 = TEXT
            10 =< tt_content
            20.stdWrap.dataWrap =  <div class="content ###SPLITTER###" id="c{field:uid}" role="tabpanel">|</div>
            10.stdWrap.innerWrap.cObject.default {
                20.10.5.value = element cd-two-columns-left
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
                20.10.5.value = element cd-two-columns-right
                10.cObject.default.value=<div id="c{field:uid}"
                30.cObject.default.value=>|</div>
            }
        }
    }
}