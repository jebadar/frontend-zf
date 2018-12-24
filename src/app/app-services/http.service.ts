// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/share'
import { Observable } from 'rxjs'
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Constants } from '../constants'
import { Router } from '@angular/router';
import { getToken } from '@angular/router/src/utils/preactivation';

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient,
    // private toastr: ToastsManager,
    private router: Router
  ) { 
    this.sendAuthMsg = true;
  }
  private api = Constants.API_URL;
  private sendAuthMsg;

  sendUnAuthorizedMessage(){
    this.sendAuthMsg=false;
    // this.toastr.error('You need to login first.',null, { showCloseButton: true });
    // setTimeout(()=>{
    //   this.sendAuthMsg=true;
    // },5000);
  }

  showError(error, showErrors) {
    switch (error.status) {
      case 401:
        if (showErrors.e401 != false) {
          if(this.sendAuthMsg){
            this.sendUnAuthorizedMessage();
          }
          this.router.navigate(['/']);  
        }
        break;
      case 400:
        if (showErrors.e400 != false) {
          // this.toastr.error('There seems to be some error.', null, { showCloseButton: true });
        }
        break;
      case 500:
        if (showErrors.e500 != false) {
          // this.toastr.error('We are unable to process your request.', null, { showCloseButton: true });
        }
        break;
      case 404:
        if (showErrors.e404 != false) {
          // this.toastr.error('Web page not found', null, { showCloseButton: true });
        }
        break;
      case 422:
        if (showErrors.e422 != false) {
          let errorMsg;
          let body = error.json();
          if(body.errors && body.errors.length>0){
            errorMsg = body.errors[0].detail;
          } else{
            errorMsg = body.message;
          }
          // this.toastr.error(errorMsg, 'Oops!', { showCloseButton: true });
        }
        break;
    }
  }

  post(method, value, showErrors = {}) {

    let url = this.api + method;
    let observable = this.http.post(url, value)


    observable.subscribe(
      data => { },
      error => { this.showError(error, showErrors); }
    )

    return observable;
  }

  get(method, value = "", showErrors = {}) {
    let url = this.api + method + value;
    let observable = this.http.get(url);
    observable.subscribe(
      data => { },
      error => { this.showError(error, showErrors); }
    )

    return observable;
  }
  delete(method, value = "", showErrors = {}) {
    let url = this.api + method + value;
    let observable = this.http.delete(url);


    observable.subscribe(
      data => { },
      error => { this.showError(error, showErrors); }
    )

    return observable;
  }
  put(method, value, showErrors = {}) {
    let url = this.api + method;
    let observable = this.http.put(url, value);


    observable.subscribe(
      data => { },
      error => { this.showError(error, showErrors); }
    )

    return observable;
  }
}