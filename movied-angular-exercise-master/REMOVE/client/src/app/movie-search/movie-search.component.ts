import { Component } from '@angular/core';
import { Movie } from '../movie';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
  searchMovies: Movie[] = [];

  constructor(private client: ApiClientService) {}

  onKey(event: KeyboardEvent) {
    const path = (event.target as HTMLInputElement).value;
    if (path) {
      this.client.searchMovies(path).subscribe((movies) => this.searchMovies = movies);
    } else {
      this.searchMovies = [];
    }
  }
}
