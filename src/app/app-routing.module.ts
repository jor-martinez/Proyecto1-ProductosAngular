import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaProductosComponent } from './altaProductos/alta-productos/alta-productos.component';
import { ProductosComponentComponent } from './productosComponent/productos-component/productos-component.component';

const routes: Routes = [
  {path: 'productos', component: ProductosComponentComponent},
  {path: 'productos/alta', component: AltaProductosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
