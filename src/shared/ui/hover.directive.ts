import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: false,
})
export class HoverDirective {
  private el = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.hover('block');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover('none');
  }

  private hover(appearance: string) {
    this.el.nativeElement.lastElementChild.nodeName === 'UL' &&
    window.matchMedia('(min-width: 992px)').matches
      ? (this.el.nativeElement.lastElementChild.style.display = appearance)
      : null;
  }

  constructor() {}
}
