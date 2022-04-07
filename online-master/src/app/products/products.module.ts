import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ViewProductComponent,
    ViewAllProductComponent,
    ViewProductByDateComponent,
    ViewProductByCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
