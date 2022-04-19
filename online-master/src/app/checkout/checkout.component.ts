import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../service/cart.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService,private cartComponent:CartComponent,private activateRoute:ActivatedRoute,
    private productsService:ProductsService,private httpClient:HttpClient) { }

    public products : any []= [];

    getCartDetails: any = [];
    productlist:any[]=[];


  ngOnInit(): void {

    // this.CartDetails();
    // this.loadCart();   
    this.productsService.getAllProducts().subscribe((data : CheckoutComponent[]) => {
      this.productlist = data;
    })

  }
  CartDetails() {

    if (localStorage.getItem('localCart')) {

      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');

      console.log(this.getCartDetails);

    }
  
  }

}
