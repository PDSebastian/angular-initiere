import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-demo4-signal',
  templateUrl: './demo4-signal.html',
})
export class Demo4Signal {
  protected readonly x = signal<number>(0);
  protected readonly double = computed<number>(() => this.x() * 2);

  protected increment(): void {
    this.x.update((value) => value + 1);
  }

  protected incrementLater(): void {
    setTimeout(() => this.increment(), 2000);
  }

  protected reset(): void {
    this.x.set(0);
  }
}
