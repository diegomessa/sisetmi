import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppPregnantPatientsRoutingModule } from './app-pregnant-patients.routing.module';
import { AppPregnantPatientsComponent } from './app.pregnant-patients.component';
import { AppHandlePregnantComponent } from './handle-pregnant-patients/app.handle-pregnant.component';
import { AppSharedPregnantModule } from './shared/app.shared-pregnant.module';



@NgModule({
  declarations: [
    AppHandlePregnantComponent,
    AppPregnantPatientsComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppPregnantPatientsRoutingModule,
    AppSharedPregnantModule
  ],
  providers: [],
})
export class AppPregnantPatientsModule { }
