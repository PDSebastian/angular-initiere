import { Component } from '@angular/core';

interface Movie {
  id: number;
  title: string;
  year: number;
}

@Component({
  selector: 'app-ex7a-movies',
  templateUrl: './ex7a-movies.html',
})
export class Ex7aMovies {
  movies: Movie[] = [
    { id: 1, title: 'Inception', year: 2010 },
    { id: 2, title: 'Interstellar', year: 2014 },
    { id: 3, title: 'The Matrix', year: 1999 },
    { id: 4, title: 'Avatar', year: 2009 },
  ];
}
