import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiLinkCreateItem, LinksStore } from '../services/links-store';
@Component({
  selector: 'app-links-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: `
    <div class="w-full">
      <form [formGroup]="form" (ngSubmit)="addLink()">
        <fieldset class="fieldset">
          <legend class="fieldset-legend">What is the URL of the Link</legend>
          <input
            formControlName="href"
            type="text"
            class="input"
            placeholder="Type here"
          />
          <p class="label">Should start with http or https</p>
          @let hrefInput = form.controls.href;
          @let hrefErrors = hrefInput.errors;
          @if (hrefErrors && (hrefInput.touched || hrefInput.dirty)) {
            <div class="alert alert-warning">
              @if (hrefErrors['required']) {
                <p>URL is required.</p>
              }
              @if (hrefErrors['pattern']) {
                <p>URL must start with http:// or https://.</p>
              }
            </div>
          }
        </fieldset>
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Provide a Description</legend>
          <textarea
            formControlName="description"
            type="text"
            class="input"
            placeholder="Type here"
          ></textarea>

          @let descriptionErrors = form.controls.description.errors;
          @if (descriptionErrors) {
            <div class="alert alert-warning">
              @if (descriptionErrors['required']) {
                <p>Description is required.</p>
              }
              @if (descriptionErrors['minlength']) {
                <p>Description must be at least 5 characters long.</p>
              }
              @if (descriptionErrors['maxlength']) {
                <p>Description cannot exceed 100 characters.</p>
              }
            </div>
          }
        </fieldset>

        <button class="btn btn-primary" type="submit">Add Link</button>
      </form>
    </div>
  `,
  styles: ``,
})
export class Add {
  store = inject(LinksStore);
  form = new FormGroup({
    href: new FormControl('', {
      nonNullable: true,

      validators: [Validators.required, Validators.pattern('https?://.+')],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ],
    }),
  });

  addLink() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.store.addLink(this.form.value as unknown as ApiLinkCreateItem);
    this.form.reset();
  }
}
