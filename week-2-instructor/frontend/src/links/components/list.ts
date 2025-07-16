import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LinksStore } from '../services/links-store';

@Component({
  selector: 'app-links-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div
      class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100"
    >
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>
              <button
                (click)="store.setSortingBy('href')"
                [disabled]="store.sortingBy() === 'href'"
                class="btn btn-sm btn-primary"
              >
                URL
              </button>
            </th>
            <th>
              <button
                (click)="store.setSortingBy('description')"
                [disabled]="store.sortingBy() === 'description'"
                class="btn btn-sm btn-primary"
              >
                Descriptions
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->

          @for (link of store.sortedEntities(); track link.id) {
            <tr>
              <th>{{ link.id }}</th>
              <td>{{ link.href }}</td>
              <td>{{ link.description }}</td>
            </tr>
          } @empty {
            <p>No links available.</p>
          }
          <!-- row 2 -->
        </tbody>
      </table>
    </div>
  `,
  styles: ``,
})
export class List {
  store = inject(LinksStore);
}
