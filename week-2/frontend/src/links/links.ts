import { ChangeDetectionStrategy, Component, resource } from '@angular/core';

@Component({
  selector: 'app-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>Links Will Go Here</p>

    @if (links.isLoading()) {
      <div class="alert alert-info">
        Chill, bro. Getting Your Links.... hang tight
      </div>
    } @else {
      @for (link of links.value(); track link.id) {
        <div class="card">
          <div class="card-body">
            <div class="card-title">{{ link.href }}</div>
            {{ link.description }}
          </div>
        </div>
      } @empty {
        <div class="alert alert-info">
          Sorry, there are no links! Maybe add some
        </div>
      }
    }
  `,
  styles: ``,
})
export class Links {
  links = resource({
    loader: () =>
      fetch('http://api.realsever-but-not-really.com/links').then((r) =>
        r.json(),
      ),
  });
}
