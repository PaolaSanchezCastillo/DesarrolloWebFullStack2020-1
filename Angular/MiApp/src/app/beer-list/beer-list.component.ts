import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../beer';
import {BeerServiceService} from '../beer-service.service';

@Component({
    selector: 'beer-list',
    styleUrls: [ './beer-list.component.css' ],
    templateUrl: './beer-list.component.html'
})
export class BeerListComponent implements OnInit {

    //@Input( 'filterByOnBeerList' ) filterBy: string;

    private _filterBy: string;

    searchResults: Array<Beer>;

    beers: Beer[];

    constructor( private BeerServiceService : BeerServiceService){}

    ngOnInit(): void{
      this.beers = this.BeerServiceService.findAll();
    }

    public get filterBy(): string {
        return this._filterBy;
    }

    @Input( 'filterByOnBeerList' )
    public set filterBy(value: string) {
        this._filterBy = value;

        console.log( `Recibiendo en BeerListComponent '${ this.filterBy }'...` );

        this.searchResults = this.filterBy? this.filterBeers(this.filterBy) : this.beers ;
    }

    filterBeers( filterPattern: string ): Beer[] {
        console.log( `Filtrando '${ filterPattern }'...` );
        filterPattern = filterPattern.toLocaleLowerCase();
        return this.beers.filter( ( beer: Beer ) =>
            beer.name.toLocaleLowerCase().indexOf( filterPattern ) !== -1
        );
    }
}