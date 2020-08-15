import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div class="d-flex flex-column align-items-center mt-5 mb-1">
        <h1>{{ title }}</h1>
        <p class="lead">Look you favorite beer</p>
    </div>
    <beer-search (filterEvent)="onFilterEvent($event)"></beer-search>
    <fav-beer></fav-beer>
    <beer-list [filterByOnBeerList]="filterByOnApp"></beer-list>`
})
export class AppComponent {

    title: string = 'We love beer';

    filterByOnApp: string;

    onFilterEvent( filterByFromBeerSearch: string ){
        console.log( `Recibiendo en AppComponent '${ filterByFromBeerSearch }'...` );
        this.filterByOnApp = filterByFromBeerSearch;
    }
}