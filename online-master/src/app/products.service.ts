import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productlist, ViewAllProductComponent } from './products/view-all-product/view-all-product.component';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   
    constructor( private httpClient: HttpClient ){ }

    getAllProducts(): any{
       return this.httpClient.get("https://localhost:44307/products/getallproducts");
      //  return this.httpClient.get("http://localhost:3000/products");
  }
  

    getAllCategory(): any{
      return this.httpClient.get("http://localhost:3000/productCategory");
  }

  getCtegoryById(): any{
    return this.httpClient.get("http://localhost:3000/products/CategoryById/:id");
  }
}
