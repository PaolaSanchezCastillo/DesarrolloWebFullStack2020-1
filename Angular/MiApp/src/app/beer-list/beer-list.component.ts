import { Component, Input } from '@angular/core';
import { Beer } from '../beer';

@Component({
    selector: 'beer-list',
    styleUrls: [ './beer-list.component.css' ],
    templateUrl: './beer-list.component.html'
})
export class BeerListComponent {

    //@Input( 'filterByOnBeerList' ) filterBy: string;

    private _filterBy: string;

    searchResults: Array<Beer>;

    beers: Beer[] = [
        {
            "img": "https://images.punkapi.com/v2/77.png",
            "title": "Hobo Pop",
            "text": "Brewed with mountains of Wheat, Rye, Cara and Crystal malts, fermented with an American ale yeast and bittered with Amarillo & Centennial.",
            "price": 4.2
        },
        {
            "img": "https://images.punkapi.com/v2/139.png",
            "title": "Born To Die",
            "text": "Savagely bitter, exceptionally dry, this IPA is born to die on a predetermined day.",
            "price": 8.5
        },
        {
            "img": "https://images.punkapi.com/v2/82.png",
            "title": "Hopped-Up Brown Ale - Prototype Challenge",
            "text": "Brown ales are perfect foils for resinous C-Hops.",
            "price": 6.3
        },
        {
            "img": "https://images.punkapi.com/v2/keg.png",
            "title": "Jasmine IPA",
            "text": "This has big floral aromas backed up with some of our favourite fruity hop flavours.",
            "price": 5.8
        }
    ];

    constructor(){
        this.searchResults = this.beers;
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
            beer.title.toLocaleLowerCase().indexOf( filterPattern ) !== -1
        );
    }
}