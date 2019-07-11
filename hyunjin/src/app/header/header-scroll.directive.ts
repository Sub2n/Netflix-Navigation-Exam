import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeaderScroll]'
})
export class HeaderScrollDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) { }

  @HostListener('window:scroll') onScrollEvent() {
    if (window.pageYOffset > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color .4s');
    }
    else {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color .4s');
    }
  }
}