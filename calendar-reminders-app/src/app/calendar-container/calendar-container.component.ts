import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.scss']
})
export class CalendarContainerComponent implements OnInit {

  header: string[] = ['Sunday', 'Monday' , 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday']
  calendar: any[] = [];

  constructor() { }

  ngOnInit() {

    const startWeek = moment().startOf('month').week();
    const endWeek = moment().endOf('month').week();

    for (let week = startWeek; week < endWeek+1; week++) {
      this.calendar[week] = Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'));
    }
    this.calendar = this.calendar.filter((el) =>  el != null );

  }

}
