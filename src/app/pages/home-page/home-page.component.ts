import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private eventService: EventsService, private router: Router) {}

  events: any

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
