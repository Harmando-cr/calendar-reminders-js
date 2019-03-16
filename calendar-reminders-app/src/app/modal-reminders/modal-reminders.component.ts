import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../day-container/day-container.component';
import { AmazingTimePickerService } from 'amazing-time-picker';

import * as moment from 'moment';
import { log } from 'util';

@Component({
  selector: 'app-modal-reminders',
  templateUrl: './modal-reminders.component.html',
  styleUrls: ['./modal-reminders.component.scss']
})
export class ModalRemindersComponent implements OnInit {
  date: string;
  type: string;
  reminders: any[];
  reminder: any;

  constructor(
    private atp: AmazingTimePickerService,
    public dialogRef: MatDialogRef<ModalRemindersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
    this.date = moment(data.day.dayDate).format('dddd, MMMM D');
    this.type = 'show';
    this.reminders = data.day.dayReminders;

    this.reminder = {
      text: '',
      color: '',
      time: '',
    };
  }

  ngOnInit() {
  }

  typeAdd(){
    this.type = 'add';
    this.reminder = {
      text: '',
      color: '',
      time: '',
    };
  }

  addReminder() {
    this.reminders.push(this.reminder);
    this.reminders.sort((a, b) => {
      if (a.time > b.time) {
        return 1;
      }
      if (a.time < b.time) {
        return -1;
      }
      return 0;
    });
    this.type = 'show';
  }

  editReminder(rem) {
    this.reminder = rem;
    this.type = 'edit';
  }

  saveReminder(rem) {
    const index = this.reminders.indexOf(this.reminder);

    if (index !== -1) {
      this.reminders[index] = rem;
    }
    this.type = 'show';
  }

  deleteReminder(rem) {
    console.log('REM:', rem);

    this.reminder = {
      text: '',
      color: '',
      time: '',
    };
    const index = this.reminders.indexOf(rem);
    if (index !== -1) {
      console.log('antes', this.reminders);
      console.log('index', index);
      this.reminders.splice(index, 1);
      console.log('despues', this.reminders);
    }

    console.log('this.reminder:', this.reminder);
    this.dialogRef.close(this.reminders);
  }

  deleteAll() {
    this.dialogRef.close([]);
  }

  close() {
    this.type = 'show';
  }

  applyStyles() {
    const styles = {color: this.reminder.color, 'margin-top': '-2px'};
    return styles;
  }

  open() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      this.reminder.time = time;
    });
  }

}
