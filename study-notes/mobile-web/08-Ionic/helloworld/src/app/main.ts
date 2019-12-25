/**
 * 导入动态浏览器平台
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
/**
 * 导入app的根模块
 */
import { AppModule } from './app.module';

/**
 *动态浏览器平台指定启动的根模块
 */
platformBrowserDynamic().bootstrapModule(AppModule);
