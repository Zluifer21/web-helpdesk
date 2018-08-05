import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuedateComponent } from './duedate.component';

describe('DuedateComponent', () => {
  let component: DuedateComponent;
  let fixture: ComponentFixture<DuedateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuedateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
