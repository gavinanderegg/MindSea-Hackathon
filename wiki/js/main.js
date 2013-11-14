var wikiModule = angular.module('wiki', ['ngRoute']);

wikiModule.config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(false); // For ease of demo-ing
		
	$routeProvider.when('/:id?', {
		controller: 'wikiController',
		templateUrl: 'content.html'
	});
});

wikiModule.controller('wikiController', function($scope, $routeParams) {
	console.log($routeParams);
});