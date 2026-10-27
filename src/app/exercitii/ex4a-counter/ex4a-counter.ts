import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ex4a-counter',
  templateUrl: './ex4a-counter.html',
})
export class Ex4aCounter {

  count=signal<number>(0);
  increment():void{
    this.count.update(value => value + 1);
  }
  decrement():void{
    if(this.count()>0)
    this.count.update(value => value - 1);
  }
  reset(){
    this.count=signal<number>(0);
  }



}
