import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {
  public events = [] as any;
  constructor(private eservice :EventService){}
ngOnInit():void{
    this.eservice.getEventFromService().subscribe(data=> this.events=data); 
    //function parameter assigned to array
}
}