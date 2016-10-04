<?php

global $project;
$project = 'mysite';

global $database;
$database = 'annualreport-hd';
 
// Use _ss_environment.php file for configuration
require_once("conf/ConfigureFromEnv.php");
MySQLDatabase::set_connection_charset('utf8');
HtmlEditorConfig::get('cms')->setOptions(array(
	'extended_valid_elements' => "script[language|type|src]"
));

// Set the site locale
i18n::set_locale('en_US');

if(Director::isLive()) {
	Director::forceSSL();
}
