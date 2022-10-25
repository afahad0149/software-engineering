import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from './movie';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private baseURL = 'http://movied.herokuapp.com';

  constructor(private http: HttpClient) { }

  getDiscoverMovies(): Observable<Movie[]> {
    return this.fetchMovies('/discover');
  }

  getCategoryMovies(categoryId: number): Observable<Movie[]> {
    return this.fetchMovies(`/categories/${categoryId}`);
  }

  searchMovies(title: string): Observable<Movie[]> {
    return this.fetchMovies(`/search?q=${title}`);
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get(`${this.baseURL}/movie/${id}`)
      .pipe(map(movie => Movie.parse(movie)));
  }

  fetchCategories(): Observable<Category[]> {
    return this.http.get(`${this.baseURL}/categories`)
      .pipe(map((categories: object[]) => categories.map(category => Category.parse(category))));
  }

  fetchMovies(url: string): Observable<Movie[]> {
    return this.http.get(`${this.baseURL}${url}`)
      .pipe(map((movies: object[]) => movies.map(movie => Movie.parse(movie))));
  }
}
