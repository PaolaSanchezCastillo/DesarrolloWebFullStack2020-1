import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.css']
})
export class BeerSearchComponent implements OnInit {

  filterBy : string; 

  constructor() { }

  ngOnInit(): void {
  }

}
