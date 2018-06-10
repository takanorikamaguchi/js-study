var myApp = angular.module('myApp',[]);//←この記述は、いまは気にしない
    myApp.controller('MessageCtrl', ['$scope', function($scope) {
        $scope.message = [
		{"name":"takanori", "score":12.00}
		];
    }]);

