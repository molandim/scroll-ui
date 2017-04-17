import { Directive, EventEmitter, HostListener, Inject, ElementRef, OnInit, Output } from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";
import {ClientRectangle} from "./clientRectangle";
//import {WindowProvider} from './window-provider.service';

@Directive({
  selector: '[scroll-ui]'
})
export class ScrollUiDirective implements OnInit {

  private clientRectangle:ClientRectangle; 
  private isOnScreen:Boolean;
  
  @Output()
  onScreenEnter = new EventEmitter();

  @Output()
  onScreenLeave = new EventEmitter();
   
  constructor(@Inject(DOCUMENT) private document: any, private el:ElementRef, @Inject('windowObject') private window:Window) {
   }

   ngOnInit():any{
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
