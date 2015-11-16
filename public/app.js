angular.module('userProfiles', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/home.html',
		controller: 'mainCtrl'
	})
	.state('profile', {
		url: '/profile',
		'templateUrl': './views/profile.html',
		controller: 'profileCtrl',
		resolve: {
			userInfo: function( $http ) {
				return $http.get('api/profiles').then(function(response){
					// console.log('this is the real response', response);
					return response.data;
				})
			}
		}
	});

	$urlRouterProvider.otherwise('/');

});