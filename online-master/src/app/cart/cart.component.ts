import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ActivatedRoute } from '@angular/router';
// import { viewallproduct } from 'src/app/products/view-all-product';
import { productlist, ViewAllProductComponent } from '../products/view-all-product/view-all-product.component';
import { ProductsService } from '../products.service';
// import { CheckoutComponent } from '../checkout/checkout.component';

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
  product!: productlist[];
  products: productlist | undefined;
  constructor(private productsService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService,
    ) { }




  ngOnInit(): void {
    this.CartDetails();
    this.loadCart();

  }

  getCartDetails: any = [];

  CartDetails() {

    if (localStorage.getItem('localCart')) {

      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');

      console.log(this.getCartDetails);

    }

  }
  


  total:number = 0;

  loadCart(){

    if(localStorage.getItem('localCart')){

      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');

      this.total = this.getCartDetails.reduce(function(acc: any, val: any){

        return acc + (val.price * val.prodquantity);

      },0);

    }

    this.cartService.totalSubject.next(this.total);

  }


  addToCart(products: productlist,quantity =1) {

    let productsExists = false

    for(let i in this.getCartDetails){

      if(this.getCartDetails[i].product_id === products.product_id){

        this.getCartDetails[i].quantity++

        productsExists = true

        break;

      }      

    }

    if(!productsExists){            

      this.getCartDetails.push(products);    

  }      

  }


  emptyCart()
  {
    this.cartService.clearCart();
  }
  // removeFromCart() {
  //   this.getCartDetails.pop();
  // }

  delete(getCartDetail: any) {

    if (localStorage.getItem('localCart')) {

      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');

      for (let i = 0; i < this.getCartDetails.length; i++) {

        if (this.getCartDetails[i].product_id === getCartDetail) {

          this.getCartDetails.splice(i, 1);

          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));

          this.loadCart();

        }

      }

    }

  }


  incQnt(prodId: any, qnt: any){

    for(let i=0; i<this.getCartDetails.length; i++){

      if(this.getCartDetails[i].product_id === prodId){

        if(qnt != 5)

          this.getCartDetails[i].prodquantity = parseInt(qnt) + 1;

      }

    }

    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));

    this.loadCart();

  

  }

  decQnt(prodId: any, qnt: any){

    for(let i=0; i<this.getCartDetails.length; i++){

      if(this.getCartDetails[i].product_id === prodId){

        if(qnt != 1)

          this.getCartDetails[i].prodquantity = parseInt(qnt) - 1;

      }

    }

    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));

    this.loadCart();

  }

  singleDelete(getCartDetail: any){

    if(localStorage.getItem('localCart')){

      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');



      for( let i=0; i<this.getCartDetails.length; i++){

        if(this.getCartDetails[i].product_id === getCartDetail){

          this.getCartDetails.splice(i, 1);

          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));

          this.loadCart();

          this.cartNumberFunc();

        }

      }

    }

  }


  cartNumber:number = 0;

  cartNumberFunc(){

    var cartValue = JSON.parse(localStorage.getItem('localcart') || '{}');

    this.cartNumber = cartValue.length;

    this.cartService.cartSubject.next(this.cartNumber);

  }
  removeall(){

    localStorage.removeItem('localCart');

    this.getCartDetails = [];

    this.total = 0;

    this.cartNumber = 0;

    this.cartService.cartSubject.next(this.cartNumber);

  }

  checkoutbtn(){

    // this.router.navigateByUrl('/checkout');

  }
}


