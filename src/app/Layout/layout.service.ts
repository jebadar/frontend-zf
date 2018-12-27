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
     let observable = this.httpServicesService.get('videos/byfeed/Movies?active=true&limit=8&offset=0');
      return observable
  }
  // tvchannels/domain?active=true&limit=32&offset=0
  getLiveChannel() {
    let observable = this.httpServicesService.get('tvchannels/domain?active=true&limit=32&offset=0');
     return observable
 }
  //  videos/byfeed/News?limit=70&offset=0
  getNewsChannel() {
    let observable = this.httpServicesService.get('videos/byfeed/News?limit=70&offset=0');
    return observable
  }
  getTalkshowsChannel() {
    let observable = this.httpServicesService.get('programs/domain/TalkShow');
    return observable
  }
  // videos/byfeed/Entertainment
  getEntertainmentChannel() {
    let observable = this.httpServicesService.get('videos/byfeed/Entertainment?limit=70&offset=0');
    return observable
  }
  // videos/byfeed/Sports
  getSportsChannel() {
    let observable = this.httpServicesService.get('videos/byfeed/Sports?limit=70&offset=0');
    return observable
  }
  // videos/byfeed/Kids
  getKidsChannel() {
    let observable = this.httpServicesService.get('videos/byfeed/Kids?limit=70&offset=0');
    return observable
  }
  // videos/byfeed/Drama
  getDramaChannel() {
    let observable = this.httpServicesService.get('videos/byfeed/Drama?limit=70&offset=0');
    return observable
  }
  // videos/byfeed/Islamic
  getIslamicChannel() {
    let observable = this.httpServicesService.get('videos/byfeed/Islamic?limit=70&offset=0');
    return observable
  }
}