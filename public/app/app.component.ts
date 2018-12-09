import { Component } from '@angular/core';
import { PersonalInformation } from './personalInformation';
import { PersonalInformationService } from './personalInformation.service';

@Component({
  selector: 'my-app',
  template: `<h1>NodePersonalInformation</h1>
  <ul>
      <li *ngFor="let personalInformation of personalInformations">
      {{personalInformation.username}}, {{personalInformation.personalInformation}}, {{personalInformation.isDone}}
      </li>
    </ul>`,
  providers: [PersonalInformationService]
})
export class AppComponent {
  personalInformations: PersonalInformation[];
  constructor(private personalInformationService: PersonalInformationService) { }
  getPersonalInformations(): void {
    this.personalInformationService.getPersonalInformations().then(personalInformations => this.personalInformations = personalInformations);
  }
  ngOnInit(): void {
    this.getPersonalInformations();
  }
}
