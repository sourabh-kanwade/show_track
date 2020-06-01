import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  private url = "http://api.tvmaze.com/shows/";

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('http://api.tvmaze.com/shows?page=0');  
  }

  getSeriesInfo(id:string){
    return this.http.get(this.url+id);
  }

  getepisodes(id:string){
    return this.http.get('http://api.tvmaze.com/shows/'+id+'/episodes');
  }
  getseasons(id:string){
    return this.http.get('http://api.tvmaze.com/shows/'+id+'/seasons');
  }
  getseasonEpisodes(id:string){
    return this.http.get('http://api.tvmaze.com/seasons/'+id+'/episodes');
  }
}
