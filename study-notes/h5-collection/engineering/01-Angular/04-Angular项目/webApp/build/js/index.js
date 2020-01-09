/**
 * Created by xmg on 4/9.
 */
;(function (angular,window,document) {
    // 1.创建模块
    var app = angular.module('app',[]);

    // 2.创建控制器
    app.controller("AppController",['$scope',function ($scope) {
        $scope.appTitle = 'webApp';
    }])

    // 3.头部
    app.directive('nav',function () {
        return {
            //template:'<h1>我是头部</h1>'
            templateUrl:'../views/nav_tpl.html',
            replace:true
        }
    })

})(angular,window,document);