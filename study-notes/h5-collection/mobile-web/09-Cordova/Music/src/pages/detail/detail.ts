import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  title:string='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //接收上一个页面传递过来的参数
    this.title=this.navParams.get('title');
    console.log('title='+this.title);
  }

  /**
   * 界面渲染完毕之后回调
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  /**
   * 返回上一个页面
   */
  goToBack(){
    //返回上一个页面
    this.navCtrl.pop();
  }

}
