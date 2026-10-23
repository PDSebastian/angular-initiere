import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-ex5a-char-count',
  templateUrl: './ex5a-char-count.html',
})
export class Ex5aCharCount {
  protected text= signal<string>('Salut!')
  remaining=computed<number>(()=> 50-this.text().length);
}
