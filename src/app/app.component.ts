import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clock-tailwindcss';

  apps = [
    {
      path: '/alarm',
      label: 'Alarm',
    },
    {
      path: '/clock',
      label: 'Clock',
    },
    {
      path: '/stopwatch',
      label: 'Stopwatch',
    },
    {
      path: '/timer',
      label: 'Timer',
    },
  ];
}
