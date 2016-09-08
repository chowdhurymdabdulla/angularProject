var MainController = function MainController($scope){
		$scope.name = 'Abdulla';
};

angular
	.module('app')
	.controller('MainController', MainController);

