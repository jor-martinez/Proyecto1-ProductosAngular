import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  private productos: any[] = [];
  private errorConexion: String = "";

  constructor(private httpClient: HttpClient) { }

  public getProductos(){
    this.httpClient.get('http://localhost:8080/productos').subscribe((resp:any)=>{
      if (resp == null){
        this.errorConexion = "No hay conexión con la base de datos, comunicate con soporte"
      }
    })
  }
}
