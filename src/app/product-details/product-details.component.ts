import { Component } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { CartService } from '../Services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  myproduct!: IProduct;
  // getAllProducts():IProduct[]{
  //   return this.
  // }
  constructor(private cartService: CartService, private _router: Router, private _activ: ActivatedRoute, private productsirves: ProductsService) {
    return
  }
  ngOnInit(): void {
    this._activ.paramMap.subscribe(pram => {
      let myid = pram.get("id");
      let id = myid ? +myid : undefined;
      this.myproduct = this.productsirves.getProductbyId(id);
    })
  }


  BackToPage() {
    this._router.navigate(["/home"])
  }



  NextProduct(id: number | undefined) {
    const nextId = this.productsirves.getNextProduct(id);
    this._router.navigate(['/product', nextId]);
  }
  PrevProduct(id: number | undefined) {
    const PrevId = this.productsirves.getPrevProduct(id);
    this._router.navigate(['/product', PrevId]);
  }
}
