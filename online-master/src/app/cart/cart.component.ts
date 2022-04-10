

import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
// import { CategoryService } from 'src/app/category.service';
// import { Icategory } from 'src/app/icategory';
import { ActivatedRoute } from '@angular/router';
// import { viewallproduct } from 'src/app/products/view-all-product';
import { productlist, ViewAllProductComponent } from '../products/view-all-product/view-all-product.component';
import { ProductsService } from '../products.service';


// import { ViewAllProductComponent } from '../products/view-all-product/view-all-product.component';
// @Inject(CategoryService)
@Inject(CartService)

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // category! : Icategory[];
  product! : productlist[];
  products: productlist | undefined;
  constructor( private productsService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService) { }

  
  // items = this.cartService.getItems();

  // constructor( private categoryService :CategoryService,
  //   private route: ActivatedRoute,
  //   private cartService: CartService) { }

  ngOnInit(): void {
    // this.categoryService.getAllCategory().subscribe((data : Icategory[]) => {
    //   this.category = data;
    // });


    // this.productsService.getAllProducts().subscribe((data : productlist[]) => {
    //   this.product = data;
    // });
    this.CartDetails();
    this.loadCart();

  }
  
  getCartDetails:any=[];

  CartDetails(){

    if(localStorage.getItem('localCart')){

      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');

      console.log(this.getCartDetails);

    }

  }



  total:number = 0;

  loadCart(){

    if(localStorage.getItem('localCart')){

      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');

      this.total = this.getCartDetails.reduce(function(acc: any, val: any){

        return acc + (val.price);

      },0);

    }

  }

  // removeFromCart() {
  //   this.getCartDetails.pop();
  // }

  delete(getCartDetail: any){

    if(localStorage.getItem('localCart')){

      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');

      for( let i=0; i<this.getCartDetails.length; i++){

        if(this.getCartDetails[i].product_id === getCartDetail){

          this.getCartDetails.splice(i, 1);

          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));

          this.loadCart();

          

        }

      }

    }

  }
  // getTotal(){
  //   var total = 0;
  //   this.getCartDetails.forEach((item: { price: number; }) => {
  //     total += item.price;
  //   });
  //   return total;
  // }
}


