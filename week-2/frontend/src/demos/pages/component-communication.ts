import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Card } from '../components/card';
import { ProductItem } from '../types';

@Component({
  selector: 'app-component-communication',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Card],
  template: `
    <p>component communication</p>
    <div>
      @for (product of products(); track product.id) {
        <app-card
          (bought)="theyBoughtIt($event)"
          [product]="product"
        ></app-card>
      }
    </div>
  `,
  styles: ``,
})
export class ComponentCommunication {
  products = signal<ProductItem[]>([
    { id: 1, name: 'Product 1', price: 12.99 },
    { id: 2, name: 'Product 2', price: 8.99 },
    { id: 3, name: 'Product 3', price: 3.23 },
  ]);

  theyBoughtIt(id: number) {
    console.log('bought product with id', id);
    // Here you could implement further logic, like updating a cart or notifying the user
  }
}
