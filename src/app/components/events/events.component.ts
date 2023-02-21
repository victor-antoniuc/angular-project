import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  constructor(private eventService: EventsService, private router: Router) {
    this.loadEvents();
  }

  events: any;

  loadEvents() {
    this.eventService.getAll().subscribe(events => {
        this.events = events
    })
  }

  deleteAllEvents () {
    if(confirm("Are you sure to delete all events ?")) {
      this.eventService.deleteAll().subscribe(events => {
        this.loadEvents()
      })
    }
  }

  deleteEvent (id: number) {
    if(confirm("Are you sure to delete ?")) {
      this.eventService.deleteEvent(id).subscribe(res => {
        this.loadEvents();
      }) 
    }
  }
}
