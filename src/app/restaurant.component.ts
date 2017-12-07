import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  template: `
    <p>
      restaurant works
    </p>
    <div *ngIf="restaurant">

    <!-- <res-box [data]="restaurant"></res-box> -->
    
    <div class="res-box" 
      [ngStyle]="{'background-image': 'url(' + restaurant.img + ')'}">
      {{restaurant.name}}
    </div>

    </div>

  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class RestaurantComponent implements OnInit {

  constructor(private http: HttpClient,
            private route:ActivatedRoute) { }

  restaurant

  fetchRestaurants(){
    let id = this.route.snapshot.paramMap.get('id')
    this.http.get('http://localhost:3000/restaurants/' + id )
      .subscribe( restaurant => {
        this.restaurant = restaurant
      })
  }

  ngOnInit() {

    this.fetchRestaurants()

  }


}
