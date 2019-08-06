import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material";

import { AppComponent } from './app.component';
import { BootstrapResponsiveSiteComponent } from './bootstrap-responsive-site/bootstrap-responsive-site.component';
import { NavComponent } from './bootstrap-responsive-site/nav/nav.component';
import { ImgSliderComponent } from './bootstrap-responsive-site/img-slider/img-slider.component';
import { JumbotronComponent } from './bootstrap-responsive-site/jumbotron/jumbotron.component';
import { WelcomeSectionComponent } from './bootstrap-responsive-site/welcome-section/welcome-section.component';
import { ThreeColumnSectionComponent } from './bootstrap-responsive-site/three-column-section/three-column-section.component';
import { TwoColumnSectionComponent } from './bootstrap-responsive-site/two-column-section/two-column-section.component';
import { FixedBackgroundComponent } from './bootstrap-responsive-site/fixed-background/fixed-background.component';
import { EmojiSectionComponent } from './bootstrap-responsive-site/emoji-section/emoji-section.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapResponsiveSiteComponent,
    NavComponent,
    ImgSliderComponent,
    JumbotronComponent,
    WelcomeSectionComponent,
    ThreeColumnSectionComponent,
    TwoColumnSectionComponent,
    FixedBackgroundComponent,
    EmojiSectionComponent,
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
