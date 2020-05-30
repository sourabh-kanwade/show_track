import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http:HttpClient) { }
  getData(){
    const data= this.http.get('http://api.tvmaze.com/shows?page=0');
    return data;
  }
}
