import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import productList from '../../assets/ProductList';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  Products: IProduct[] = productList;
  constructor() { }

  getProductItems() {
    return [...this.Products]
  }
  removeFromCart(id: number) {
    this.Products.filter((Products) => (Products.id != id))
  }
  getProductbyId(id: number | undefined): any {
    return this.Products.find((Products) => Products.id == id);
  }
  getProductbyCatID(Cat_ID: number) {
    this.Products.filter((Products) => (Products.categoryID == Cat_ID))
  }

  getNextProduct(id: number | undefined): number {
    let index = this.Products.findIndex((product) => product.id == id);

    const findedProduct = this.Products[++index];

    return findedProduct.id;

  }
  getPrevProduct(id: number | undefined): number {
    let index = this.Products.findIndex((product) => product.id == id);

    const findedProduct = this.Products[--index];

    return findedProduct.id;
  }
  isLastIndex(id: number | undefined) {


    const findedProduct = this.Products[this.Products.length - 1];
    return findedProduct.id == id;
  }
}
