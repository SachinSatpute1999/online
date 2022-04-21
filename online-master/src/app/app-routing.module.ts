import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './site-layout/about/about.component';
import { ViewAllProductComponent } from './products/view-all-product/view-all-product.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './site-layout/contact/contact.component';


const routes: Routes = [{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
{ path: 'about', component: AboutComponent },
{ path: 'view-all-product', component: ViewAllProductComponent },
{ path: 'cart', component: CartComponent },
{ path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
