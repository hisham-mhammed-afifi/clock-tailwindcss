import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alarm',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './alarm.component.html',
  styleUrl: './alarm.component.scss',
})
export class AlarmComponent {
  currentYear = 0;
  currentMonth = 0;
  currentDay = 0;

  constructor() {}

  // new Date(year, month, day, hours, minutes, seconds)

  alarms = [
    {
      name: 'Wake up morning',
      active: true,
      at: new Date(
        this.currentYear,
        this.currentMonth,
        this.currentDay,
        12,
        30,
        30
      ),
    },
    {
      name: 'Wake up morning',
      active: true,
      at: new Date(
        this.currentYear,
        this.currentMonth,
        this.currentDay,
        12,
        30,
        30
      ),
    },
    {
      name: 'Wake up morning',
      active: true,
      at: new Date(
        this.currentYear,
        this.currentMonth,
        this.currentDay,
        12,
        30,
        30
      ),
    },
  ];
}
