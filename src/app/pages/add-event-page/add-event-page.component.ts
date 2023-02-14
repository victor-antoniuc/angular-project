import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddEvent } from 'src/app/models/add-events.models';
import { EventsService } from 'src/app/services/events.service';


@Component({
  selector: 'app-add-event-page',
  templateUrl: './add-event-page.component.html',
  styleUrls: ['./add-event-page.component.css']
})
export class AddEventPageComponent {
  event: AddEvent = new AddEvent()

  constructor(private eventService: EventsService, private router : Router) {}

  createEvent(event: AddEvent) {
    this.eventService.createEvent(event).subscribe()

    this.router.navigate(['/admin'])
  }
}
