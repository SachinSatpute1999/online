import { Injectable } from '@angular/core';
import { productlist, ViewAllProductComponent } from '../products/view-all-product/view-all-product.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  items: productlist[] = [];

  addToCart(products: productlist) {
    this.items.push(products);
  }

  removeFromCart() {
    this.items.pop();
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  
  getTotal(){
    var total = 0;
    this.items.forEach(item => {
      total += item.price;
    });
    return total;
  }
  constructor() { }
}
