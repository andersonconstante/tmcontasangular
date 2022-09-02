import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contas } from 'src/model/contas.model' 

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}

  sendDataToApi(formValue: any): Observable<any> {
    return this.http.post('http://localhost:8080/conta', formValue); // Caso você precise passar algum header para sua API , como terceiro parametro só usar o objeto {headers}
  }

  getContas(): Observable<any> {
    return this.http.get<Contas[]>('http://localhost:8080/conta'); // Caso você precise passar algum header para sua API , como terceiro parametro só usar o objeto {headers}
  }
}
