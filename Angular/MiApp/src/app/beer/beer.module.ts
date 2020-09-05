import {NgModule} from '@angular/core'; 
import {CommonModule} from '@angular/common'; 
import {BeerDetailComponent} from './beer-detail/beer-detail.component';
import {BeerListComponent} from './beer-list/beer-list.component';
import {BeerSearchComponent} from './beer-search/beer-search.component';
import {FavBeerComponent} from './fav-beer/fav-beer.component';
import {FormsModule} from '@angular/forms'; 
import {RouterModule} from '@angular/router'; 
import {BeerDetailGuard} from './beer-detail/beer-detail.guard';



@NgModule({
declarations : [
    BeerListComponent, 
    BeerDetailComponent, 
    FavBeerComponent,
    BeerSearchComponent
], 
imports: [
    CommonModule, 
    
]
})