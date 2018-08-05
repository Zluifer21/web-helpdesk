import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailModalComponent } from './ticket-detail-modal.component';

describe('TicketDetailModalComponent', () => {
  let component: TicketDetailModalComponent;
  let fixture: ComponentFixture<TicketDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
