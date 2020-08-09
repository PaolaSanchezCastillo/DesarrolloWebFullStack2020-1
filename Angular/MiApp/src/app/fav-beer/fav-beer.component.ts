import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-beer',
  templateUrl: './fav-beer.component.html',
  styleUrls: ['./fav-beer.component.css']
})
export class FavBeerComponent implements OnInit {


  isActive: boolean = true; 
  favBerrImg: string = "https://images.punkapi.com/v2/192.png"; 
  imgHeight: number = 398; 
  imgWidth: number = 100; 

  tooglePromotion: boolean = true; 

  toogleImage(event){
    this.tooglePromotion = !this.tooglePromotion;
  }
  constructor() { }

  ngOnInit(): void {
  }



}
