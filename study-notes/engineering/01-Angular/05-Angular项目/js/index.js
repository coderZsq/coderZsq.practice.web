/**
 * Created by wenya on 2017/7/3.
 */
;(function (angular) {
    // 1.创建模块
    var app = angular.module('app',['ngRoute']);

    // 2.创建控制器
    app.controller('AppController',['$scope',function ($scope) {
        // 1.设置title
        $scope.title = '豆瓣电影';
    }]);

    // 设置基础url
    app.value('baseUrl','https://api.douban.com/v2/');
    // 设置白名单
    app.config(['$sceDelegateProvider',function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://api.douban.com/**'
        ]);
    }]);

    // 3.配置路由
    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/movie/:type',{
            templateUrl:'list_tpl.html',
            controller:'HomeController'
        }).when('/detail/:id',{
            templateUrl:'movie_detail_tpl.html',
            controller:'DetailController'
        }).otherwise({
            redirectTo:'/movie/in_theaters'
        })
    }]);

    // 4.首页控制器
    app.controller('HomeController',['$scope','$routeParams','baseUrl','xmgHttp',function ($scope,$routeParams,baseUrl,xmgHttp) {

        // 加载图片
        $scope.isLoading = true;

        // 发送网络请求
        var url = baseUrl + 'movie/' + $routeParams.type;

        $scope.loadData = function (start) {
            // 参数
            var params = {
                start:start,
                count:5
            };
            xmgHttp.jsonp(url,params,function (regs) {
                $scope.dataList = regs;
                $scope.isLoading = false;

                // 有多少页
                $scope.totalPage = Math.ceil(regs.total / $scope.count);

                $scope.$apply();
            });
        };

        $scope.loadData(0);
        
        // 2.上一页下一页
        // 当前页码
        $scope.curPage = 1;
        // 每一页显示多少条数据
        $scope.count = 5;

        $scope.isPer = false;
        $scope.isNext = true;

        $scope.page = function (type) {
            if (type){
                // 上一页
                $scope.curPage--;
            }else {
                // 下一页
                $scope.curPage++;
            }
            var start = ($scope.curPage - 1) * $scope.count;

            // 判断上一页下一页值
            $scope.isPer = $scope.curPage == 1 ? false : true;
            $scope.isNext = $scope.curPage == $scope.totalPage ? false : true;

            $scope.loadData(start);
        }

    }]);
    // 详情控制器
    app.controller('DetailController',['$scope','xmgHttp','$routeParams','baseUrl',function ($scope,xmgHttp,$routeParams,baseUrl) {
        var url = baseUrl + '/movie/subject/' + $routeParams.id;

        // 发送请求
        xmgHttp.jsonp(url,null,function (regs) {
            $scope.detailList = regs;
            $scope.$apply();
        })
    }]);

    // 5.封装http服务
    /**
     * http 跨域 服务
     * 第一个参数 url 要请求的url地址
     * 第二个参数 params 请求参数
     * 第三个参数 回调函数
     */
    app.service('xmgHttp',['$window',function ($window) {
        this.jsonp = function (url,params,callback) {
            /* jsonp请求网络数据
             * 前端需要做2件事情,
             * 1.在本地声明一个方法,方法里面需要一个形参
             * 2.使用html的src属性请求数据,一般使用script标签
             * */
            // 1.在本地声明一个方法,方法里面需要一个形参
            // 1.1 生成函数名称
            var callbackName = 'callback' + Math.random().toString().slice(2);
            // 1.2 生成方法
            $window[callbackName] = function (regs) {
                // 得到数据
                return callback(regs);
            };

            // 2.使用html的src属性请求数据,一般使用script标签
            // 2.1 创建
            var script = document.createElement('script');
            // 2.2添加标签
            document.body.appendChild(script);
            // 2.3 格式化url
            var queryStr = '';
            for (key in params){
                queryStr += key + '=' + params[key] + '&'
            }
            // 拼接callback
            queryStr += 'callback=' + callbackName;
            // 拼接url
            url += '?' + queryStr;

            // 2.4 设置src属性的值
            script.src = url;
        }
    }]);

    // 6.自定义指令
    app.directive('selStyle',['$location',function ($location) {
        return {
            restrict:'A',
            link:function ($scope,ele,attr) {

                $scope.$location = $location;
                /*
                * 利用a标签的href的属性和$location的变化来进行对比,如果一样设置当前的类名,让当前的选中,其他的取消
                * $watch() 的属性,只有在$scope身上才能实现监听
                * */
                $scope.$watch('$location.url()',function (newV, oldV) {
                    var href = ele.find('a').attr('href').slice(2);
                    if (newV == href){
                        // 移除所有的
                        ele.parent().children().removeClass(attr.selStyle);
                        // 设置当前的
                        ele.addClass(attr.selStyle);
                    }
                });
            }
        }
    }])

})(angular);