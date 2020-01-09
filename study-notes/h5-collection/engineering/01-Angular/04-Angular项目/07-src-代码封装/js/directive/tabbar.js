/**
 * Created by xmg on 4/9.
 */
;(function (angular) {
    // 4.tab 尾部
    angular.module('app').directive('tabbar',function () {
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
})(angular);