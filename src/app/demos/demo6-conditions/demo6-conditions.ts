import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-demo6-conditions',
  templateUrl: './demo6-conditions.html',
})
export class Demo6Conditions {
  protected readonly age = signal<number>(0);
}
