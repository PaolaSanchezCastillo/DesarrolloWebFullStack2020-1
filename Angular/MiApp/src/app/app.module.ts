import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { FavBeerComponent } from './fav-beer/fav-beer.component';
import { BeerSearchComponent } from './beer-search/beer-search.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerSearchComponent,
    FavBeerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
