import { Injectable } from '@angular/core';
import { ApiManagerService } from '../api/api.manager.service';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PregnantPatientsService {

  constructor(
    private _api: ApiManagerService,
  ) { }

  /**
   * 
   * @param payload 
   * @returns 
   */
  postSaveReqInfo(payload) {
    const endpoint = environment.pregnant;

    return this._api.post(endpoint, payload)
  }

}
