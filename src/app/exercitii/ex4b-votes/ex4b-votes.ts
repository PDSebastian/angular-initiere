import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-ex4b-votes',
  templateUrl: './ex4b-votes.html',
})
export class Ex4bVotes {
  likes = signal<number>(0);
  dislikes = signal<number>(0);
  score = computed<number>(() => this.likes() - this.dislikes());

  like(): void {
    this.likes.update((value) => value + 1);
  }

  dislike(): void {
    this.dislikes.update((value) => value + 1);
  }
}
