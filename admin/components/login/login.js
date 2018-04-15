'use strict';

angular.module('ad2c')

.component('login', {
    templateUrl: './components/login/login.html',
    controller: Login
})

function Login($scope, $http, $window, $location) {
    // Controller
 
      
    $scope.getValue = function () {
        $http({
            url: 'http://localhost:3000/api.ad2c/authorize',
            method: "POST",
            data: JSON.stringify({username: $scope.username, password: $scope.password}),
            headers: {'Content-Type': 'application/json'}
        }).then(function (data, status, headers, config) {
            $window.sessionStorage.token = data.data.token
        }).catch(function(error) {
            console.log(error)
            $location.path('/admin')
        })
    };
}