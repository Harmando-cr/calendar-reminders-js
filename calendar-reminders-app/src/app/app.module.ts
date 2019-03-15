import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarContainerComponent } from './calendar-container/calendar-container.component';
import { DayContainerComponent } from './day-container/day-container.component';
import { WeekContainerComponent } from './week-container/week-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalRemindersComponent } from './modal-reminders/modal-reminders.component';
import { MaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    CalendarContainerComponent,
    DayContainerComponent,
    WeekContainerComponent,
    ModalRemindersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [DayContainerComponent, ModalRemindersComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
