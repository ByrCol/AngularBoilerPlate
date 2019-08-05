import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material";

import { AppComponent } from './app.component';
import { BootstrapResponsiveSiteComponent } from './bootstrap-responsive-site/bootstrap-responsive-site.component';
import { NavComponent } from './bootstrap-responsive-site/nav/nav.component';
import { ImgSliderComponent } from './bootstrap-responsive-site/img-slider/img-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapResponsiveSiteComponent,
    NavComponent,
    ImgSliderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
