import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home.component';
import { TvProgramComponent } from './pages/tv-program.component';
import { MoviesComponent } from './pages/movies.component';
import { MyContentsComponent } from './pages/my-contents.component';
import { ProfileComponent } from './pages/profile.component';
import { HeaderScrollDirective } from './header/header-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TvProgramComponent,
    MoviesComponent,
    MyContentsComponent,
    ProfileComponent,
    HeaderScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
