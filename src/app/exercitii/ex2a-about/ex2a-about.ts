import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2a-about',
  templateUrl: './ex2a-about.html',
})
export class Ex2aAbout {
  firstName: string = 'Ion';
  lastName: string = 'Popescu';
  birthYear: number = 2005;

  ageIn(year: number): number {
    return year - this.birthYear;
  }
}
