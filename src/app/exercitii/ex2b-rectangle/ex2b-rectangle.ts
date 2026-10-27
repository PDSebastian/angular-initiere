import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2b-rectangle',
  templateUrl: './ex2b-rectangle.html',
})
export class Ex2bRectangle {
  width: number = 5;
  height: number = 3;

  area(w: number, h: number): number {
    return w * h;
  }

  perimeter(w: number, h: number): number {
    return 2 * (w + h);
  }
}
