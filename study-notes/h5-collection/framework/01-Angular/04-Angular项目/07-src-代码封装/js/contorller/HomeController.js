/**
 * Created by xmg on 4/9.
 */
;(function (angular) {
    // angular.module('app') 导入 app这个模块

    /*angular.module('app').controller("HomeController",['$scope','$http',function ($scope,$http) {
        $http({
            url:'http://127.0.0.1/API/home.php',
            method:'jsonp'
        }).then(function (res) {
            console.log(res);
            $scope.homeList = res.data.posts;

        }).catch(function (err) {
            console.log(err);
        })
    }])*/

    angular.module('app').controller("HomeController",['$scope','xmgHttp',function ($scope,xmgHttp) {

        var url = 'http://127.0.0.1/API/home.php';
        xmgHttp.jsonp(url,null,function (res) {
            $scope.homeList = res.posts;
        },function (err) {
            console.log(err);
        })
    }])
})(angular);