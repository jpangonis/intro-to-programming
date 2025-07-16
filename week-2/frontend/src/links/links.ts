import { ChangeDetectionStrategy, Component } from '@angular/core';
import { List } from './components/list';
import { Add } from './components/add';

@Component({
  selector: 'app-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [List, Add],
  template: `
    <div class="flex flex-row gap-4">
      <app-links-list />
      <app-links-add />
    </div>
  `,
  styles: ``,
})
export class Links {}
