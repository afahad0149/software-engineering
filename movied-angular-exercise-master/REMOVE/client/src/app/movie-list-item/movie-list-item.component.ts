import { Component, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss']
})
export class MovieListItemComponent {
  @Input() movie: Movie;

  movieURL() {
    return `/movies/${this.movie.id}`;
  }
}
