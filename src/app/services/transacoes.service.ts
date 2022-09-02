import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contas } from 'src/model/contas.model' 

const baseUrl = 'http://localhost:8080/agendamento';


@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(baseUrl);
  }
  get(id: any) {
    return this.http.get(`${baseUrl}/conta/${id}`);
  }
  create(data: any) {
    return this.http.post(`${baseUrl}/cadastrar`, data);
  }

  getContas(): Observable<any> {
    return this.http.get<Contas[]>('http://localhost:8080/conta'); // Caso você precise passar algum header para sua API , como terceiro parametro só usar o objeto {headers}
  }

  sendDataToApi(formValue: any): Observable<any> {
    return this.http.post(`baseUrl/cadastrar`, formValue); // Caso você precise passar algum header para sua API , como terceiro parametro só usar o objeto {headers}
  }
}