import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent,
  TvProgramComponent,
  MoviesComponent,
  MyContentsComponent,
  ProfileComponent
} from '../app/pages/index.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tvprogram', component: TvProgramComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'mycontent', component: MyContentsComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
