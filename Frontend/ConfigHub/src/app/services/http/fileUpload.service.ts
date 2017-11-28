import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'
import {ConfigFile} from "../../config-file-view/config-file-list/config-file.model";

@Injectable()
export class FileUploadService{

  constructor(private http: Http){
  }

  storeFile(file : ConfigFile){
    return this.http.post("/api/files/store", file);
  }

  getFiles(){
    return this.http.get("/api/files/load").map(
      (response: Response) => { return response.json() as ConfigFile[]; });
  }
}
