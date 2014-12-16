(function(){
	var app = angular.module("kalkulatorApp",[]);

	app.controller("kalkulatorController",function($scope){
		$scope.result = 0;

		$scope.tambah = function(){
			$scope.result = $scope.bil1 + $scope.bil2;
		}
		$scope.kurang = function(){
			$scope.result = $scope.bil1 - $scope.bil2;
		}
		$scope.kali = function(){
			$scope.result = $scope.bil1 * $scope.bil2;
		}
		$scope.bagi = function(){
			$scope.result = $scope.bil1 / $scope.bil2;
		}
	});
})();