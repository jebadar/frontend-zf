// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class InterceptorService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
    import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
    import { Observable } from 'rxjs';

    // import { AuthenticationService } from '../_services/authentication.service';

    @Injectable({
      providedIn: 'root'
    })
    export class InterceptorService implements HttpInterceptor {
      constructor() {}

      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        // let currentUser = this.authenticationService.currentUserValue;
        // if (currentUser && currentUser.token) {
          request = request.clone({
            setHeaders: {
              Authorization: `Basic ${this.getTokken()}`
            }
          });
        // }

        return next.handle(request);
      }
      getTokken() {
        // this.accessTokken = value;
        var username = "saif";
        var password = "saif123!!";
        var accessTokken = btoa(username + ":" + password);
        return accessTokken
      }
    }
