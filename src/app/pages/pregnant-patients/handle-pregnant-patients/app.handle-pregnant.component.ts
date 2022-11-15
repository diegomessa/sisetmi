import { PregnantPatientsService } from './../../../services/pregnant-patients/pregnant-patients.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-handle-pregnant',
  templateUrl: './app.handle-pregnant.component.html',
  styleUrls: ['./app.handle-pregnant.component.scss']
})
export class AppHandlePregnantComponent implements OnInit {

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
