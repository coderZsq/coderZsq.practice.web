/**
 * 根组件
 */
// 导入系统angular核心组件
import { Component } from '@angular/core';
// 导入ionic 中的Platform服务
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
/**导入底部的 TabsPage 组件*/
import { TabsPage } from '../pages/tabs/tabs';
/***
 * 1.定义一个组件
 */
@Component({
  templateUrl: 'app.html', // 这个组件对应的页面
  // styleUrl: ['app.css']  // 这个组件对应的样式
})

/**
 * 2.组件页面对应的js代码
 */
export class MyApp {
  //使用TypeScript定义了一个变量
  rootPage:any = TabsPage;

  /**
   * 构造器函数
   * @param platform  注入Platform到全局变量中
   * @param statusBar 注入StatusBar到全局变量中
   * @param splashScreen 注入SplashScreen到全局变量中
   */
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

}
