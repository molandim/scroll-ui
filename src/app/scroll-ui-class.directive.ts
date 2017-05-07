import {Directive, Input} from '@angular/core';
import { ScrollUiFadeDirective } from './scroll-ui-fade.directive';

@Directive({
  selector: '[scroll-class]'
})
export class ScrollUiClassDirective extends ScrollUiFadeDirective {
  @Input('class-name')
  public className: string;
  private originalClass: string;

  ngAfterViewInit():void{
    super.ngAfterViewInit();
    this.originalClass = this.el.nativeElement.className;
  }

  applyInitStyles():void{
    this.el.nativeElement.style.transition = `all ${this.duration}s ${this.easing} ${this.delay}s`;
    if(this.isOnScreen){
     // this.el.na
    }
  }

  onScreenEnterHandler():void{
    this.el.nativeElement.className = `${this.className} ${this.originalClass}`;
  }

  onScreenLeaveHandler():void{
    this.el.nativeElement.className = this.originalClass;
  }

}
