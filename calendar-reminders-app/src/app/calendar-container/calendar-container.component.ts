import { Component, OnInit } from '@angular/core';
import { Day } from '../day';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.scss']
})
export class CalendarContainerComponent implements OnInit {

  calendar: any[] = [];

  constructor() { }

  ngOnInit() {

    const startWeek = moment().startOf('month').week();
    const endWeek = moment().endOf('month').week();
    const days = [];


    // const calendar = [];
    for (let week = startWeek; week < endWeek+1; week++) {
      console.log(startWeek, week, endWeek);
      this.calendar[week] = Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'));
      this.calendar[week].forEach(element => {
        days.push(element.format('LLLL'));
      });
    }
    this.calendar = this.calendar.filter((el) =>  el != null );

  }

}
