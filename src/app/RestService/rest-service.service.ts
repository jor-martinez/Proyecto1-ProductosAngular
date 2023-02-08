import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {
  private apiurl:String = "http://localhost:8081/apiProductos";  

  constructor(private httpClient: HttpClient) {
    this.getProductos();
  }

  public getProductos(){
    return this.httpClient.get<any>
      (this.apiurl + "/productos");
  }
}
