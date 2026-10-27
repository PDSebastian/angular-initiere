import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-ex5b-full-name',
  templateUrl: './ex5b-full-name.html',
})
export class Ex5bFullName {
  firstName = signal<string>('Ion');
  lastName = signal<string>('Popescu');

  fullName = computed<string>(() => `${this.firstName()} ${this.lastName()}`);
  initials = computed<string>(() =>
    `${this.firstName().charAt(0)}${this.lastName().charAt(0)}`.toUpperCase(),
  );

  updateFirstName(value: string): void {
    this.firstName.set(value);
  }

  updateLastName(value: string): void {
    this.lastName.set(value);
  }
}
