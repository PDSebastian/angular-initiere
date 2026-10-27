import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ex6b-secret',
  templateUrl: './ex6b-secret.html',
})
export class Ex6bSecret {
  visible = signal<boolean>(false);

  toggle(): void {
    this.visible.update((value) => !value);
  }
}
