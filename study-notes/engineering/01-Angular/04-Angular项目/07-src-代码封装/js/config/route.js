/**
 * Created by xmg on 4/9.
 */
;(function (angular) {
    angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        $stateProvider.state('home',{
            url:'/home',
            views:{
                home:{
                    //template:'<h1>我是首页</h1>'
                    templateUrl:'../views/home_tpl.html',
                    controller:"HomeController"
                },
                author:{
                    template:'<h1>author</h1>'
                },
                contact:{
                    template:'<h1>contact</h1>'
                },
                my:{
                    template:'<h1>my</h1>'
                }
            }
        }).state('home.list',{
            url:'/list',
            // template:'<h1>我是列表</h1><h1>我是列表</h1><h1>我是列表</h1><h1>我是列表</h1><h1>我是列表</h1><h1>我是列表</h1>'
            templateUrl:'../views/list_tpl.html'
        }).state('home.detail',{
            url:'/detail/:index',
            template:'<div ng-bind-html="item"></div>',
            controller:'DetailController'
        });

        // 设置默认
        $urlRouterProvider.otherwise('/home/list');
    }]);

})(angular);