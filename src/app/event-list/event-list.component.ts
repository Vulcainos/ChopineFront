import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event.model';
import { EventsService } from '../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events!: Event[];
  constructor(private eventsService: EventsService) { }

  public ngOnInit() {
    this.events = this.eventsService.getAllFaceSnaps();
  }

}
