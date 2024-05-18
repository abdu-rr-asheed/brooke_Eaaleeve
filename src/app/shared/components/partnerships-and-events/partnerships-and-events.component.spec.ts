import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipsAndEventsComponent } from './partnerships-and-events.component';

describe('PartnershipsAndEventsComponent', () => {
  let component: PartnershipsAndEventsComponent;
  let fixture: ComponentFixture<PartnershipsAndEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnershipsAndEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartnershipsAndEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
