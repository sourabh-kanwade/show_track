import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

export interface SeriesInterface {
  id: number,
  url: string,
  name: string,
  type: string,
  language: string,
  genres: [],
  status: string,
  runtime: number,
  premiered: string,
  officialSite: string,
  schedule: {
    time: string,
    days: []
  },
  rating: {
    average: number
  },
  weight: number,
  network: {
    id: number,
    name: string,
    country: {
      name: string,
      code: string,
      timezone: string
    }
  },
  webChannel: any,
  externals: {
    tvrage: number,
    thetvdb: number,
    imdb: string
  },
  image: {
    medium: string,
    original: string
  },
  summary: string,
  updated: number,
  _links: {
    self: {
      href: string
    },
    previousepisode: {
      href: string
    }
  }
}

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series:SeriesInterface;
  constructor(private dataService: MovieServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.dataService.getSeriesInfo(params.get('id')))
    ).subscribe((data: any) => {
      console.log(data);
      this.series = data;
    });
  }


}
