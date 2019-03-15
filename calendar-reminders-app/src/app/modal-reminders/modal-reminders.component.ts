import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../day-container/day-container.component';
import { AmazingTimePickerService } from 'amazing-time-picker';

import * as moment from 'moment';

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
    this.reminders = [];

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

  addReminder(){
    console.log(this.reminder, this.reminders);
    this.reminders.push(this.reminder);
    this.type = 'show';
  }


  onNoClick(): void {
    this.dialogRef.close();
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
