import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
   serieslist;
  constructor(private dataService:MovieServiceService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data:any)=>{
      console.log(data);
      this.serieslist = data;
    })
  }

}
