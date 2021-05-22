import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciocrearnotasService 
{
  URL = 'http://localhost/WebAngularSQL/backend/API/';

  constructor(private http: HttpClient) { }

  insercionDatos(formulario) {
    return this.http.post(`${this.URL}InsertarDatos.php`, JSON.stringify(formulario));
  }

  listarNotas() {
    return this.http.get(`${this.URL}ListarNotas.php`);
  }

  eliminarNotas(id: number) {
    return this.http.get(`${this.URL}EliminarNotas.php?id=${id}`);
  }

  seleccionarNotas(id: number) {
   
    return this.http.get(`${this.URL}SeleccionarNotas.php?id=${id}`);
  }

 modificarNotas(formularioAUXMOD) {
    return this.http.post(`${this.URL}ModificarNotas.php`, JSON.stringify(formularioAUXMOD));
  }
}