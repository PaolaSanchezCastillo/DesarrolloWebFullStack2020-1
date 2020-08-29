import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { FavBeerComponent } from './fav-beer/fav-beer.component';
import { BeerSearchComponent } from './beer-search/beer-search.component';
import { BeerDetailComponent } from './beer-detail-component/beer-detail-component.component';
import {BeerDetailGuardComponent} from './beer-detail.guard/beer-detail.guard.component';
import {RouterModule} from '@angular/router'; 



@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerSearchComponent,
    FavBeerComponent,
    BeerDetailComponent,
    BeerDetailGuardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot([
      {path: 'home', component: FavBeerComponent},
      {path: '', redirectTo : '/home', pathMatch : 'full' }, 
      {path : 'beers', component : BeerSearchComponent}, 
      {path : 'beers/:id', component : BeerDetailComponent, canActivate : [BeerDetailGuardComponent]}, 
      {path : '**', redirectTo: '/home' , pathMatch : 'full'}
  
    
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
