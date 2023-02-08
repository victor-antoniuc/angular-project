import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Event } from "../models/events.models";


@Injectable({
    providedIn: 'root'
})
export class EventService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<Event[]> {
        return this.http.get<Event[]>('http://localhost:8080/events');
    }
}