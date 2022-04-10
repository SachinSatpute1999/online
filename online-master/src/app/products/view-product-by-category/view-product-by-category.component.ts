import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


// export class categoryById{
//   constructor(
//     public category_id : Number,
//     public c_name : string
//   ){
//   }}
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
  selector: 'app-view-product-by-category',
  templateUrl:'./view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {

  productlist:any[]=[];

  constructor(private http: HttpClient) { 
   }
     ngOnInit(): void {
       this.getCategory();
    }
      getCategory(){
        this.http.get<any>('http://localhost:3000/CategoryById/:id').subscribe(
          response => {
            console.log(response);
        })
      }
  }


