import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import productList from '../../../assets/ProductList';
import { HighlightDirective } from '../Directive/highlight.directive';
import { SingleProductComponent } from "../single-product/single-product.component";
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  imports: [NgClass, HighlightDirective, CurrencyPipe, SingleProductComponent, CartComponent]
})

export class ProductsComponent {
  imgsrc: string = "https://picsum.photos/seed/picsum/1000/500"
  clientName: string = "Sami Said"


  isBtnDisabled: boolean = false;
  showImg: boolean = false;
  showPurchase: boolean = false;

  // showImg:boolean=false;
  // constructor(){
  //   setInterval(() => {
  //     this.isBtnDisabled=!this.isBtnDisabled;

  //   }, 5000);

  // }
  productsCart: IProduct[] = [];
  products: IProduct[] = productList;
  addproducttocart(product: IProduct) {
    this.productsCart.push(product);
  }
  trackById(index: number, product: IProduct): number {
    return product.id;
  }

}
