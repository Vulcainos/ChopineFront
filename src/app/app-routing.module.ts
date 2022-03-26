import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleEventComponent } from './single-event/single-event.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'events', component: EventListComponent },
    { path: 'events/:id', component: SingleEventComponent }
  ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})export class AppRoutingModule {}