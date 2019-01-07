import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Layout/home/home.component';
import { VideoPlayerComponent } from '../Layout/video-player/video-player.component'

const routes: Routes = [
  { 
    path: '', component: HomeComponent,
  },
  {
    path:"video",component:VideoPlayerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule {
  
 }
