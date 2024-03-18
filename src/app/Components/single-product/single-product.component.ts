import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HighlightDirective } from '../Directive/highlight.directive';
import { CurrencyPipe } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { IProduct } from '../../Models/iproduct';
  import { CartService } from './../../Services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [HighlightDirective,CurrencyPipe,ProductsComponent],
templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  @Input() product!:IProduct;
  @Output() handleAddToCart=new EventEmitter<IProduct>();

  // handleToggleImg(){
  //   this.showImg=!this.showImg;
  //     }
      // handleTogglepurchase() {
      //   this.showPurchase=!this.showPurchase;
      // }
      // @Output() handleAddToCart=new EventEmitter();

      // handleQuantity(product:IProduct){
      //   if(product.quantity)
      //   product.quantity--;
      // }
      // @Output()handleaddtocart=new EventEmitter();
      // addtocart(product:IProduct){
      //   this.handleaddtocart.emit(product);
      // }
addProductToCart(event:MouseEvent,Product:IProduct){
  event.stopPropagation();
  this.cartservice.addToCart(Product);

}
constructor(private router:Router,private cartservice:CartService){}
handleRoute(event:MouseEvent,id:number){
  event.stopPropagation();
  this.router.navigate(['/product',id]);
}
}
