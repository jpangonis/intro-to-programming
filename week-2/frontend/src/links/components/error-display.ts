import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { LinksStore } from '../services/links-store';

@Component({
  selector: 'app-error-display',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    @if (store.hasError()) {
      <div class="alert alert-error">
        <h2>Errors!</h2>
        <p>{{ store.errorMessage() }}</p>
        <button (click)="store.clearError()" class="btn btn-ghost">
          Dismiss
        </button>
      </div>
    }
  `,
  styles: ``,
})
export class ErrorDisplay {
  store = inject(LinksStore);
}
