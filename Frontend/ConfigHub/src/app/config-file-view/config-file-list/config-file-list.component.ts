import { Component, OnInit } from '@angular/core';
import { ConfigFile } from "./config-file.model";
import {FileUploadService} from "../../services/http/fileUpload.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ch-config-file-list',
  templateUrl: './config-file-list.component.html',
  styleUrls: ['./config-file-list.component.css']
})
export class ConfigFileListComponent implements OnInit {

  private content : string = "";
  private clickedFile : ConfigFile;
  private showDialog : boolean = false;
  private configFiles: ConfigFile[] = [];
  private readonly START_INDEX_FILE_NAME = 37;

  constructor(private fileService: FileUploadService,
              private router: Router) {
    this.getFiles();
  }

  ngOnInit() {
  }

  getFiles(): void{
    this.fileService.getFiles().subscribe(
      (response) => {
        let name;
        let refs = JSON.parse(response['_body']).files;
        refs.forEach((route) => {
           name = route.slice(this.START_INDEX_FILE_NAME, route.length);
           this.configFiles.push(new ConfigFile(name, route));
        });
      },
          (error) => console.log(error)
    );
  }

  showFile(file: ConfigFile) : void{
    this.clickedFile = file;
    this.showDialog = true;
    this.fileService.getFile(file.name).subscribe(
      response => {
        console.log(response);
        this.content = response['_body'];
      },
      error => console.log(error)
    );
  }
}
