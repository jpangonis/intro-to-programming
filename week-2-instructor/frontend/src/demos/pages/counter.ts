import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
} from '@angular/core';
import { CounterStore } from '../../shared/counter-store';

@Component({
  selector: 'app-demos-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  providers: [],
  template: `
    <div>
      <button
        [disabled]="store.decrementDisabled()"
        (click)="store.decrement()"
        class="btn btn-warning btn-circle"
      >
        -
      </button>
      <span class="px-4">{{ store.current() }}</span>
      <button (click)="store.increment()" class="btn btn-success btn-circle">
        +
      </button>
    </div>

    <div>
      @if (store.isEven()) {
        <p>It is Even</p>
      } @else {
        <p>It is Odd!</p>
      }
    </div>
  `,
  styles: ``,
})
export class Counter {
  store = inject(CounterStore);
}
