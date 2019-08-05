import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material";

import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BootstrapResponsiveSiteComponent } from './bootstrap-responsive-site/bootstrap-responsive-site.component';
import { NavComponent } from './bootstrap-responsive-site/nav/nav.component';
import { ImgSliderComponent } from './bootstrap-responsive-site/img-slider/img-slider.component';
import { JumbotronComponent } from './bootstrap-responsive-site/jumbotron/jumbotron.component';
import { WelcomeSectionComponent } from './bootstrap-responsive-site/welcome-section/welcome-section.component';
import { ThreeColSectionComponent } from './bootstrap-responsive-site/three-col-section/three-col-section.component';
import { TwoColSectionComponent } from './bootstrap-responsive-site/two-col-section/two-col-section.component';
import { FixedBackgroundComponent } from './bootstrap-responsive-site/fixed-background/fixed-background.component';
import { EmojiSectionComponent } from './bootstrap-responsive-site/emoji-section/emoji-section.component';
import { MeetTeamSectionComponent } from './bootstrap-responsive-site/meet-team-section/meet-team-section.component';
import { CardsComponent } from './bootstrap-responsive-site/cards/cards.component';
import { TwoColSectionTwoComponent } from './bootstrap-responsive-site/two-col-section-two/two-col-section-two.component';
import { ConnectSectionComponent } from './bootstrap-responsive-site/connect-section/connect-section.component';
import { FooterComponent } from './bootstrap-responsive-site/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent,
    BootstrapResponsiveSiteComponent,
    NavComponent,
    ImgSliderComponent,
    JumbotronComponent,
    WelcomeSectionComponent,
    ThreeColSectionComponent,
    TwoColSectionComponent,
    FixedBackgroundComponent,
    EmojiSectionComponent,
    MeetTeamSectionComponent,
    CardsComponent,
    TwoColSectionTwoComponent,
    ConnectSectionComponent,
    FooterComponent,
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
