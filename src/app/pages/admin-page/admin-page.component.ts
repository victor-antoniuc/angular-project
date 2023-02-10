import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../models/events.models';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  events: Event[] = []

  constructor(private eventService: EventsService, private router: Router) {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAll().subscribe(events => {
        this.events = events
    })
  }

  deleteEvent (id: number) {
    this.eventService.deleteEvent(id).subscribe()
  }
}
