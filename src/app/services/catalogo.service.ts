import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../models/filme';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private hostUrl: string = 'http://copafilmes.azurewebsites.net/api/';

  constructor(private httpClient: HttpClient) { }

  /**
   * Pega a lista de filmes do servico de catalogos de filmes 
   */
  public getCatalogo(): Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(this.hostUrl + 'filmes');
  }
}
