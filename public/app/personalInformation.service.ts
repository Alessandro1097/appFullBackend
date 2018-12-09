import { PersonalInformation } from './personalInformation';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonalInformationService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private personalInformationsApiUrl = '/api/personalInformation/Andrea';

  constructor(private http: Http) { }

  getPersonalInformations(): Promise<PersonalInformation[]> {
    return this.http.get(this.personalInformationsApiUrl)
      .toPromise()
      .then(response => response.json() as PersonalInformation[]);
  }
}
