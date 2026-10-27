import { Component, signal } from '@angular/core';

interface Movie {
  id: number;
  title: string;
  year: number;
}

@Component({
  selector: 'app-ex7b-delete',
  templateUrl: './ex7b-delete.html',
})
export class Ex7bDelete {
  movies = signal<Movie[]>([
    { id: 1, title: 'Inception', year: 2010 },
    { id: 2, title: 'Interstellar', year: 2014 },
    { id: 3, title: 'The Matrix', year: 1999 },
    { id: 4, title: 'Avatar', year: 2009 },
  ]);

  remove(id: number): void {
    const listaCurenta = this.movies();
    const listaNoua = listaCurenta.filter((movie) => movie.id !== id);
    this.movies.set(listaNoua);
  }
}
