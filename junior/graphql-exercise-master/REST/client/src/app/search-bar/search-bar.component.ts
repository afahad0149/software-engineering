import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  value: string = '';

  constructor(private router: Router) { }

  onKey(event: any) {
    this.value = event.target.value;
    if (this.value.length < 2) {
      this.router.navigate(['']);
    } else {
      this.router.navigate([`/search`], { queryParams: { pokeName: this.value } });
    }
  }

}
