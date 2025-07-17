import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LinksStore } from '../services/links-store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-links-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <ul class="list bg-base-100 rounded-box shadow-md">
      <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Links Shared With You
      </li>
      @for (link of store.sortedEntities(); track link.id) {
        <li class="list-row">
          <div>
            <p class="text-xl font-bold">{{ link.description }}</p>
            <p class="text-sm opacity-70">{{ link.href }}</p>
          </div>
          <div>
            <a
              class="btn btn-sm btn-primary"
              [href]="link.href"
              target="_blank"
            >
              Open Link
            </a>
            <a
              class="btn btn-sm btn-primary ml-4"
              [routerLink]="['/links', link.id]"
            >
              See Details
            </a>
          </div>
        </li>
      } @empty {
        <li class="p-4 text-center text-sm opacity-60">
          No links shared with you yet.
        </li>
      }
    </ul>
  `,
  styles: ``,
})
export class List {
  store = inject(LinksStore);
}
