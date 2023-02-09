import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../models/events.models';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events: Event[] = []

  constructor(private eventService: EventsService, private router: Router) {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAll().subscribe(events => {
        this.events = events
    })
  }
}
