import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-demo7-lists',
  templateUrl: './demo7-lists.html',
})
export class Demo7Lists {
  protected readonly users: User[] = [
    { id: 1, name: 'Ana', age: 20 },
    { id: 2, name: 'Radu', age: 17 },
    { id: 3, name: 'Maria', age: 34 },
  ];
}
