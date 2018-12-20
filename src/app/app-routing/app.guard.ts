import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      let roles = next.data["roles"];
      let user:any = {};
      // if (this.userService.isAuthenticated()){
      //     //logged in so return true
      //     user = this.userService.getLoggedInUser();
      //     if(roles[0]=="admin"){
      //       if(user.membership_status == roles[0]){
      //         return true;
      //       } else {
      //         this.router.navigate([''])
      //       }
      //     } else {
      //       return true;
      //     }
      // } else {
      //   // not logged in so redirect to login page with the return url
      //   this.toastr.error("Please login first");
      //   this.router.navigate(['/main'], { queryParams: { returnUrl: state.url }});
        return false;
      // }
  }
}
