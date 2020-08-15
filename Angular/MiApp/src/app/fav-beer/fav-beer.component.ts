import { Component } from '@angular/core';

@Component({
    selector: 'fav-beer',
    styleUrls: ['./fav-beer.component.css'],
    templateUrl: './fav-beer.component.html'
})
export class FavBeerComponent {
    isActive: boolean = true;

    favBeerImg: string = "https://images.punkapi.com/v2/179.png";
    imgHeight: number = 398;
    imgWidth: number = 102;

    togglePromotion: boolean = true;
    toggleImage( event ): void {
        //console.log( event );
        this.togglePromotion = !this.togglePromotion;
    }
}