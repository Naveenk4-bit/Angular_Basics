import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {
  
  // write here logic to activate diractive
  @Input() appHighlight = '';

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'red')
  }
  
    @HostListener('mouseleave') onMouseLeave() {
     this.highlight('');
    }
  private highlight(color:string) {
   this.el.nativeElement.style.backgroundColor = color;
  }
}
