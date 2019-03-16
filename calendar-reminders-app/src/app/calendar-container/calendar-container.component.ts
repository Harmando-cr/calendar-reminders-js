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
  months: any[];
  month: any;
  date: any;
  constructor() {
    this.months = [{ value: 0, text: 'January' }, { value: 1, text: 'February' }, { value: 2, text: 'March' }, { value: 3, text: 'April' }
      , { value: 4, text: 'May' }, { value: 5, text: 'June' }, { value: 6, text: 'July' }, { value: 7, text: 'August' }
      , { value: 8, text: 'September' }, { value: 9, text: 'October' }, { value: 10, text: 'November' }, { value: 11, text: 'December' }
    ];
  }

  ngOnInit() {

    const startWeek = moment().startOf('month').week();
    const endWeek = moment().endOf('month').week();

    for (let week = startWeek; week < endWeek+1; week++) {
      this.calendar[week] = Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'));
    }
    this.calendar = this.calendar.filter((el) =>  el != null );

  }

  initWithMonth(m){
    const year = parseInt(moment().format('YYYY'), 10);
    this.month = m.value;
    this.date = moment().year(year).month(this.month);
    console.log(this.date);
    this.calendar = [];

    const startWeek = moment(this.date).startOf('month').week();
    const endWeek = moment(this.date).endOf('month').week();

    for (let week = startWeek; week < endWeek + 1; week++) {
      this.calendar[week] = Array(7).fill(0).map((n, i) => moment(this.date).week(week).startOf('week').clone().add(n + i, 'day'));
    }
    this.calendar = this.calendar.filter((el) => el != null);

  }

}
