import { CurrencyPipe } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  input,
  output,
} from '@angular/core';
import { ProductItem } from '../types';

@Component({
  selector: 'app-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe],
  template: `
    <div class="card p-4 border-2 border-gray-300 shadow-sm m-4">
      <div class="card-body">
        <div class="card-title">
          {{ product().name }}
        </div>
        <div>Price: {{ product().price | currency }}</div>

        <div class="card-actions justify-end">
          <button (click)="onBuyNow()" class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Card {
  product = input.required<ProductItem>();
  bought = output<number>();
  onBuyNow() {
    // send a message to the parent component
    this.bought.emit(this.product().id);
  }
}
