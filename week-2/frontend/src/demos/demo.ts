import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  providers: [],
  template: `
    <div class="flex flex-row gap-4">
      <a routerLink="counter" class="btn btn-primary">Counter</a>
      <a routerLink="prefs" class="btn btn-primary">Settings</a>
    </div>
    <div class="p-12">
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class Demo {}
