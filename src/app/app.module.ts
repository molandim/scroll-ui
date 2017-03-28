import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ScrollStyleModifierComponent } from './scroll-style-modifier/scroll-style-modifier.component';
import { ScrollStyleModifierDirective } from './scroll-style-modifier.directive';
import { ScrollFadeDirective } from './scroll-fade.directive';
import { ScrollParallaxDirective } from './scroll-parallax.directive';
import { ScrollParallaxBgDirective } from './scroll-parallax-bg.directive';
import { ScrollParallaxFieldDirective } from './scroll-parallax-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScrollStyleModifierComponent,
    ScrollStyleModifierDirective,
    ScrollFadeDirective,
    ScrollParallaxDirective,
    ScrollParallaxBgDirective,
    ScrollParallaxFieldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }