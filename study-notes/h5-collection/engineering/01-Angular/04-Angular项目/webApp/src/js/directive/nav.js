/**
 * Created by xmg on 4/9.
 */
;(function (angular) {
    angular.module('app').directive('nav',function () {
        return {
            //template:'<h1>我是头部</h1>'
            templateUrl:'../views/nav_tpl.html',
            controller:['$scope',function ($scope) {
                /* $scope.$on('app_notifice',function (e,params) {
                 $scope.title = params;
                 })*/
            }]
        }
    })
})(angular);