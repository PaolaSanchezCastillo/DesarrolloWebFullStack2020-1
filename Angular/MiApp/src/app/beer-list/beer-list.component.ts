import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BeerServiceService } from '../beer-service.service';

@Component({
    selector: 'beer-list',
    styleUrls: [ './beer-list.component.css' ],
    templateUrl: './beer-list.component.html'
})
export class BeerListComponent implements OnInit {

    private _filterBy: string;

    searchResults: Array<Beer>;

    constructor( private beerService: BeerServiceService ){}

    ngOnInit(): void {
    }

    public get filterBy(): string {
        return this._filterBy;
    }

    @Input( 'filterByOnBeerList' )
    public set filterBy(value: string) {
        console.log( `Recibiendo en BeerListComponent '${ this.filterBy }'...` );
        this._filterBy = value;
        this.filterBeers( this.filterBy );
    }

    filterBeers( filterPattern: string ) {
        console.log( `Filtrando '${ filterPattern }'...` );
        this.beerService.findByBeerName( filterPattern ).subscribe({
            next: beers => {
                console.log( "OBTENIENDO RESULTADOS" );
                this.searchResults = beers;
            },
            error: message => alert( message )
        });

        console.log( "FIN DE MÉTODO" );
    }
}
   

   
    
