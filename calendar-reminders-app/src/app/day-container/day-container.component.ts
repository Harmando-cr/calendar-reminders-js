import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-container',
  templateUrl: './day-container.component.html',
  styleUrls: ['./day-container.component.scss']
})
export class DayContainerComponent implements OnInit {

  @Input() day: number;

  constructor() { }

  ngOnInit() {
  }

}
