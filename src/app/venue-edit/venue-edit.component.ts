import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Venue } from '../Venue';
import { VenueService } from '../venue.service';

@Component({
  selector: 'app-venue-edit',
  templateUrl: './venue-edit.component.html',
  styleUrls: ['./venue-edit.component.css'],
})
export class VenueEditComponent implements OnInit {
  public venueData: any = {};

  public venueid: any = this.aroute.snapshot.params['venid'];

  public selectedId: any;
  constructor(
    private restApi: VenueService,
    private router: Router,
    private aroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('from ng onint ' + this.venueid + this.selectedId);
    this.restApi.getVenue(this.venueid).subscribe((data) => {
      this.venueData = data;
    });

    // this.aroute.paramMap.subscribe((params) => {
    // this.selectedId = params.get('id');
    //});
    console.log('from ng oninit ' + this.venueid + this.selectedId);
  }
  updateVenue() {
    console.log('venue data ---' + this.venueData);
    this.restApi
      .updateVenue(this.venueData)
      .subscribe((data: {}) => this.router.navigate(['/venlist']));
  }

  goToVenues() {
    this.router.navigate(['/venlist']);
  }
}
