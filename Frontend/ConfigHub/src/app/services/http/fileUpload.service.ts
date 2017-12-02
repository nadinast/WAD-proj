import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'
import {ConfigFile} from "../../config-file-view/config-file-list/config-file.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FileUploadService{

  constructor(private http: Http){
  }

  getFiles() : Observable<Response>{
    return this.http.get("/api/files/load");
  }

  getFile(fileName: string) : Observable<Response>{
    return this.http.get("/api/files/load/" + fileName);
  }

}
