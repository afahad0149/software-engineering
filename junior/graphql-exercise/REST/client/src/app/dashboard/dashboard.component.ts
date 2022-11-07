import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  selectedView: string = 'All pokemon';
  
  tabs = [
    { name: "All pokemon", active: true }, 
    { name: 'wishlist', active: false}
  ];

  constructor() { }

  selectTab (name: string) {
    this.selectedView = name;
    this.tabs.forEach(tab => tab.active = tab.name === name);
  }
}
