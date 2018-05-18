import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailportalComponent } from './retailportal.component';

describe('RetailportalComponent', () => {
  let component: RetailportalComponent;
  let fixture: ComponentFixture<RetailportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
