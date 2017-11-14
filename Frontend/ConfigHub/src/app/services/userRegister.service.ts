import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'

@Injectable()
export class UserRegisterService{
  constructor(private http: Http){
  }

  storeUser(user: any){
    return this.http.post('/api/users/user', user);
  }

  getUsers(){
    return this.http.get('/api/users/allUsers').map(
      (response: Response) => { return response.json() as string[]; });
  }
}
