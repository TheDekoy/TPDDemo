import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPartsComponent } from './show-parts.component';

describe('ShowPartsComponent', () => {
  let component: ShowPartsComponent;
  let fixture: ComponentFixture<ShowPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
