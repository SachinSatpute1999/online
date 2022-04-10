import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderComponent } from './orders/list-order/list-order.component';
import {AboutComponent} from './site-layout/about/about.component';
import { ViewAllProductComponent } from './products/view-all-product/view-all-product.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path:'order', component:ListOrderComponent},
  {path:'about', component:AboutComponent},
  {path: 'view-all-product', component:ViewAllProductComponent},
  {path: 'cart', component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
