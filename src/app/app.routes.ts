import { Routes } from '@angular/router';
import { AlarmComponent } from './alarm/alarm.component';
import { ClockComponent } from './clock/clock.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { TimerComponent } from './timer/timer.component';

export const routes: Routes = [
  {
    path: 'alarm',
    component: AlarmComponent,
  },
  {
    path: 'clock',
    component: ClockComponent,
  },
  {
    path: 'stopwatch',
    component: StopwatchComponent,
  },
  {
    path: 'timer',
    component: TimerComponent,
  },
  {
    path: '',
    redirectTo: '/alarm',
    pathMatch: 'full',
  },
];
