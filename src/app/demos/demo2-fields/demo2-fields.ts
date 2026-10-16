import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2-fields',
  templateUrl: './demo2-fields.html',
})
export class Demo2Fields {
  protected readonly name: string = 'Ana';
  protected readonly age: number = 20;
  protected readonly isStudent: boolean = true;

  protected greet(person: string): string {
    return 'Salut, ' + person + '!';
  }
}
