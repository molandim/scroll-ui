import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import {WindowProvider} from './window-provider.service';
/*import { ScrollStyleModifierDirective } from './scroll-style-modifier.directive';
import { ScrollFadeDirective } from './scroll-fade.directive';
import { ScrollParallaxDirective } from './scroll-parallax.directive';
import { ScrollParallaxBgDirective } from './scroll-parallax-bg.directive';
import { ScrollParallaxFieldDirective } from './scroll-parallax-field.directive';*/
import { ScrollUiDirective } from './scroll-ui.directive';
import { ScrollUiFadeDirective} from './scroll-ui-fade.directive';
import { ScrollUiListenerBaseDirective } from './scroll-ui-listener-base.directive';
import { ScrollUiClassDirective } from './scroll-ui-class.directive';
import { ScrollUiPositionListenerDirective } from './scroll-ui-position-listener.directive';

@NgModule({
  declarations: [
    AppComponent,
/*    ScrollStyleModifierDirective,
    ScrollFadeDirective,
    ScrollParallaxDirective,
    ScrollParallaxBgDirective,
    ScrollParallaxFieldDirective,*/
    ScrollUiDirective,
    ScrollUiFadeDirective,
    ScrollUiListenerBaseDirective,
    ScrollUiClassDirective,
    ScrollUiPositionListenerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: "windowObject", useValue: window}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
