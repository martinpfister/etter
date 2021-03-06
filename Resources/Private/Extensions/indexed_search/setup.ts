plugin.tx_indexedsearch {
    templateFile = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Private/Extensions/indexed_search/indexed_search.tmpl
    search {
        targetPid = {$plugin.tx_indexedsearch.targetPid}
        targetPid.data >
        rootPidList = -1
    }
    show {
        rules = 0
        advancedSearchLink = 0
        L1sections = 0
    }
    _CSS_DEFAULT_STYLE >
    _DEFAULT_PI_VARS {
        lang < config.sys_language_uid
    }
    _LOCAL_LANG {
        de {
            form_searchFor = Suchen
            pi_list_browseresults_prev = «zurück
            pi_list_browseresults_next = vorwärts»
        }
        fr {
            form_searchFor = Chercher
            pi_list_browseresults_prev = «précédent
            pi_list_browseresults_next = suivant»
        }
        it {
            form_searchFor = Cercare
            pi_list_browseresults_prev = «indietro
            pi_list_browseresults_next = avanti»
        }
        en {
            form_searchFor = Search
            pi_list_browseresults_prev = «previous
            pi_list_browseresults_next = next»
        }

        default < .de
    }
}