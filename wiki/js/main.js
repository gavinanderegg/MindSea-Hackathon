var wikiModule = angular.module('wiki', ['ngRoute']);

wikiModule.config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(false); // For ease of demo-ing
		
	$routeProvider.when('/:slug?', {
		controller: 'contentController',
		templateUrl: 'content.html'
	});
});

wikiModule.factory('Page', function() {
	var title = 'Main Page';
	
	return {
		title: function() { return title; },
		setTitle: function(newTitle) { title = newTitle; }
	};
});

wikiModule.controller('wikiController', function($scope, Page) {
	$scope.Page = Page;
	
	$scope.data = {
		'Main_Page': 'Welcome to the main page!',
		'foo': 'the foo page',
	};
});

wikiModule.controller('contentController', function($scope, $routeParams, Page) {
	// Check to see if the slug has content
	// if it doesn't exist, make it in $scope.content
	
	var slug = $routeParams.slug;
	// var titleToSlug = function(title) {
	//	return title.replace(/\s+/g, '_').replace(/[~`!@#$%\^&*()-+={}\[\]\.,\\\/\?"':;|]/g, '');
	// };
	var slugToTitle = function(slug) {
		return slug.replace(/_/g, ' ');
	};
	
	if (slug === '' || slug === undefined) {
		Page.setTitle('Main Page');
		slug = 'Main_Page';
	} else {
		Page.setTitle(slugToTitle(slug));
	}
	
	$scope.content = $scope.data[slug];
});