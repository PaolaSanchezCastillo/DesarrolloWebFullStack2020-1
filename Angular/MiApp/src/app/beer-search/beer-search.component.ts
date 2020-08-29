
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    templateUrl: './beer-search.component.html'
})
export class BeerSearchComponent {

    private _filterBy: string;

    public get filterBy(): string {
        return this._filterBy;
    }

    public set filterBy(value: string) {
        this._filterBy = value;
    }
}