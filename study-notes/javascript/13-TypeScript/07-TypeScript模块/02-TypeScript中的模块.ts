/**
 * Created by liujun on 2018/3/2.
 */
/**1.定义一个BMap的模块*/
namespace BMap{
    /**2.地图类*/
    export class Map{
        continer:string;
        constructor(continer:string){
            this.continer=continer;
        }
        /*添加一个方法（添加中心坐标点）*/
        centerAndZoom(point:Point){
            console.log(point);
        }
    }
    /**3.坐标点*/
    export class Point{
        // x:number;
        // y:number;
        constructor(public x:number,public y:number){
            // this.x=x;
            // this.y=y;
        }
    }
}