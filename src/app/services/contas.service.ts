import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/conta';
@Injectable({
  providedIn: 'root'
})
export class ContasService {
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(baseUrl);
  }
  get(id: any) {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any) {
    return this.http.post(`${baseUrl}/cadastrar`, data);
  }


}
