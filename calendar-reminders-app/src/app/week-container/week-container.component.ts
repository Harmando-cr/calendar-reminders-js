import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-week-container',
  templateUrl: './week-container.component.html',
  styleUrls: ['./week-container.component.scss']
})
export class WeekContainerComponent implements OnInit {

  @Input() calendar: any;
  @Input() week: any;

  constructor() { }

  ngOnInit() {
  }

}
