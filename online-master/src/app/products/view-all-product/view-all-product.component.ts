import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class productlist{

  constructor(

  public product_id: Number,

  public p_name : string,

  public category_id : Number,

  public price : string,

  public photo : string,

  public description: string

  ){
}}

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

   productlist:any[]=[];
  constructor(private http: HttpClient) { 
   } ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){

    this.http.get<any>('http://localhost:3000/products').subscribe(

      response => {

        console.log(response);

        this.productlist = response;

       });

  }
}
