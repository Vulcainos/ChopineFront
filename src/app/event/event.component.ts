import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../models/event.model';
import { EventsService } from '../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event!: Event;
  buttonText!: string;

  constructor(private eventsService: EventsService,private router: Router) {}

  public ngOnInit(): void {
    this.buttonText = "Oh Snap!"
  }

  onViewEvent() {
    this.router.navigateByUrl(`events/${this.event.id}`);
}

}
