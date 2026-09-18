import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appTextStyle]',
})
export class TextStyle {
  private el = inject(ElementRef);

  constructor() {
    this.el.nativeElement.style.color = 'orange';
    this.el.nativeElement.style.fontWeight = 'bold';
  }
}
