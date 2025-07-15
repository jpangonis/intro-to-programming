import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { About } from './pages/about';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'demos',
    loadChildren: () => import('../demos/routes').then((r) => r.demos_routes),
  },
  {
    path: 'links',
    loadChildren: () => import('../links/routes').then((r) => r.links_routes),
  },
];
