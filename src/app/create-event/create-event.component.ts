import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  @Input()
  public eventDetails = { emname: '', eid: '', etype: '', eamt: '' };
  constructor(private restApi: EventService, public router: Router) {}

  ngOnInit(): void {}

  addEvent() {
    console.log(this.eventDetails);
    this.restApi
      .createEvent(this.eventDetails)
      .subscribe((data: {}) => this.router.navigate(['/evelist']));
  }
}
