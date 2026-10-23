import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2a-about',
  templateUrl: './ex2a-about.html',
})
export class Ex2aAbout {
  firstname: string = 'Pop-Dragut';
  lastname: string = 'Sebastian';
  birthYear: number = 2006;

  ageIn(year: number): number {
    return year - this.birthYear;
  }
}

