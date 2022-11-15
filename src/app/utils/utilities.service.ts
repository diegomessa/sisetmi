import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class UtilitiesService {

  public formToDto = function (form, entity) {
    if (!!form && !!entity) {

    }

    return entity;
  };

}
