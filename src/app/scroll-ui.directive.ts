import { Directive, EventEmitter, HostListener, Inject, ElementRef, AfterViewInit, Output } from '@angular/core';
import {ClientRectangle} from "./clientRectangle";
//import {WindowProvider} from './window-provider.service';

@Directive({
  selector: '[scroll-ui]'
})
export class ScrollUiDirective implements AfterViewInit {

  protected clientRectangle:ClientRectangle; 
  protected isOnScreen:Boolean;
  
  @Output()
  onScreenEnter = new EventEmitter();

  @Output()
  onScreenLeave = new EventEmitter();
   
  constructor(protected el:ElementRef, @Inject('windowObject') private window:Window) {
   }

   ngAfterViewInit():any{
    this.updateElementArea();
    this.isOnScreen = this.checkElementIsOnScreen();
   }

  updateElementArea():void{
    this.clientRectangle = this.el.nativeElement.getBoundingClientRect();
    
  }
  checkElementIsOnScreen():Boolean{
    return (this.clientRectangle.top < this.window.innerHeight && this.clientRectangle.bottom > 0);
  }

  emitEvents():void{
    this.isOnScreen?this.onScreenEnter.emit():this.onScreenLeave.emit();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(){
    this.updateElementArea();
    if(this.checkElementIsOnScreen() !== this.isOnScreen){
      this.isOnScreen = this.checkElementIsOnScreen();
      this.emitEvents();
    }
  }
}
