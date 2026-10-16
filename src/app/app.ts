import { NgComponentOutlet } from '@angular/common';
import { Component, Type, signal } from '@angular/core';
import { Demo1Template } from './demos/demo1-template/demo1-template';
import { Demo2Fields } from './demos/demo2-fields/demo2-fields';
import { Demo3Click } from './demos/demo3-click/demo3-click';
import { Demo4Signal } from './demos/demo4-signal/demo4-signal';
import { Demo5Input } from './demos/demo5-input/demo5-input';
import { Demo6Conditions } from './demos/demo6-conditions/demo6-conditions';
import { Demo7Lists } from './demos/demo7-lists/demo7-lists';
import { Ex1aProfile } from './exercitii/ex1a-profile/ex1a-profile';
import { Ex1bCard } from './exercitii/ex1b-card/ex1b-card';
import { Ex2aAbout } from './exercitii/ex2a-about/ex2a-about';
import { Ex2bRectangle } from './exercitii/ex2b-rectangle/ex2b-rectangle';
import { Ex3aConsole } from './exercitii/ex3a-console/ex3a-console';
import { Ex3bPoints } from './exercitii/ex3b-points/ex3b-points';
import { Ex4aCounter } from './exercitii/ex4a-counter/ex4a-counter';
import { Ex4bVotes } from './exercitii/ex4b-votes/ex4b-votes';
import { Ex5aCharCount } from './exercitii/ex5a-char-count/ex5a-char-count';
import { Ex5bFullName } from './exercitii/ex5b-full-name/ex5b-full-name';
import { Ex6aPassword } from './exercitii/ex6a-password/ex6a-password';
import { Ex6bSecret } from './exercitii/ex6b-secret/ex6b-secret';
import { Ex7aMovies } from './exercitii/ex7a-movies/ex7a-movies';
import { Ex7bDelete } from './exercitii/ex7b-delete/ex7b-delete';

interface Page {
  title: string;
  component: Type<unknown>;
}

@Component({
  selector: 'app-root',
  imports: [NgComponentOutlet],
  templateUrl: './app.html',
})
export class App {
  protected readonly demos: Page[] = [
    { title: '1. Componentă + template', component: Demo1Template },
    { title: '2. Câmpuri cu tip', component: Demo2Fields },
    { title: '3. (click)', component: Demo3Click },
    { title: '4. signal', component: Demo4Signal },
    { title: '5. Input', component: Demo5Input },
    { title: '6. @if', component: Demo6Conditions },
    { title: '7. @for', component: Demo7Lists },
  ];

  protected readonly exercises: Page[] = [
    { title: '1a. Profil', component: Ex1aProfile },
    { title: '1b. Carte de vizită', component: Ex1bCard },
    { title: '2a. Despre mine', component: Ex2aAbout },
    { title: '2b. Dreptunghi', component: Ex2bRectangle },
    { title: '3a. Butoane în consolă', component: Ex3aConsole },
    { title: '3b. Puncte', component: Ex3bPoints },
    { title: '4a. Contor', component: Ex4aCounter },
    { title: '4b. Voturi', component: Ex4bVotes },
    { title: '5a. Numără caractere', component: Ex5aCharCount },
    { title: '5b. Nume complet', component: Ex5bFullName },
    { title: '6a. Parolă', component: Ex6aPassword },
    { title: '6b. Mesaj secret', component: Ex6bSecret },
    { title: '7a. Filme', component: Ex7aMovies },
    { title: '7b. Șterge filme', component: Ex7bDelete },
  ];

  protected readonly selected = signal<Page>(this.demos[0]);
}
