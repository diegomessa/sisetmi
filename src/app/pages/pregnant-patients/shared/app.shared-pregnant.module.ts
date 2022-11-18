import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppAccordionInfoPatientComponent } from './handle-pregnant-patients/accordion-info-patient/app.accordion-info-patient.component';
import { AppConsultPatientsComponent } from './handle-pregnant-patients/consult-patients/app.consult-patients.component';
import { AppInformationPatientComponent } from './handle-pregnant-patients/information-patient/app.information-patient.component';
import { AppTablePatientComponent } from './handle-pregnant-patients/table-patient/app.table-patient.component';
import { DiagnosticInformationComponent } from './handle-pregnant-patients/diagnostic-information/app.diagnostic-information.component';


@NgModule({
  declarations: [
    AppConsultPatientsComponent,
    AppAccordionInfoPatientComponent,
    AppInformationPatientComponent,
    AppTablePatientComponent,
    DiagnosticInformationComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AppConsultPatientsComponent,
    AppAccordionInfoPatientComponent,
    AppInformationPatientComponent,
    AppTablePatientComponent,
  ],
  providers: [],
})
export class AppSharedPregnantModule { }
