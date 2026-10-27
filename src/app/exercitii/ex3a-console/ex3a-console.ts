import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3a-console',
  templateUrl: './ex3a-console.html',
})
export class Ex3aConsole {

  sayHello(): void {
    console.log('Salut sunt din Angular');
  }
  showTime(): void {
    console.log(new Date().toLocaleTimeString());
  }


}
