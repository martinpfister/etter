<?php
$tx_realurl_config = array(
    'init' => array(
        'enableCHashCache' => 1,
        'useCHashCache' => '1',
        'enableDomainLookup' => 1,
        'appendMissingSlash' => 'ifNotFile,redirect',
        'adminJumpToBackend' => true,
        'enableUrlDecodeCache' => true,
        'enableUrlEncodeCache' => true,
        'emptyUrlReturnValue' => '/',
    ),
    'pagePath' => ['rootpage_id' => '1'],
    'preVars' => array(
        0 => array(
            'GETvar' => 'L',
            'valueMap' => array(
                'en' => '0',
                'de' => '1',
                'fr' => '2',
                'it' => '3'
            ),
            'noMatch' => 'bypass'
        )
    ),
    'postVarSets' => array (
        '_DEFAULT' => array (
            'product' => array(
                array(
                    'GETvar' => 'tx_sttrafagms3import_productdetail[action]',
                    'valueMap' => array(
                        'show' => 'show',
                        'list' => 'list'
                    ),
                    'noMatch' => 'bypass',
                ),
                array(
                    'GETvar' => 'tx_sttrafagms3import_productdetail[controller]',
                    'noMatch' => 'bypass',
                ),
                array(
                    'GETvar' => 'tx_sttrafagms3import_productdetail[product]',
                    'lookUpTable' => array(
                        'table' => 'tx_sttrafagms3import_domain_model_product',
                        'id_field' => 'uid',
                        'alias_field' => "CONCAT(product_nummer, '_', name, '-', description)",
                        'useUniqueCache' => 1,
                        'useUniqueCache_conf' => array(
                            'strtolower' => 1,
                            'spaceCharacter' => '-'
                        ),
                        'languageGetVar' => 'L',
                        'languageExceptionUids' => '',
                        'languageField' => 'sys_language_uid',
                        'transOrigPointerField' => 'l10n_parent',
                        'autoUpdate' => 1,
                        'expireDays' => 180,
                    )
                ),
            ),
            'article' => array(
                array(
                    'GETvar' => 'tx_sttrafagms3import_articledetail[action]',
                    'valueMap' => array(
                        'show' => 'detail',
                        'list' => 'list'
                    ),
                    'noMatch' => 'bypass',
                ),
                array(
                    'GETvar' => 'tx_sttrafagms3import_articledetail[controller]',
                    'noMatch' => 'bypass',
                ),
                array(
                    'GETvar' => 'tx_sttrafagms3import_articledetail[article]',
                    'lookUpTable' => array(
                        'table' => 'tx_sttrafagms3import_domain_model_article',
                        'id_field' => 'uid',
                        'alias_field' => "CONCAT(name, '-', description)",
                        'useUniqueCache' => 1,
                        'useUniqueCache_conf' => array(
                            'strtolower' => 1,
                            'spaceCharacter' => '_'
                        ),
                        'languageGetVar' => 'L',
                        'languageExceptionUids' => '',
                        'languageField' => 'sys_language_uid',
                        'transOrigPointerField' => 'l10n_parent',
                        'autoUpdate' => 1,
                        'expireDays' => 180,
                    )
                ),
            ),
            'detail' => array(
                array(
                    'GETvar' => 'tx_news_pi1[action]',
                    'noMatch' => 'bypass',
                ),
                array(
                    'GETvar' => 'tx_news_pi1[controller]',
                    'noMatch' => 'bypass',
                ),
                array(
                    'GETvar' => 'tx_news_pi1[news]',
                    'lookUpTable' => array(
                        'table' => 'tx_news_domain_model_news',
                        'id_field' => 'uid',
                        'alias_field' => 'title',
                        'addWhereClause' => ' AND NOT deleted',
                        'useUniqueCache' => 1,
                        'useUniqueCache_conf' => array(
                            'strtolower' => 1,
                            'spaceCharacter' => '-',
                        ),
                        'languageGetVar' => 'L',
                        'languageExceptionUids' => '',
                        'languageField' => 'sys_language_uid',
                        'transOrigPointerField' => 'l10n_parent',
                        'autoUpdate' => 1,
                        'expireDays' => 180,
                    ),
                ),
            ),
        ),
    ),
);
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl'] = array(
    'www.etter-bau.ch' => $tx_realurl_config,
    'etter-bau.ch' => 'www.trafag.ch',
);


$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.etter-bau.ch']['pagePath']['rootpage_id'] = 1;

unset($tx_realurl_config);