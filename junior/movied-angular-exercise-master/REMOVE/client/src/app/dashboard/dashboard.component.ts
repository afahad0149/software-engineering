import { Component, OnInit } from '@angular/core';

import { Category } from '../category';
import { ApiClientService } from '../api-client.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  discoverMovies: Movie[] = [];
  categoryMovies: Movie[] = [];
  selectedCategory: Category;
  categories: Category[] = [];

  constructor(private client: ApiClientService) { }

  ngOnInit() {
    this.client.getDiscoverMovies()
      .subscribe(movies => this.discoverMovies = movies);
    this.client.fetchCategories()
      .subscribe(categories => {
        this.categories = categories;
        this.selectedCategory = categories[0];
        this.getCategoryMovies();
      });
  }

  getCategoryMovies() {
    this.client.getCategoryMovies(this.selectedCategory.id)
      .subscribe(movies => this.categoryMovies = movies);
  }

}
