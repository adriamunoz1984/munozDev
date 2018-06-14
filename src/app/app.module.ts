import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InnerComponent } from './inner/inner.component';
import { OuterComponent } from './outer/outer.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { WelcomeComponent } from './welcome/welcome.component';
import { ServicesComponent } from './services/services.component';
import { StartSelectComponent } from './start-select/start-select.component';
import { NavBar2Component } from './nav-bar2/nav-bar2.component';
import { AbButtonsComponent } from './ab-buttons/ab-buttons.component';
import { NavBar1Component } from './nav-bar1/nav-bar1.component';

@NgModule({
  declarations: [
    AppComponent,
    InnerComponent,
    OuterComponent,
    WelcomeComponent,
    ServicesComponent,
    StartSelectComponent,
    NavBar2Component,
    AbButtonsComponent,
    NavBar1Component,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularSvgIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
