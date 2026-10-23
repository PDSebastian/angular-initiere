import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ex5b-full-name',
  templateUrl: './ex5b-full-name.html',
})
export class Ex5bFullName {
  firstName=signal<string>('Salut!');




}
