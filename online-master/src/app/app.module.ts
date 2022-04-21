
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SiteLayoutModule } from './site-layout/site-layout.module';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteLayoutModule,
    HttpClientModule,



  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
