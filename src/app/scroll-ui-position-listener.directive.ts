import { Directive, HostListener, Input, OnDestroy} from '@angular/core';
import {ScrollUiListenerBaseDirective} from './scroll-ui-listener-base.directive';


export class ScrollUiPositionListener extends ScrollUiListenerBaseDirective{

  protected xScreenPosition: number;
  protected yScreenPosition: number

   onScreenEnterHandler():void{
    this.el.nativeElement.style.opacity = 1;
  }

  onScreenLeaveHandler():void{
    this.el.nativeElement.style.opacity = 0;
  }


 

}
