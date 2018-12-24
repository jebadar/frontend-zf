import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OwlItemComponent } from './owl-item/owl-item.component';
import { OwlModule } from 'ngx-owl-carousel';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    OwlItemComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    OwlModule
  ]
})
export class LayoutModule { }
