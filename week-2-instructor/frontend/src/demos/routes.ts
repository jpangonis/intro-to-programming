import { Routes } from '@angular/router';
import { Demo } from './demo';
import { Counter } from './pages/counter';
import { Prefs } from './pages/prefs';
import { ComponentCommunication } from './pages/component-communication';
export const demos_routes: Routes = [
  {
    path: '',
    component: Demo,

    children: [
      {
        path: 'counter',
        component: Counter,
      },
      {
        path: 'prefs',
        component: Prefs,
      },
      {
        path: 'component-communication',
        component: ComponentCommunication,
      },
    ],
  },
];
