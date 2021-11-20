import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../Event';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css'],
})
export class EventlistComponent implements OnInit {
  public events = [] as any;
  public selectedId: number = 0;
  constructor(private eservice: EventService, private router: Router) {}

  ngOnInit(): void {
    this.eservice
      .getEventFromService()
      .subscribe((data) => (this.events = data));
  }

  onDelete(eve: Event) {
    this.selectedId = eve.eid;
    console.log(this.selectedId);
    if (window.confirm('Are your sure, you want to delete?')) {
      this.eservice.deleteEvent(this.selectedId).subscribe((data) => {
        this.router.navigate(['/evelist']);
      });
    }
  }
}
