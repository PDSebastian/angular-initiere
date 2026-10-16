import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-demo5-input',
  templateUrl: './demo5-input.html',
})
export class Demo5Input {
  protected readonly name = signal<string>('');
}
