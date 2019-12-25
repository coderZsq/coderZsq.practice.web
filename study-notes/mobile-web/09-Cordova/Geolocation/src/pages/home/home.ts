import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**1.导入baidu_location*/
declare var baidu_location:any;

declare var BMap:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /**2.定义三个变量*/
  currentLatitude:any=null;
  currentLongitude:any=null;
  currentInfo:any=null;
  public map:any;

  constructor(public navCtrl: NavController) {

  }


  /***
   * 拿到当前的位置
   */
  getCurrentPos(){
    this.location();
  }

  location(){
    var that=this;
    baidu_location.getCurrentPosition(
      function(data){

        if(data!=null){
          that.currentLatitude=data.latitude;
          console.log( that.currentLatitude); //纬度

          that.currentLongitude=data.lontitude;
          console.log(that.currentLongitude); //经度

          that.currentInfo=JSON.stringify(data);
          console.log(JSON.stringify(data));
        }else{
          that.location();
        }

      },
      function(data){
        console.log("fail");
        console.log(data);
        alert(JSON.stringify(data));
      });
  }

  /*显示地图*/
  showCurrentPosition(){
    //1.新建map对象
    this.map=new BMap.Map('containerBaidu');
    //2.新建一个坐标点
    var point=new BMap.Point(this.currentLongitude,this.currentLatitude);
    //3.坐标点居中显示并设计缩放为18
    this.map.centerAndZoom(point,18);
    //4.设计当前城市
    // this.map.setCurrentCity('北京');
    //5.新建一个标志物
    // var marker = new BMap.Marker(point);        // 创建标注
    //6.添加图层
    // this.map.addOverlay(marker);
    //添加地图类型控件
    // this.map.addControl(new BMap.NavigationControl());
    // this.map.addControl(new BMap.ScaleControl());
    // this.map.addControl(new BMap.OverviewMapControl());
    // this.map.addControl(new BMap.MapTypeControl());
    this.map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  }

}
