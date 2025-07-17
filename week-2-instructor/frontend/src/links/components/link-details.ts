import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-link-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <p>Link Deatils Here {{ id() }}</p> `,
  styles: ``,
})
export class LinkDetails {
  id = input.required<string>();
}
