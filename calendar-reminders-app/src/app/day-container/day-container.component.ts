import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalRemindersComponent } from '../modal-reminders/modal-reminders.component';
import * as moment from 'moment';

export interface DialogData {
  day: any;
}

@Component({
  selector: 'app-day-container',
  templateUrl: './day-container.component.html',
  styleUrls: ['./day-container.component.scss']
})
export class DayContainerComponent implements OnInit {

  @Input() day: any;
  @Input() header: boolean;
  month: string;
  dy: any = {};
  reminderCant: number;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.month = moment().format('MMMM');
    const date = new Date(this.day);
    const dd = {
      dayName: moment(date).format('dddd'),
      dayNumber: moment(date).format('D'),
      dayMonth: moment(date).format('MMMM'),
      dayDate: date,
      dayReminders: []
    };
    this.dy = dd;
    this.reminderCant = 0;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalRemindersComponent, {
      width: '500px',
      data: { day: this.dy }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('reminders:', result);
      if (result !== 'undefined') {
        this.dy.dayReminders = result;
      } else {
        this.dy.dayReminders = [];
      }
      this.reminderCant = (this.dy.dayReminders.length - 3) < 0 ? 0 : (this.dy.dayReminders.length - 3);
    });
  }

}
