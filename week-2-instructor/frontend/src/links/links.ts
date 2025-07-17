import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ErrorDisplay } from './components/error-display';
import { LinksStore } from './services/links-store';

@Component({
  selector: 'app-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ErrorDisplay],
  template: `
    @if (store.isLoading()) {
      <div class="loading loading-spinner loading-lg"></div>
    } @else {
      <app-error-display />
      <div class="flex flex-row gap-4">
        <a
          class="btn btn-primary"
          routerLink="add"
          [routerLinkActive]="['uppercase', 'text-black']"
          >Add A New Link</a
        >
        <a class="btn btn-primary" routerLink="/links">Links</a>
      </div>
      <div>
        <router-outlet />
      </div>
    }
  `,
  styles: ``,
})
export class Links {
  store = inject(LinksStore);
}
