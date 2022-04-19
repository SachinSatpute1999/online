import { Component, Inject, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductsComponent } from '../products.component';
import { inject } from '@angular/core/testing';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/products.service';
import { ActivatedRoute } from '@angular/router';
// import { cwd } from 'process';

export class productlist{

  constructor(

  public product_id: Number,

  public p_name : string,

  public category_id : Number,

  public price : number,

  public photo : string,

  public description: string

  ){
}}

@Inject(CartService)
@Inject(ProductsService)
@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

   productlist:any[]=[];
  constructor(private http: HttpClient,
    private route:ActivatedRoute,
    private productsService:ProductsService,
    private cartService:CartService) {}
   
   ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data : productlist[]) => {
      this.productlist = data;
    })
    
  }
  getAllProducts(){

    this.http.get<any>('https://localhost:44307/products/getallproducts').subscribe(
      // this.http.get<any>('http://localhost:3000/products').subscribe(

      response => {

        console.log(response);

        this.productlist = response;

       });

  }
  itemsCart:any = [];
  addToCart(products: productlist)
  {
    // this.cartService.addToCart(products);
    // console.log(products)
    window.alert('product added!');
    

``

    let cartDataNull = localStorage.getItem('localCart');



    if(cartDataNull == null){

      let storeDataGet:any = [];

      storeDataGet.push(products);

      localStorage.setItem('localCart', JSON.stringify(storeDataGet));

    }

    else{

      var id = products.product_id;

      let index:number = -1;

      this.itemsCart = JSON.parse(localStorage.getItem('localCart') || '{}');



      if(index == -1){

        this.itemsCart.push(products);

        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));

      }

      else{

        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));



      }



  }
  }
}
