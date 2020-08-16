import { Injectable } from '@angular/core';
import {Beer } from '../app/beer'; 
import {HttpClient, HttpErrorResponse }  from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BeerServiceService {

  constructor( private  HttpClient : HttpClient) { }

  findAll(): Beer[] {
    return [
      {
          "image_url": "https://images.punkapi.com/v2/77.png",
          "name": "Hobo Pop",
          "description": "Brewed with mountains of Wheat, Rye, Cara and Crystal malts, fermented with an American ale yeast and bittered with Amarillo & Centennial.",
          "abv": 4.2
      },
      {
          "image_url": "https://images.punkapi.com/v2/139.png",
          "name": "Born To Die",
          "description": "Savagely bitter, exceptionally dry, this IPA is born to die on a predetermined day.",
          "abv": 8.5
      },
      {
          "image_url": "https://images.punkapi.com/v2/82.png",
          "name": "Hopped-Up Brown Ale - Prototype Challenge",
          "description": "Brown ales are perfect foils for resinous C-Hops.",
          "abv": 6.3
      },
      {
          "image_url": "https://images.punkapi.com/v2/keg.png",
          "name": "Jasmine IPA",
          "description": "This has big floral aromas backed up with some of our favourite fruity hop flavours.",
          "abv": 5.8
      }
  ]

  }

  find():Observable<Beer[]>{

    return this.HttpClient.get<Beer[]>("https://api.punkapi.com/v2/beers/random")
    .pipe(catchError(this.handleError));
  }

  private handleError(error : HttpErrorResponse){
    console.log(error); 
    return throwError(`Error [${error.error.statusCode} ${error.error.error}]. Algo no funciona.`)
  }

}
