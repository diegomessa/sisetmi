import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppPregnantPatientsRoutingModule } from './app-pregnant-patients.routing.module';
import { AppPregnantPatientsComponent } from './app.pregnant-patients.component';
import { AppConsultPatientsComponent } from './consult-patients/app.consult-patients.component';
import { AppHandlePregnantComponent } from './handle-pregnant-patients/app.handle-pregnant.component';
import { AppInformationPatientComponent } from './information-patient/app.information-patient.component';
import { AppTablePatientComponent } from './table-patient/app.table-patient.component';
import { AppAccordionInfoPatientComponent } from './accordion-info-patient/app.accordion-info-patient.component';


@NgModule({
  declarations: [
    AppHandlePregnantComponent,
    AppPregnantPatientsComponent,
    AppConsultPatientsComponent,
    AppInformationPatientComponent,
    AppTablePatientComponent,
    AppAccordionInfoPatientComponent
  ],
  imports: [
    AppPregnantPatientsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class AppPregnantPatientsModule { }
