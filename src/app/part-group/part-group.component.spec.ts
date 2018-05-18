import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartGroupComponent } from './part-group.component';

describe('PartGroupComponent', () => {
  let component: PartGroupComponent;
  let fixture: ComponentFixture<PartGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
