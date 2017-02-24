<?php
if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}

$_EXTKEY = 'etter';

# Adding pageTSConfig
$pageTSConfig = "";
foreach (['BackendLayouts.ts', 'Page.ts', 'RTE.ts'] as $fileName) {
    $pageTSConfig .= \TYPO3\CMS\Core\Utility\GeneralUtility::getUrl(
        \TYPO3\CMS\Core\Utility\GeneralUtility::getFileAbsFileName(
            'EXT:' . $_EXTKEY . '/Resources/Private/TsConfig/' . $fileName
        )
    );
}
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig($pageTSConfig);

# Adding UserTsConfig
$userTSConfigAbsFileName = \TYPO3\CMS\Core\Utility\GeneralUtility::getFileAbsFileName(
    'EXT:' . $_EXTKEY . '/Resources/Private/TsConfig/User.ts'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig(
    \TYPO3\CMS\Core\Utility\GeneralUtility::getUrl($userTSConfigAbsFileName)
);

# Include TypoScript Setup automatically (upon Extension install)
TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptSetup(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:'. $_EXTKEY .'/Configuration/TypoScript/setup.ts">'
);
TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:'. $_EXTKEY .'/Configuration/TypoScript/constants.ts">'
);
