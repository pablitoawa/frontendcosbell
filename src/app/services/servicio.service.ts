import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8081/api/servicio';//cambiar la ruta si es segun mi backend

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  constructor(private http: HttpClient) {}

  getServicios(): Observable<any[]> {
    return this.http.get<any[]>(API_URL);

/*getServicios() {
    return this.http.get<any[]>('/api/servicios');*/ //opcional

  }
}