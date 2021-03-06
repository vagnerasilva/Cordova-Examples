// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngLocalize'])

.controller('Main', function($scope, locale) {
	
	$scope.setChinese = function() {
		console.log('set chinese');	
		locale.setLocale('zh-CHS');		
	};

	$scope.setFrench = function() {
		console.log('set french');	
		locale.setLocale('fr-FR');		
	};

	$scope.setEnglish = function() {
		console.log('set english');	
		locale.setLocale('en-US');		
	};
	
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.value('localeConf', {
    basePath: 'lang',
    defaultLocale: 'en-US',
    sharedDictionary: 'common',
    fileExtension: '.json',
    persistSelection: false,
    cookieName: 'COOKIE_LOCALE_LANG',
    observableAttrs: new RegExp('^data-(?!ng-|i18n)'),
    delimiter: '::'
}).value('localeSupported', [
    'en-US',
    'zh-CHS',
		'fr-FR'
]);
