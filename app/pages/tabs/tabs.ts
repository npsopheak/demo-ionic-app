import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ProductPage } from '../product/product';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;
  public tab4Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = ProductPage;
    this.tab3Root = AboutPage;
    this.tab4Root = ContactPage;
  }
}
