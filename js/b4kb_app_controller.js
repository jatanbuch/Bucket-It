angular.module('myApp', [])
.controller('loginCtrl', ['$scope', function($scope) {
	$scope.master = {};

	$scope.update = function(user) {
		$scope.master = angular.copy(user);
	};
}])
.controller('signupCtrl', ['$scope', function($scope) {
	$scope.master = {};

	$scope.update = function(user) {
		$scope.master = angular.copy(user);
	}
}])