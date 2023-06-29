import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  visit: any = {};
  pastVisits: any[] = [];

  registerVisit() {
    this.pastVisits.push({ ...this.visit });
    this.resetForm();
  }

  deleteVisit(visit: any) {
    const index = this.pastVisits.indexOf(visit);
    if (index !== -1) {
      this.pastVisits.splice(index, 1);
    }
  }

  resetForm() {
    this.visit = {};
  }

}
