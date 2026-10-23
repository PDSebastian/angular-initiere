import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4a-counter',
  templateUrl: './ex4a-counter.html',
})
export class Ex4aCounter {
  protected x: number = 0;
  increment(x: number) {
    this.x = x+1;
  }
  decrement(x: number) {
    this.x = x-1;
  }
  reset(x: number) {
    this.x = 0;
  }

  buttonIncrement(x: number) {
    this.increment(x);
  }
  buttonDecrement(x: number) {
    this.decrement(x);
  }
  buttonReset(x: number) {
    this.reset(x);
  }






}
