import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <h1>This is the home page for the week 2 Angular application</h1>
    <div class="alert alert-">Watch This Space For More Stuff Later</div>
  `,
  styles: ``,
})
export class Home {}
