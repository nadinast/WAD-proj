import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserLoginService} from "../services/http/userLogin.service";
import {FileUploadService} from "../services/http/fileUpload.service";

@Component({
  selector: 'ch-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private fileCount :number = 0;
  private countExists : boolean = false;

  constructor(private loginService : UserLoginService,
              private cdRef: ChangeDetectorRef,
              private fileService : FileUploadService) { }

  ngOnInit() {
  }

  getUser() : string{
    return this.loginService.getUser();
  }

  logout() : void{
    this.countExists = false;
    sessionStorage.removeItem('currentUser');
    this.cdRef.markForCheck();
    this.loginService.logout().subscribe(
      (response) => {
        console.log(response);
      },
          (error) => console.log(error)
    );
  }

  getFileCount(): void{
    this.fileService.getFiles().subscribe(
      (response) => {
        if(response.ok){
          this.fileCount = JSON.parse(response['_body']).files.length;
          this.countExists = true;
        }
      },
    );
  }
}
