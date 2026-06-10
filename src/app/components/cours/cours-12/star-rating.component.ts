import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  template: `
    <div class="flex items-center gap-1">
      <button
        *ngFor="let star of stars"
        type="button"
        (click)="rate(star)"
        [disabled]="disabled"
        class="focus:outline-none transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        [title]="'Noter ' + star + ' sur 5'"
      >
        <svg
          class="w-8 h-8 transition-colors duration-200"
          [class.text-amber-400]="star <= value"
          [class.text-slate-300]="star > value"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </button>
      <span class="ml-2 text-sm font-bold text-slate-700">({{ value }}/5)</span>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingComponent),
      multi: true
    }
  ]
})
export class StarRatingComponent implements ControlValueAccessor {
  public stars = [1, 2, 3, 4, 5];
  public value = 0;
  public disabled = false;

  private onChange = (val: number) => {};
  private onTouched = () => {};

  public writeValue(val: number): void {
    this.value = val || 0;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public rate(rating: number): void {
    if (!this.disabled) {
      this.value = rating;
      this.onChange(this.value);
      this.onTouched();
    }
  }
}
