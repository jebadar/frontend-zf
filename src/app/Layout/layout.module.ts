import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OwlItemComponent } from './owl-item/owl-item.component';
import { OwlModule } from 'ngx-owl-carousel';
import { MovieComponent } from './movie/movie.component';
// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NewsComponent } from './news/news.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    OwlItemComponent,
    MovieComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    OwlModule,
    SlickCarouselModule,
    InfiniteScrollModule
  ]
})
export class LayoutModule { }
