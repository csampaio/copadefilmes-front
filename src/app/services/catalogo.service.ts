import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../models/filme';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private hostUrl: string = 'http://copafilmes.azurewebsites.net/api/';
  private headers: HttpHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient) { 
    this.headers.append('content-type','application/json');
  }

  /**
   * Pega a lista de filmes do servico de catalogos de filmes 
   */
  public getCatalogo(): Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(this.hostUrl + 'filmes', {headers: this.headers});
  }
}
