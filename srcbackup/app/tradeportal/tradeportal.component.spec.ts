import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeportalComponent } from './tradeportal.component';

describe('TradeportalComponent', () => {
  let component: TradeportalComponent;
  let fixture: ComponentFixture<TradeportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
