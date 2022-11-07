import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  rating: number;

  constructor(
    private route: ActivatedRoute,
    private client: ApiClientService
  ) { }

  ngOnInit() {
    this.getMovieDetails();
  }

  getMovieDetails() {
    this.route.params.forEach((params: Params) => {
      const movieId = +params.movieId;
      this.client.getMovie(movieId)
        .subscribe(movie => {
          this.movie = movie;
          this.rating = Math.round(movie.vote_average / 2);
        });
    });
  }
}
