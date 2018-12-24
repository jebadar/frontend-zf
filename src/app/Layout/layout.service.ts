// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LayoutService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { HttpService } from '../app-services/http.service';
import { LocalStoreService } from '../app-services/local-store.service';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Constants } from '../constants';
import qs from 'qs';

// @Injectable()
@Injectable({
    providedIn: 'root'
  })
export class LayoutService {

  constructor(
    private httpServicesService: HttpService,
    private locStoreService: LocalStoreService
    // private toastr: ToastsManager
  ) { }

  getMovies() {
     let observable = this.httpServicesService.get('videos/byfeed/Movies');
      return observable
  }

}