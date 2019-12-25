import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
/**导入收藏的页面*/
import { CollectPage } from '../collect/collect';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  /**定义收藏页面*/
  tab4Root = CollectPage;
  constructor() {

  }

}
