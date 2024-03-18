import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el:ElementRef) {}

  highlight(style: string) {
    this.el.nativeElement.style.backgroundColor = style;
  }
  addBorder(
    color:string='blue',
    borderType:string='solid',
    borderWidth:string='2px'
  ){
    this.el.nativeElement.style.border=`${borderWidth} ${borderType} ${color}`
  }
  @Input() set appHighlight(value:number){
  if (value==1) {
    this.addBorder('red','dashed');

  }}
  @Input() quantity!:number;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("gray");
  }
  }
