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

 /* getCurrentUser() : Observable<string[]>{
    return this.http.get('/api/login/get' ).map(
      (response: Response) => { return response.json() as string[]; });
  }*/

  logout() : Observable<Response>{
    return this.http.get('/api/logout');
  }

  isLoggedIn() : boolean{
    if(sessionStorage.getItem('currentUser'))
      return true;
    return false;
  }
}
