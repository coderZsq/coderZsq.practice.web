/**
 * Created by liujun on 2018/3/2.
 */

/**1.闭包，几时函数。*/
;(function () {
 //定义私有的属性成员


})();


// (function (dom) {
//
// })(document)

/**2.用js语法模拟编写模块*/
var BMap;
(function (BMap) {
    //1.定义一些私有的属性
    var point='116.00034';

    //2.定义公有的方法
    BMap.getPoint=function () {
        return point;
    }

})(BMap || (BMap={}));

console.log( BMap.getPoint() );







