import { style } from '@angular/animations';
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1
  initialTop: number = 0

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().bottom
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px';
    /* this.eleRef.nativeElement.style.left = (window.scrollY / (10 * this.parallaxRatio)) + 'px' */
  }
}

