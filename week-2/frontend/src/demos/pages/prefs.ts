import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../services/counter-store';

@Component({
  selector: 'app-counter-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>You are counting by:</p>
    <div class="join">
      @for (val of store.values; track val) {
        <button
          (click)="store.setCountBy(val)"
          [disabled]="store.by() === val"
          class="btn join-item"
        >
          {{ val }}
        </button>
      }
    </div>
  `,
  styles: ``,
})
export class Prefs {
  store = inject(CounterStore);
}
