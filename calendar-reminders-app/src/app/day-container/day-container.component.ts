import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-day-container',
  templateUrl: './day-container.component.html',
  styleUrls: ['./day-container.component.scss']
})
export class DayContainerComponent implements OnInit {

  @Input() day: any;
  @Input() header: boolean;
  month: string;
  dy: {};
  constructor() {
  }

  ngOnInit() {
    this.month = moment().format('MMMM');
    const date = new Date(this.day);
    let dd = {
      dayName: moment(date).format('dddd'),
      dayNumber: moment(date).format('D'),
      dayMonth: moment(date).format('MMMM'),
    }
    this.dy = dd;
    // this.dy.dayName = moment(date).format('dddd');
    console.log(this.dy);

  }

}
