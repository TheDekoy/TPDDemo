import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullpartsComponent } from './fullparts.component';

describe('FullpartsComponent', () => {
  let component: FullpartsComponent;
  let fixture: ComponentFixture<FullpartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullpartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullpartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
