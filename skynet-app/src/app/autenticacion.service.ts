import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private apiUrl = 'http://localhost:9000/api'; 

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    const url = '${this.apiUrl}/register';
    return this.http.post(url, user);
  }

  login(credentials: any): Observable<any> {
    const url = this.apiUrl+"/users/ByEmail/"+credentials;
    return this.http.get(url);
  }
}
