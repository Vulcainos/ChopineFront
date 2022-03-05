import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event!: Event;
  buttonText!: string;

  ngOnInit(): void {
    this.buttonText = "Oh Snap!"
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.event.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.event.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }


}
