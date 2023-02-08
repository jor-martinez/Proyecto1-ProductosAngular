import { Component } from '@angular/core';
import { RestServiceService } from 'src/app/RestService/rest-service.service';

@Component({
  selector: 'app-productos-component',
  templateUrl: './productos-component.component.html',
  styleUrls: ['./productos-component.component.css']
})
export class ProductosComponentComponent {
  constructor(private service: RestServiceService){
  }

  get productos(){
    return this.service.getProductos;
  }
  
}
