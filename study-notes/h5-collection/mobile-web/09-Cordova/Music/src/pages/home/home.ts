import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/**导入详情页面*/
import {DetailPage} from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  /**
   * 处理item的点击事件
   */
  onSelectItem(title){
    // console.log(title);
    /**进行页面跳转
     * 参数一：目标页面
     * 参数二：传递参数
     * */
    this.navCtrl.push( DetailPage , {title:title} );
  }

}
