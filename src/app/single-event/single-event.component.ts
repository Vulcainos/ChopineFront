import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../models/event.model';
import { EventsService } from '../services/event.service';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.scss']
})
export class SingleEventComponent implements OnInit {
  @Input() event!: Event;
  buttonText!: string;

  constructor(private eventsService: EventsService, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    const eventId = +this.route.snapshot.params['id'];
    this.event = this.eventsService.getEventById(eventId);
    this.buttonText = "Oh Snap!"
  }

  public onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.eventsService.snapEventById(this.event.id, "snap");
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.eventsService.snapEventById(this.event.id, "unsnap");
      this.buttonText = 'Oh Snap!';
    }
  }
}
