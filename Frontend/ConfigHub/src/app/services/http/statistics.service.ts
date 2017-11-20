import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";

@Injectable()
export class StatisticsService{
  constructor(private http: Http){
  }

  getUserStats() : Observable<Response>{
    return this.http.get('/api/statistics/general/users');
  }

  getEmailDomainStats(userEmail: string) : Observable<Response>{
    return this.http.get('/api/statistics/email/' + userEmail);
  }
}
