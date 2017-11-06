import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'

@Injectable()
export class UserService{
  constructor(private http: Http){

  }

  storeUser(user: any){
    return this.http.post('https://confighub-30431.firebaseio.com/data.json', user);
  }

  getUsers(){
    return this.http.get('https://confighub-30431.firebaseio.com/data.json').map(
      (response: Response) => { return response.json(); });
  }
}
