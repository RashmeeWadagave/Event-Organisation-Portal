import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  events:any[];
  constructor(private _eventService: EventService) {
    this.events=[];
   }

  ngOnInit() 
  {
    this._eventService.getEvents()
     .subscribe(
        res => this.events = res,
        err => console.log(err)
      )
    console.log("events are:",this.events);
  }
  

}