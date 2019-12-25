import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  /**1.定义一个任意类型的userLsit变量*/
  userList:any=[];

  constructor(public navCtrl: NavController) {
    /**初始化数据*/
    for(var i=0;i<10;i++){
      this.userList.push({name:'Fine'+i,content:"I've had a pretty messed up day. If we just..."+i});
    }

  }




  /**
   * 处理点击事件
   * @param user
   */
  onSelectItem(user){
    // alert(user.name);
    console.log(user.name);
  }

}
