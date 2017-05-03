import { Directive, HostListener, Input, OnDestroy} from '@angular/core';
import {ScrollUiListenerBaseDirective} from './scroll-ui-listener-base.directive';

@Directive({
  selector: '[scroll-fade]'
})
export class ScrollUiFadeDirective extends ScrollUiListenerBaseDirective{

@Input()duration:number = 0.5;
@Input()delay:number = 0;
@Input()easing: string = 'linear';

  ngAfterViewInit():void{
    super.ngAfterViewInit();
    this.applyInitStyles();
  }

  onScreenEnterHandler():void{
    this.el.nativeElement.style.opacity = 1;
  }

  onScreenLeaveHandler():void{
    this.el.nativeElement.style.opacity = 0;
  }

  applyInitStyles():void{
    this.el.nativeElement.style.transition = `opacity ${this.duration}s ${this.easing} ${this.delay}s`;
    this.el.nativeElement.style.opacity = this.isOnScreen?1:0;
  }
}
