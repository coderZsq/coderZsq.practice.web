/**
 * Created by liujun on 2018/3/2.
 */
/**1.定义一个BMap的模块*/
var BMap;
(function (BMap) {
    /**2.地图类*/
    var Map = (function () {
        function Map(continer) {
            this.continer = continer;
        }
        /*添加一个方法（添加中心坐标点）*/
        Map.prototype.centerAndZoom = function (point) {
            console.log(point);
        };
        return Map;
    }());
    BMap.Map = Map;
    /**3.坐标点*/
    var Point = (function () {
        // x:number;
        // y:number;
        function Point(x, y) {
            this.x = x;
            this.y = y;
            // this.x=x;
            // this.y=y;
        }
        return Point;
    }());
    BMap.Point = Point;
})(BMap || (BMap = {}));
