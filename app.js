(function(){
	var app = angular.module("temanApp",[]); //menentukan module

	app.controller("temanController",function($scope){ //menentukan controller
		$scope.temans = data;
	
	$scope.addTeman = function(){ //menambah teman baru yang dimasukkan ke variabel temans
		var baru = {
			name:$scope.name,
			address:$scope.address,
			facebook:$scope.facebook,
			email:$scope.email
		};
		$scope.temans.push(baru); //memasukkan data ke $scope.temans
		$scope.name = "";
		$scope.address = "";
		$scope.facebook = "";
		$scope.email = "";
	};

	});

	var data = [ //variabel ini dimasukkan ke variabel $scope.temans
		{
			name:"Ade yahya prasetyo",
			address:"Bantaran Probolinggo",
			facebook:"http://facebook.com/monyetbegok",
			email:"adeyahyaprasetyo@gmail.com"
		},
		{
			name:"Alvian",
			address:"Banda Neira ambon",
			facebook:"http://facebook.com/alvian",
			email:"alvian@gmail.com"
		},
		{
			name:"Epen",
			address:"Dobo ambon maluku",
			facebook:"http://facebook.com/epen",
			email:"epen@gmail.com"
		}
	];
})();