import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Formulario } from '../models/formulario';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  _url = 'http://localhost:3000/'
  private httpHeaders  = new HttpHeaders ({'Content-Type':'application/json'})

  constructor(
    private http: HttpClient
  ) {
    console.log('Servicio Formulario')
  }

  addRegistro(formulario: Formulario) {
    return this.http.post(this._url, formulario);
  }

}
