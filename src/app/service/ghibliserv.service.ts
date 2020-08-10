import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GhibliservService {

  private api = 'https://ghibliapi.herokuapp.com/'
  constructor(private httpClient: HttpClient) { }
  
  public getFilms(){
    return this.httpClient.get(this.api + 'films')
  } 

  public getFilmsId(id){
    return this.httpClient.get(this.api + 'films/' + id)
  } 
}
