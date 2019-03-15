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

  constructor(
    public dialogRef: MatDialogRef<ModalRemindersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
    this.date = moment(data.day.dayDate).format('dddd MMMM D');
    }

    ngOnInit() {

    }

    onNoClick(): void {
      this.dialogRef.close();
    }


}
