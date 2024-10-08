/**
 * Created by xmg on 4/9.
 */
;(function (angular,window,document) {
    // 1.创建模块
    var app = angular.module('app',['ui.router']);

    // 2.创建控制器
    app.controller("AppController",['$scope',function ($scope) {
        $scope.appTitle = 'webApp';
        $scope.title = '首页';
        // 全局索引
        $scope.index = 0;

        // 接收数据
        $scope.$on('tabbar_notifice',function (e, params) {
            // console.log(params);
            var index = params.index;
            $scope.index = index;

            var title = '首页';
            /*switch (index){
                case 0:
                    title = '首页';
                    break;
                case 1:
                    title = '作者';
                    break;
            }*/
            var titleArr = ['首页','作者','栏目','我'];
            //$scope.$broadcast('app_notifice',titleArr[index]);
            $scope.title = titleArr[index];
        })
    }])

    // 3.头部
    app.directive('nav',function () {
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

    // 4.tab 尾部
    app.directive('tabbar',function () {
        return {
            templateUrl:'../views/tabbar_tpl.html',
            controller:['$scope',function ($scope) {
                $scope.change = function (num) {
                    // 给上级发送数据
                    $scope.$emit('tabbar_notifice',{index:num});

                }
            }]
        }
    })

    // 5.路由
    app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        $stateProvider.state('home',{
            url:'/home',
            views:{
                home:{
                    //template:'<h1>我是首页</h1>'
                    templateUrl:'../views/home_tpl.html'
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
        })
        // 设置默认
        $urlRouterProvider.otherwise('/home');
    }])

})(angular,window,document);