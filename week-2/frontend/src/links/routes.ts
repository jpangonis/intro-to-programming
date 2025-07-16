import { Routes } from '@angular/router';
import { Links } from './links';
import { LinksApiService } from './services/links-api';
import { LinksStore } from './services/links-store';
export const links_routes: Routes = [
  {
    path: '',
    component: Links,
    providers: [LinksApiService, LinksStore],
    children: [],
  },
];
