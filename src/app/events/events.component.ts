import { Component, OnInit } from '@angular/core';
import { Event } from '../models/events.models';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[] = []

  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.eventService.getAll().subscribe(events => {
        this.events = events
    })
  }
}
