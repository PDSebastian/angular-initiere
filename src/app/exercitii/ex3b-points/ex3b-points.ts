import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3b-points',
  templateUrl: './ex3b-points.html',
})
export class Ex3bPoints {
  protected points: number = 0;



  increment(points: number) {
    this.points = points+1;
  }
  decrement(points: number) {
    this.points = points+-1;
  }
  incremetLater(points: number) {
    setTimeout(() => {
      this.points = points + 2;
      console.log('points =', this.points);
    });
  }
  buttonIncrement(points: number) {
    this.increment(points)
  }
  buttonDecrement(points: number) {
    this.decrement(points)
  }
  buttonIncrementaLater(points: number) {
    this.incremetLater(points);
  }




}
