import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ErrorDisplay } from './components/error-display';

@Component({
  selector: 'app-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ErrorDisplay],
  template: `
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
  `,
  styles: ``,
})
export class Links {}
