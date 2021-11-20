import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../Event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-eventedit',
  templateUrl: './eventedit.component.html',
  styleUrls: ['./eventedit.component.css'],
})
export class EventEditComponent implements OnInit {
  public eventData: any = {};

  public eid: any = this.aroute.snapshot.params['eid'];

  public selectedId: any;
  constructor(
    private restApi: EventService,
    private router: Router,
    private aroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('from ng onint ' + this.eid + this.selectedId);
    this.restApi.getEvent(this.eid).subscribe((data) => {
      this.eventData = data;
    });

    //this.aroute.paramMap.subscribe((params) => {
     // this.selectedId = params.get('id');
    //});
    console.log('from ng oninit ' + this.eid + this.selectedId);
  }
  updateEvent() {
    console.log('event data ---' + this.eventData);
    this.restApi
      .updateEvent(this.eventData)
      .subscribe((data: {}) => this.router.navigate(['/evelist']));
  }

  goToEvents() {
    this.router.navigate(['/evelist']);
  }
}
