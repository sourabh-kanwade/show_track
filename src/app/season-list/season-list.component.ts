import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.css']
})
export class SeasonListComponent implements OnInit {
  id: any;
  seasons=[];
  season_id:string;
  
  constructor(public route:ActivatedRoute,private dataService:MovieServiceService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.dataService.getseasons(this.id).subscribe((data:any)=>{
      this.seasons=data;
      this.season_id=data[0].id;
    });
    
    
  }
  
}
