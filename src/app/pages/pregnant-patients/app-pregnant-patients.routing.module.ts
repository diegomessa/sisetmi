import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppPregnantPatientsComponent } from './app.pregnant-patients.component';
import { PREGNANT_PATH } from './app.pregnant-patients.routing.name';
import { AppHandlePregnantComponent } from './handle-pregnant-patients/app.handle-pregnant.component';


const routes: Routes = [
  { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
  {
    path: '',
    component: AppPregnantPatientsComponent,
    // canActivateChild: [AuthGuardService],
    children: [
      {
        path: PREGNANT_PATH.reviewRequest.value,
        component: AppHandlePregnantComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppPregnantPatientsRoutingModule { }
