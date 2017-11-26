import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserLoginService{
  private loginUrl = 'http://localhost:8080/api/login';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){
  }

  setCurrentUser(user: any) : Observable<Response>{
    return this.http.post(this.loginUrl, user, this.headers);
  }

  getCurrentUser() : Observable<string[]>{
    return this.http.get('/api/users/currentUser').map(
      (response: Response) => { return response.json() as string[]; });
  }
}
