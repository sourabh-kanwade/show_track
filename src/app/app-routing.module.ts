import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SeriesComponent } from './series/series.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';

const routes:Routes=[
    {path:'',component:HomeComponent},
    {path:'movies',component:MovieListComponent},
    {path:'tv-series',component:SeriesListComponent},
    {path:'login',component:LoginComponent},
    {path:'profile',component:ProfileComponent},
    {path:'page-not-found',component:PageNotFoundComponent},
    {path:'tv-series/:id',component:SeriesComponent},
    {path:'episodes/:id',component:EpisodeListComponent},

    {path:'**',redirectTo:'/page-not-found'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
