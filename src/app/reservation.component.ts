import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'reservation',
  template: `
    <p>
      reservation works!
    </p>
    Hours: {{hours}}
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ReservationComponent implements OnInit {

  constructor(private http: HttpClient,
            private route:ActivatedRoute) { }

  hours

  ngOnInit() {
    this.hours = this.route.snapshot.queryParamMap.get('hours')
    let reservationId = this.route.snapshot.queryParamMap.get('reservationId')
  }

}
