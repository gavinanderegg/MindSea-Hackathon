var wikiModule = angular.module('wiki', ['ngRoute']);

wikiModule.config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(false);
});

wikiModule.controller('wikiController', function($scope, $location) {
	$scope.loc = $location; // this is lame - switch to routes
	
	$scope.go = function(path) {
		$location.path('/newValue');
	};
	
	$scope.$watch('loc.path()', function() {
		console.log('called!');
		
		var title = $location.path();
		$scope.title = title;
	});
});