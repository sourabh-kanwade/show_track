import { Component, OnInit, Input } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-season-episodes-list',
  templateUrl: './season-episodes-list.component.html',
  styleUrls: ['./season-episodes-list.component.css']
})
export class SeasonEpisodesListComponent implements OnInit {
  @Input() seasonId:string;
  seasonepisodes =[];
  constructor(private dataService:MovieServiceService) { }

  ngOnInit(): void {
   this.dataService.getseasonEpisodes(this.seasonId).subscribe((data:any)=>{
     console.log(data);
     this.seasonepisodes = data;
   })
  }

}
