import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponentComponent } from './productosComponent/productos-component/productos-component.component';
import { NavBarComponent } from './navBar/nav-bar/nav-bar.component';
import { AltaProductosComponent } from './altaProductos/alta-productos/alta-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponentComponent,
    NavBarComponent,
    AltaProductosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
