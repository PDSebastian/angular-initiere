import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-ex5a-char-count',
  templateUrl: './ex5a-char-count.html',
})
export class Ex5aCharCount {
  text = signal<string>('');
  remaining = computed<number>(() => 50 - this.text().length);

  updateText(value: string): void {
    this.text.set(value);
  }
}
