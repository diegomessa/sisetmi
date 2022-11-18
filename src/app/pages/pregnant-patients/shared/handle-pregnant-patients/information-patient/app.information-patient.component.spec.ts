import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInformationPatientComponent } from './app.information-patient.component';

describe('AppInformationPatientComponent', () => {
  let component: AppInformationPatientComponent;
  let fixture: ComponentFixture<AppInformationPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppInformationPatientComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInformationPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
