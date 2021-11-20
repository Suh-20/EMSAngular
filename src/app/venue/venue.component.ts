import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VenueService } from '../venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  @Input()
  public venueDetails = { venueid:'',venuename: '', venueplace: '', contno: '' };
  constructor(private restApi: VenueService, public router: Router) {}

  ngOnInit(): void {}

  addVenue() {
    console.log(this.venueDetails);
    this.restApi
      .createVenue(this.venueDetails)
      .subscribe((data: {}) => this.router.navigate(['/venlist']));
  }
}
