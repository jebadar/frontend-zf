import { Component, ViewContainerRef } from '@angular/core';
import { HomeComponent } from './Layout/home/home.component'
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendZF';
  // constructor(public toastr: ToastsManager, vRef: ViewContainerRef) {
  //   this.toastr.setRootViewContainerRef(vRef);
  // }
}
