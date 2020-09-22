import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conta } from './conta';


@Injectable({
  providedIn: 'root'
})
export class ContaService {
  
  private getURL = "http://localhost:8080/api/contas"
  private postURL = "http://localhost:8080/api/conta"
  private putURL = "http://localhost:8080/api/conta"

  constructor(private HttpClient: HttpClient) { }
  
  getContasList(): Observable<any>{
    return this.HttpClient.get<Conta[]>(`${this.getURL}`)
  }
  createConta(conta: Conta): Observable<Object>{
    return this.HttpClient.post(`${this.postURL}`, conta)
  } 

  getContaById(id: number): Observable<Conta>{
    return this.HttpClient.get<Conta>(`${this.getURL}/${id}`)
  }
  updateConta(id: number, value: any): Observable<Object> {
    return this.HttpClient.put(`${this.putURL}/${id}`, value);
  }
  depositoConta(id: number, valor:number, value:any): Observable<Object>{
    return this.HttpClient.put (`${this.putURL}/${id}&${valor}`, value);
  }
  saqueCotna (id:number, valor: number, value:any): Observable<Object>{
    return this.HttpClient.put (`${this.putURL}/${id}&${valor}`, value);
  }

  transferenciaConta(idOrigem:number, idDestino:number, valor:number, value:any):Observable<Conta>{
    return this.HttpClient.put <Conta>
    (`${this.putURL}/${idOrigem}&${idDestino}&${valor}`, value);
  }
}
