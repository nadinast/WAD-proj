import {UserLoginService} from "../http/userLogin.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginGuardService implements CanActivate {
  constructor(public router: Router,
              private loginService : UserLoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['login', 'oops']);
      return false;
    }
    return true;
  }

}


