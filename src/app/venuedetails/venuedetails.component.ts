import { Component, OnInit } from '@angular/core';
import { VenueService } from '../venue.service';


@Component({
  selector: 'app-venuedetails',
  templateUrl: './venuedetails.component.html',
  styleUrls: ['./venuedetails.component.css']
})
export class VenuedetailsComponent implements OnInit {
  public venues = [] as any;
  constructor(private vservice: VenueService) {}

  ngOnInit(): void {
    this.vservice
      .getVenueFromService()
      .subscribe((data) => (this.venues = data));
  }

}
