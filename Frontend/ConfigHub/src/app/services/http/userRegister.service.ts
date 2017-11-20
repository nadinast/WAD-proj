import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'

@Injectable()
export class UserRegisterService{
  constructor(private http: Http){
  }

  storeUser(user: any){
    return this.http.post('/api/register/user', user);
  }

  getUserByUsername(username : string){
    return this.http.get('/api/register/' + username).map(
      (response: Response) => { return response.json() });
  }
}
