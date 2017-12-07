import { ActivatedRoute, Router } from '@angular/router';
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

    <div>
    Available:  
      <span *ngFor="let spot of available">
        <button (click)="startReservation(spot)">{{spot.hours}}</button>
      </span>
    </div>

    </div>

  `,
  styles: [`
  .res-box{
      height: 200px;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class RestaurantComponent implements OnInit {

  constructor(private http: HttpClient,
            private router: Router,
            private route:ActivatedRoute) { }

  available = [
    { hours: '1700', reservation: null},
    { hours: '1730', reservation: null},
    { hours: '1800', reservation: null},
    { hours: '1830', reservation: null},
    { hours: '1900', reservation: null},
  ]

  startReservation(spot){
    this.router.navigate(['/reservation'],{
      queryParams:{
        hours: spot.hours,
        reservationId: spot.reservation && spot.reservation.id
      }
    })
  }

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
