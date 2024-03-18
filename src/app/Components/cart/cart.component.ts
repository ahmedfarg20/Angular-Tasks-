import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CartService } from './../../Services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  products: IProduct[] = [];


  constructor(private cartService: CartService) {
    this.products = this.cartService.cartItems
  }
  ngOnInit(): void {

  }
}
