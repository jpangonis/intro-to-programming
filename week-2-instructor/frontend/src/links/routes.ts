import { Routes } from '@angular/router';
import { Links } from './links';
import { LinksApiService } from './services/links-api';
import { LinksStore } from './services/links-store';
import { List } from './components/list';
import { LinkDetails } from './components/link-details';
import { Add } from './components/add';
export const links_routes: Routes = [
  {
    path: '',
    component: Links,
    providers: [LinksApiService, LinksStore],
    children: [
      {
        path: '',
        component: List,
      },
      {
        path: 'add',
        component: Add,
      },
      {
        path: ':id',
        component: LinkDetails,
      },
    ],
  },
];
