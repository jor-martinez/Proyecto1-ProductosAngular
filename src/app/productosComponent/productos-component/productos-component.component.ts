import { Component } from '@angular/core';
import { RestServiceService } from 'src/app/RestService/rest-service.service';

@Component({
  selector: 'app-productos-component',
  templateUrl: './productos-component.component.html',
  styleUrls: ['./productos-component.component.css']
})
export class ProductosComponentComponent {
  public titulo: String = "Inventario de productos";
  public productos: any[] = [];
  public errorConexion: String = "";
  public conDatos:Boolean = true;
  public dateTimeString: String = "";

  //const dateTimeNow = toString(date.getFullYear(), 4) + '-' + toString(date.getMonth() + 1, 2) + '-' + toString(date.getHours(), 2);
  //return dateTimeNow;

  constructor(private service: RestServiceService){
    this.consultaProductos();
  }
 
  public consultaProductos(){
    this.service.getProductos().subscribe((resp)=>{
      console.log(resp)
      if (resp!=null){
        this.productos = resp;
        
      } else {
        this.errorConexion = "No hay registros en la base de datos"
        console.log(this.errorConexion)
        this.conDatos = false;
      }
    }, (error) => {
      this.errorConexion = "No hay conexión con la base de datos, comunicate con soporte"
      console.log("error al consumir api")
      this.conDatos = false;
    })
  }
}
