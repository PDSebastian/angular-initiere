import { Component } from '@angular/core';

@Component({
  selector: 'app-demo3-click',
  templateUrl: './demo3-click.html',
})
export class Demo3Click {
  protected x: number = 0;

  protected increment(): void {
    this.x = this.x + 1;
  }

  protected incrementLater(): void {
    setTimeout(() => {
      this.x = this.x + 1;
      console.log('x =', this.x);
    }, 2000);
  }
}
