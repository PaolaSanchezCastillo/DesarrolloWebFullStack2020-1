import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDetail.GuardComponent } from './beer-detail.guard.component';

describe('BeerDetail.GuardComponent', () => {
  let component: BeerDetail.GuardComponent;
  let fixture: ComponentFixture<BeerDetail.GuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDetail.GuardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetail.GuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
