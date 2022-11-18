import { Component, OnInit } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PregnantPatientsService } from './../../../../../services/pregnant-patients/pregnant-patients.service';


@Component({
  selector: 'app-consult-patients',
  templateUrl: './app.consult-patients.component.html',
  styleUrls: ['./app.consult-patients.component.scss']
})
export class AppConsultPatientsComponent implements OnInit {

  private stopSubcription$ = new Subject<void>();


  constructor(
    private pregnantSrv: PregnantPatientsService
  ) { }


  ngOnInit(): void {
  }


  getDataPacient() {
    // this.pregnantSrv.getInfoPerson(payload, 'FILTER_VEHICLE')
    //   .pipe(takeUntil(this.stopSubcription$))
    //   .subscribe((resp: any) => {
    //     if (resp.statusResponse.status == 200) {
    //       localStorage.setItem('handler', JSON.stringify(resp.generalData));
    //     }
    //   });
  }
}
