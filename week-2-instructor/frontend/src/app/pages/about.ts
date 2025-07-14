import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="prose">
      <h2>Demo App For Intro To Programming</h2>
      <p>
        This is a demo app from the intro class, we are going to do a lot of
        stuff here.
      </p>
    </div>
  `,
  styles: ``,
})
export class About {}
