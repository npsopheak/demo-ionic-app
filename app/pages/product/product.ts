import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductService } from '../services/ProductService';

@Component({
  templateUrl: 'build/pages/product/product.html',
  providers: [ ProductService ]
})
export class ProductPage {

  products: Array<any>;

  constructor(public navCtrl: NavController, public productService: ProductService) {
    this.productService.list().subscribe(
        data => {
           this.products = data.result;
       },
       err => {
           console.log(err);
       },
       () => console.log('Product Search Complete')
    )
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

  }
}
