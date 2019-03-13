import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarContainerComponent } from './calendar-container/calendar-container.component';
import { DayContainerComponent } from './day-container/day-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarContainerComponent,
    DayContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
