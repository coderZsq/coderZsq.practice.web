import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  /**1.使用tpyescript定义一个变量*/
  msgs:string [] =[];

  constructor(public navCtrl: NavController) {
    /**2.给msgs变量赋值*/
    for(var i=0;i<10;i++){
      this.msgs.push('第'+i+'条记录');
    }
  }

  /**
   * 处理点击事件
   * @param msg
   */
  itemSelected(msg,index){
    alert(msg+'='+index);
    console.log(index);
  }

}
