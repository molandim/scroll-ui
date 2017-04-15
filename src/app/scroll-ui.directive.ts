import { Directive, EventEmitter, HostListener, Output, Inject, ElementRef } from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";
import {ClientRectangle} from "./clientRectangle";
//import {WindowProvider} from './window-provider.service';

@Directive({
  selector: '[scroll-ui]'
})
export class ScrollUiDirective {

  private clientRectangle:ClientRectangle; 
  
  
   
  constructor(@Inject(DOCUMENT) private document: any, private el:ElementRef, @Inject('windowObject') private window:Window) {
   // console.log('I am here');
  console.log(this.window);
  console.log(this.window.innerHeight)
    console.log(this.el.nativeElement.getBoundingClientRect());
    //console.log('this.document.body.scrollTop: ', this.document.body.scrollTop);
    //console.log('this.document: ', this.document.documentElement.pageYOffset);
    //console.log('this.el.nativeElement.getBoudingClientRect(): ', this.el.nativeElement.getBoundingClientRect());
    //console.log('this.el.nativeElement.offsetTop): ', this.el.nativeElement.offsetTop);
   }

  @Output() onEnterScreen:EventEmitter<null> = new EventEmitter();

  @HostListener('window:scroll', [])
  onWindowScroll(){
   //this.document.body
  //console.log("");
  //console.log('window.pageYOffset', this.window.pageYOffset);
  
//this.top = this.el.nativeElement.getBoundingClientRect().top;
this.clientRectangle = this.el.nativeElement.getBoundingClientRect();

//console.log('this.el.nativeElement.getBoundingClientRect().top: ', this.el.nativeElement.getBoundingClientRect().top);
//console.log('this.el.nativeElement.getBoundingClientRect().bottom: ', this.el.nativeElement.getBoundingClientRect().bottom);
//console.log(this.clientRectangle);
//console.log('bottom', this.clientRectangle.bottom);
//console.log('window.innerHeight', this.window.innerHeight);
if(this.clientRectangle.top < this.window.innerHeight && this.clientRectangle.bottom > 0){
  console.log('I am in');
}

//this.document.body.scrollTo === window.pageYoffSet
//console.log('his.document.body.scrollTop;: ', this.document.body.scrollTop);
//console.log('window.height', this.document.body.heigth);

//console.log('this.document.body.scrollTop: ', this.document.body.scrollTop);
//console.log('this.document.body.clientHeight: ', this.document.body.clientHeight);
//console.log('this.offSet: ', this.offSet);
//console.log(this.document.body.clientHeight - this.offSet);
//console.log('el.nativeElement.getBoundingClientRect(): ', this.el.nativeElement.getBoundingClientRect());
//console.log('this.document.documentElement.scrollTop: ', this.document.documentElement.scrollTop);
   //console.log('offset', this.el.nativeElement.getBoundingClientRect().top +  this.document.body.scrollTop)
   //console.log('this.document.body.scrollTop: ', this.document.body.scrollTop);
     //console.log('getBoudingClientRect().top: ', this.el.nativeElement.getBoundingClientRect().top);
 // console.log(this.el.nativeElement);
   //console.log(this.document.body.scrollTop);
  
  }



}
