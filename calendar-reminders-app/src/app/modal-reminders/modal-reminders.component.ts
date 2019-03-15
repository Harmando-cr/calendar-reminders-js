import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../day-container/day-container.component';
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
    public dialogRef: MatDialogRef<ModalRemindersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
    this.date = moment(data.day.dayDate).format('dddd, MMMM D');
    this.type = 'show';
    this.reminders = [];
    this.reminder = {
      text: '',
      color: '',
    };
  }

  ngOnInit() {
  }

  typeAdd(){
    this.type = 'add';
    this.reminder = {
      text: '',
      color: '',
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


}
