/**
 * Created by xmg on 4/9.
 */
;(function (angular) {
    angular.module('app').controller("DetailController",['$scope','$stateParams','$sce',function ($scope,$stateParams,$sce) {
        console.log($stateParams.index);
        var index = $stateParams.index;
        var item = $scope.homeList[index].content;

        $scope.item =  $sce.trustAsHtml(item);

        // $scope.item = item;
        //console.log($scope.homeList[index]);
    }])
    // 设置白名单
    angular.module('app').config(['$sceDelegateProvider',function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://127.0.0.1/**'
        ])
    }])
})(angular);