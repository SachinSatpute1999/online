import { Injectable } from '@angular/core';
import { productlist, ViewAllProductComponent } from '../products/view-all-product/view-all-product.component';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: productlist[] = [];



  clearCart() {
    this.items = [];
    return this.items;
  }



  constructor() { }

  cartSubject = new Subject<any>();

  totalSubject = new Subject<any>();
}
