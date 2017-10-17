var App=angular.module('myApp',[])
App.controller('myCtrl',function($scope){
	$scope.submitForm = function(isValid){
		$scope.submitted=true;
		if(isValid){
			alert('Awesome')
		}
	}
	
})