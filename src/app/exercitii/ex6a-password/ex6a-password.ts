import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ex6a-password',
  templateUrl: './ex6a-password.html',
})
export class Ex6aPassword {
  password=signal<string>('')

  updatePassword(value:string){
    this.password.set(value);
  }


}
