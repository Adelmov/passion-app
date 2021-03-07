import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import{ OurStoryComponent} from './our-story/our-story.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutme', component: AboutMeComponent },
  {path: 'story', component: OurStoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
