import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAccordionInfoPatientComponent } from './app.accordion-info-patient.component';

describe('AppAccordionInfoPatientComponent', () => {
  let component: AppAccordionInfoPatientComponent;
  let fixture: ComponentFixture<AppAccordionInfoPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppAccordionInfoPatientComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAccordionInfoPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
