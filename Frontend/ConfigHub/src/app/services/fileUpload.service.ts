import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'

@Injectable()
export class FileUploadService{

  constructor(private http: Http){
  }

  //ConfigFile model to be created
  storeFile(file : ConfigFile){
    return this.http.post("/api/file", file);
  }

  getFiles(){
    return this.http.get("api/files").map(
      (response: Response) => { return response.json() as ConfigFile[]; });
  }
}
