import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3a-console',
  templateUrl: './ex3a-console.html',
})
export class Ex3aConsole {
  sayHello(){
     console.log('Salut sunt din Angular!');
  }
  showTime(){
     console.log("Ora este:")
     console.log(new Date().toLocaleTimeString());

  }
  SpuneSalut(){
    this.sayHello();

  }
  SpuneOra(){
    this.showTime();
  }



}
