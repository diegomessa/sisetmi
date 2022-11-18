import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticInformationComponent } from './app.diagnostic-information.component';

describe('DiagnosticInformationComponent', () => {
  let component: DiagnosticInformationComponent;
  let fixture: ComponentFixture<DiagnosticInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiagnosticInformationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
