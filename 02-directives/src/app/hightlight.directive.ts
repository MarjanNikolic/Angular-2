import { 
  Directive, 
  ElementRef, 
  Renderer, 
  HostListener, 
  HostBinding, 
  Input, 
  OnInit 
} from '@angular/core';

@Directive({
  selector: '[hightlight]'
})
export class HightlightDirective {
  @HostListener('mouseenter') onmouseover() {
      this.backgroundColor = this.heighlightColor;
  };
  @HostListener('mouseleave') onmouseleave() {
      this.backgroundColor = this.defaultColor;
  };
  @HostBinding('style.backgroundColor') get setColor() {
      return this.backgroundColor;
  };
  @Input() defaultColor = 'white';
  @Input('hightlight') heighlightColor = 'green';
  private backgroundColor: string;
  constructor(/*private el: ElementRef, private renderer: Renderer */) {
    //this.el.nativeElement.style.backgroundColor = 'green';
    //this.renderer.setElementStyle(this.el.nativeElement, 'background-color', 'green');
  }
 ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
