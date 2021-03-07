import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { AboutMeAComponent } from './about-me/about-me-a/about-me-a.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    OurStoryComponent,
    AboutMeAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
