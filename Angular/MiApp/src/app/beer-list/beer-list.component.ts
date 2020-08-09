import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
   

  constructor() { }

  ngOnInit(): void {
  }

  beers : any[] = [
    {
      "img": "https://images.punkapi.com/v2/keg.png", 
      "title": "Trashy Blonde",
      "text": "Any",
      "price": 4.2
    
    },
    {
      "img": "https://images.punkapi.com/v2/4.png", 
      "title": "Bramling Cross",
      "text": "Any",
      "price": 4.8
    
    }, {
      "img": "https://images.punkapi.com/v2/5.png", 
      "title": "Avery Brown Dredge",
      "text": "Any",
      "price": 4.5
    
    }


];

}
