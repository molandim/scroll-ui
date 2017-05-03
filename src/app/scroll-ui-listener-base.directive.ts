import { Directive, HostListener, Input, OnDestroy} from '@angular/core';
import {ScrollUiDirective} from './scroll-ui.directive';

export class ScrollUiListenerBaseDirective extends ScrollUiDirective implements OnDestroy{

private enterScreenSubscription:any;
private leaveScreenSubscription:any;

  ngAfterViewInit():void{
    super.ngAfterViewInit();
    this.enterScreenSubscription = this.onScreenEnter.subscribe(() => this.onScreenEnterHandler());
    this.leaveScreenSubscription = this.onScreenLeave.subscribe(() => this.onScreenLeaveHandler());
  }

  ngOnDestroy():void{
    this.enterScreenSubscription.unsubscribe();
    this.leaveScreenSubscription.unsubscribe();
  }

  onScreenEnterHandler():void{
  }

  onScreenLeaveHandler():void{
  }
}