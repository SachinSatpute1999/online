import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: 'view-product', component: ViewProductComponent },
  //{ path: 'list-product', component: ViewAllProductComponent },
  { path: 'search-cat', component: ViewProductByCategoryComponent },
  { path: 'search-date', component: ViewProductByDateComponent }
  
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
