angular.module('myapp', [])
.controller('MainController',['$scope','$http','$timeout', function($scope,$http,$timeout) {
  $scope.members = [
         {
        	'title': '明日嘘と契約するなら',
        	 'titletxt': '詳細はこちら詳細はこちら詳細はこちら詳細はこちら',
        	 'number': '01'
         },{
         	'title': '廃になるボクサー',
         	'titletxt': '詳細はこちら詳細はこちら詳細はこちら詳細はこちら',
         	'number': '02'
         },{
         	'title': 'もちろん明日から頑張ります。',
         	'titletxt': '詳細はこちら詳細はこちら詳細はこちら詳細はこちら',
         	'number': '03'
         }
    ];
    $http.get('http://tkwebwd.xyz/e/js/ttts.json').then(function successCallback(response) {
    console.log('yes');
     $scope.ttts = response.data;
        console.log(response);
  }, function errorCallback(response) {
    console.log('失敗');
  });


}]);



