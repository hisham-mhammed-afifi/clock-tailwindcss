import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
})
export class ClockComponent {
  clocks = [
    {
      country: 'Cairo',
      now: new Date(),
    },
    {
      country: 'Dubai',
      now: new Date(),
    },
  ];
}
