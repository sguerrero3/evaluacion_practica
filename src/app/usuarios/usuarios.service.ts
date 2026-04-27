import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl: string = environment.baseUrl + 'users.json';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuarios> {
    return this.http.get<Usuarios>(this.apiUrl);
  }

}
