import { Directive, HostListener, Input, OnDestroy} from '@angular/core';
import {ScrollUiDirective} from './scroll-ui.directive';

@Directive({
  selector: '[scroll-fade]'
})
export class ScrollUiFadeDirective extends ScrollUiDirective implements OnDestroy{

@Input()duration:number = 0.5;
@Input()delay:number = 0;
@Input()easing: string = 'linear';

private enterScreenSubscription:any;
private leaveScreenSubscription:any;

  ngAfterViewInit():void{
    super.ngAfterViewInit();
    this.applyInitStyles();
    this.enterScreenSubscription = this.onScreenEnter.subscribe(() => this.onScreenEnterHandler());
    this.leaveScreenSubscription = this.onScreenLeave.subscribe(() => this.onScreenLeaveHandler());
  }

  ngOnDestroy():void{
    this.enterScreenSubscription.unsubscribe();
    this.leaveScreenSubscription.unsubscribe();
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
