import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-restaurants-list',
  template: `

   <div class="res-box" *ngFor="let restaurant of restaurants"
    [routerLink]="['/restaurant',restaurant.id]"
   [ngStyle]="{'background-image': 'url(' + restaurant.img + ')'}">
     {{restaurant.name}}
   </div>

  `,
  styles: [
    `.res-box{
      height: 200px;
    }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class RestaurantsListComponent implements OnInit {
  list: Object;

  constructor(private http: HttpClient) { }

  restaurants
  restaurant

  fetchRestaurants(){
    this.http.get('http://localhost:3000/restaurants')
      .subscribe( restaurants => {
        this.restaurants = restaurants
      })
  }

  ngOnInit() {

    this.fetchRestaurants()

  }

}
