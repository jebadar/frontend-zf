import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './Layout/layout.module'

//modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { OwlModule } from 'ngx-owl-carousel';

//Services
import { HttpService } from '../app/app-services/http.service'
import { LayoutService } from '../app/Layout/layout.service' 
import { LocalStoreService }  from '../app/app-services/local-store.service' 
import { InterceptorService } from '../app/app-services/interceptor.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    OwlModule
  ],
  providers: [
    LocalStoreService,
    {provide:HTTP_INTERCEPTORS, useClass:InterceptorService,multi: true},
    HttpService,
    LayoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
