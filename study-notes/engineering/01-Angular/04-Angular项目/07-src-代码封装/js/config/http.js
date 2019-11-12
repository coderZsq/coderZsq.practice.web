/**
 * Created by xmg on 4/9.
 */
;(function (angular) {
    var app = angular.module('app');

    app.service('xmgHttp',['$http',function ($http) {
        this.jsonp = function (url,params,success,error) {
            $http({
                url:url,
                params:params,
                method:'jsonp'
            }).then(function (res) {
                success(res.data);
            }).catch(function (err) {
                error(err);
            })
        }
        this.get = function () {

        }
        this.post = function () {

        }
    }])
})(angular);