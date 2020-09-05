import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BeerService } from '../beer.service';

@Component({
    styleUrls: ['./fav-beer.component.css'],
    templateUrl: './fav-beer.component.html'
})
export class FavBeerComponent implements OnInit {

    isActive: boolean = true;

    favBeerImg: string = "https://images.punkapi.com/v2/179.png";
    imgHeight: number = 398;
    imgWidth: number = 102;

    togglePromotion: boolean = true;

    favBeer: Beer;

    constructor( private beerService: BeerService ){}

    ngOnInit(): void {
        this.beerService.find().subscribe({
            next: beers => {
                this.favBeer = beers[0];
                // console.log( this.favBeer );
            },
            error: message => alert( message )
        });
    }
    
    toggleImage( event ): void {
        //console.log( event );
        this.togglePromotion = !this.togglePromotion;
    }
}