/**
 * 导入系统的组件和模块
 */
// NgModule : 根模块
//ErrorHandler : 异常处理服务
import { NgModule, ErrorHandler } from '@angular/core';
//导入系统的浏览器解析模块   （ 项目依赖的模块 ）
import { BrowserModule } from '@angular/platform-browser';
//导入系统ionic中的组件，模块和服务
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
/**应用首页组件*/
import { MyApp } from './app.component';
/**应用的页面组件*/
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
/**引入状态栏和启动屏插件*/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/**@NgModule ：定义项目的 根模块
 *               描述应用的部件和如何组装在一起的，每一个应用都会有一个Angular模块
 *
 *   @NgModule： 接收一个对象参数
 *               告诉Angular如何编译和启动应用
 * */
@NgModule({
  /**引入当前项目运行的组件（声明组件，声明之后就可以在界面html中使用这些组件 ）*/
  declarations: [
    MyApp,  // 主页面（首页）
    AboutPage, // 关于
    ContactPage, // 联系
    HomePage, // 首页
    TabsPage, // tabs 页面
  ],
  /**引入当前项目运行依赖的其它模块 ( 导入模块 )*/
  imports: [
    BrowserModule,// 浏览器解析模块
    IonicModule.forRoot(MyApp)//ionic 解析模块，并且这里指定首页入口
  ],
  /**指定应用的主界面（ 也就是根组件，首页 ）*/
  bootstrap: [IonicApp],
  /**配置在模板中不会被使用的组件*/
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],

  /**引入服务*/
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
/**最后一定要声明导出这个主模块*/
export class AppModule {}
