import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'beer-search',
    templateUrl: './beer-search.component.html'
})
export class BeerSearchComponent {

    private _filterBy: string;

    @Output() filterEvent: EventEmitter<string> = new EventEmitter<string>();

    emitFilterEvent(): void {
        console.log( `Emitiendo '${ this.filterBy }'...` );
        this.filterEvent.emit( this.filterBy );
    }

    public get filterBy(): string {
        //console.log( "GET" );
        return this._filterBy;
    }

    public set filterBy(value: string) {
        console.log( "SET" );
        this._filterBy = value;
        this.emitFilterEvent();
    }
}