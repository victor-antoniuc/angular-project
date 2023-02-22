import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/events.models';
import { EventsService } from 'src/app/services/events.service';


@Component({
  selector: 'app-add-event-page',
  templateUrl: './add-event-page.component.html',
  styleUrls: ['./add-event-page.component.css']
})
export class AddEventPageComponent {
  event: Event = new Event()

  constructor(private eventService: EventsService, private router : Router, private route: ActivatedRoute) {
    let eventId = route.snapshot.paramMap.get('id');

    if (eventId) {
      eventService.getById(eventId).subscribe((event: any) => {
        this.event = event;
      })
    }
  }

  submitEvent() {
    if (this.event.id) {
      this.eventService.updateEvent(this.event).subscribe(res => {
        this.router.navigate(['/']);
      });
    } else {
      this.eventService.createEvent(this.event).subscribe(res => {
        this.router.navigate(['/']);
      });
    }
  }
}
