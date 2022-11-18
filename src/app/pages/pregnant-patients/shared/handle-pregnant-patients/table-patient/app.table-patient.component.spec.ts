import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTablePatientComponent } from './app.table-patient.component';

describe('AppTablePatientComponent', () => {
  let component: AppTablePatientComponent;
  let fixture: ComponentFixture<AppTablePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppTablePatientComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTablePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
