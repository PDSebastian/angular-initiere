import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-ex4b-votes',
  templateUrl: './ex4b-votes.html',
})
export class Ex4bVotes {
  protected likes = signal<number>(5);
  protected dislikes = signal<number>(1);

  protected score = computed<number>(() => this.likes() - this.dislikes());

  like() {
    this.likes.update((value) => value + 1);
  }
  dislike() {
    this.likes.update((value) => value - 3);
  }
}
