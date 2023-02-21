import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Event } from "../models/events.models";


@Injectable({
    providedIn: 'root'
})
export class EventsService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<Event[]> {
        return this.http.get<Event[]>('http://localhost:8080/events');
    }

    getById(id: any) {
        return this.http.get(`http://localhost:8080/events/${id}`);
    }

    deleteAll() {
        return this.http.delete("http://localhost:8080/events/delete", {responseType: 'text'})
    }

    deleteEvent(id: number) {
        return this.http.delete(`http://localhost:8080/events/delete/${id}`, {responseType: 'text'})
    
    }

    createEvent(event: Event) {
        return this.http.post(
          'http://localhost:8080/events/add',
          event
        )
    }

    updateEvent(event: Event) {
        return this.http.put(
          `http://localhost:8080/events/update/${event.id}`,
          event
        )
    }
}