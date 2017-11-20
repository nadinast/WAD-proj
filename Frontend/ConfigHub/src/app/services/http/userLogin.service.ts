import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'

@Injectable()
export class UserLoginService{
  constructor(private http: Http){
  }

  setCurrentUser(user: any){
    return this.http.post('/api/users/currentUser', user);
  }

  getCurrentUser(){
    return this.http.get('/api/users/currentUser').map(
      (response: Response) => { return response.json() as string[]; });
  }
}
