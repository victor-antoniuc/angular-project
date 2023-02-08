import { Component, OnInit } from '@angular/core';
import { Event } from '../models/events.models';
import { EventService } from '../services/events.services';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[] = []

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getAll().subscribe(events => {
        this.events = events
    })
  }
}
