import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3b-points',
  templateUrl: './ex3b-points.html',
})
export class Ex3bPoints {
  points:number=10;
  increment(){
    this.points++;
  }
  decrement(){
    this.points--;
  }
  incrementAfterDelay(): void {
    setTimeout(() => {
      this.points++;
      console.log(this.points);
    },2000)
  }

}
