
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders/orders.module';

import { SiteLayoutModule } from './site-layout/site-layout.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    SiteLayoutModule,
    HttpClientModule
  
  
  
  ],
  providers: [ ProductsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
