import { Injectable } from '@angular/core';
import {Beer } from '../app/beer'; 
import {HttpClient, HttpErrorResponse }  from '@angular/common/http';
import { Observable, throwError, empty } from 'rxjs';
import { catchError ,map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BeerServiceService {

  constructor( private http: HttpClient ){}

    findAll(): Beer[] {
        return [
            {
                "id": 77,
                "image_url": "https://images.punkapi.com/v2/77.png",
                "name": "Hobo Pop",
                "description": "Brewed with mountains of Wheat, Rye, Cara and Crystal malts, fermented with an American ale yeast and bittered with Amarillo & Centennial.",
                "abv": 4.2
            },
            {
                "id": 139,
                "image_url": "https://images.punkapi.com/v2/139.png",
                "name": "Born To Die",
                "description": "Savagely bitter, exceptionally dry, this IPA is born to die on a predetermined day.",
                "abv": 8.5
            },
            {
                "id": 82,
                "image_url": "https://images.punkapi.com/v2/82.png",
                "name": "Hopped-Up Brown Ale - Prototype Challenge",
                "description": "Brown ales are perfect foils for resinous C-Hops.",
                "abv": 6.3
            },
            {
                "id": 1,
                "image_url": "https://images.punkapi.com/v2/keg.png",
                "name": "Jasmine IPA",
                "description": "This has big floral aromas backed up with some of our favourite fruity hop flavours.",
                "abv": 5.8
            }
        ];
    }

    find(): Observable<Beer[]> {
        return this.http.get<Beer[]>( "https://api.punkapi.com/v2/beers/random" )
            .pipe( catchError( this.handleError ) );
    }

    findByBeerName( beerName: string ): Observable<Beer[]> {
        if( !beerName || beerName.length < 3 ){
            return empty();
        }

        return this.http.get<Beer[]>( `https://api.punkapi.com/v2/beers?beer_name=${ beerName }` )
            .pipe( catchError( this.handleError ) );
    }

    findById( id: number ): Observable<Beer> {
        return this.http.get<Beer>( `https://api.punkapi.com/v2/beers/${ id }` )
            .pipe(
                map( beers => {
                    return beers[0];
                }),
                catchError( this.handleError )
            );
    }

    private handleError( error: HttpErrorResponse ){
        console.error( error );
        return throwError( `Error [${error.error.statusCode} ${error.error.error}]. Intentar más tarde.` );
    }
}