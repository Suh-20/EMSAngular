import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VenueService } from '../venue.service';
import { Venue } from '../Venue';

@Component({
  selector: 'app-venuelist',
  templateUrl: './venuelist.component.html',
  styleUrls: ['./venuelist.component.css'],
})
export class VenuelistComponent implements OnInit {
  public venues = [] as any;
  public selectedId: number = 0;
  constructor(private eservice: VenueService, private router: Router) {}

  ngOnInit(): void 
  {
    this.eservice
      .getVenueFromService()
      .subscribe((data) => (this.venues = data));
  }

  onDelete(ven: Venue) {
    this.selectedId = ven.venueid;
    console.log(this.selectedId);
    if (window.confirm('Are your sure, you want to delete?')) {
      this.eservice.deleteVenue(this.selectedId).subscribe((data) => {
        this.router.navigate(['/venlist']);
      });
    }
  }
}
