import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponentComponent } from './productosComponent/productos-component/productos-component.component';

const routes: Routes = [
  {path: 'productos', component: ProductosComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
