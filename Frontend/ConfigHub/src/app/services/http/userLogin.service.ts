import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Http} from "@angular/http"
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserLoginService{

  constructor(private http: Http){
  }

  login(user: any) : Observable<Response>{
    return this.http.post('/api/login', user);
  }

  logout() : Observable<Response>{
    return this.http.get('/api/logout');
  }

  // noinspection JSMethodCanBeStatic
  isLoggedIn() : boolean{
    if(sessionStorage.getItem('currentUser'))
      return true;
    return false;
  }

  getUser(): string{
    return sessionStorage.getItem('currentUser');
  }
}
