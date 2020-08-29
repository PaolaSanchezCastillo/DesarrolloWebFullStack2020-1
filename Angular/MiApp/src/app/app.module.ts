import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { FavBeerComponent } from './fav-beer/fav-beer.component';
import { BeerSearchComponent } from './beer-search/beer-search.component';
import { RouterModule } from '@angular/router';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerDetailGuard } from './beer-detail/beer-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerSearchComponent,
    FavBeerComponent,
    BeerDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: FavBeerComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'beers', component: BeerSearchComponent },
      { path: 'beers/:id', component: BeerDetailComponent, canActivate: [ BeerDetailGuard ] },
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
