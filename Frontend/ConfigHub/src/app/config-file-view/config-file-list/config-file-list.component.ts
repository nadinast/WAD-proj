import { Component, OnInit } from '@angular/core';
import { ConfigFile } from "./config-file.model";

@Component({
  selector: 'ch-config-file-list',
  templateUrl: './config-file-list.component.html',
  styleUrls: ['./config-file-list.component.css']
})
export class ConfigFileListComponent implements OnInit {

  configFiles: ConfigFile[] = [];
  constructor() {
    this.configFiles.push(new ConfigFile("File1","20/04/2017", "20/04/2017"));
    this.configFiles.push(new ConfigFile("File2", "20/05/2015", "10/04/2016"));
    this.configFiles.push(new ConfigFile("File3", "09/01/2014", "25/09/2017"));
    this.configFiles.push(new ConfigFile("File3", "09/01/2014", "25/09/2017"));
    this.configFiles.push(new ConfigFile("File3", "09/01/2014", "25/09/2017"));
    this.configFiles.push(new ConfigFile("File3", "09/01/2014", "25/09/2017"));
    this.configFiles.push(new ConfigFile("File3", "09/01/2014", "25/09/2017"));
    this.configFiles.push(new ConfigFile("File3", "09/01/2014", "25/09/2017"));
    this.configFiles.push(new ConfigFile("File3", "09/01/2014", "25/09/2017"));
    this.configFiles.push(new ConfigFile("File3", "09/01/2014", "25/09/2017"));
    this.configFiles.push(new ConfigFile("File3", "09/01/2014", "25/09/2017"));
    this.configFiles.push(new ConfigFile("File3", "09/01/2014", "25/09/2017"));
    this.configFiles.push(new ConfigFile("File3", "09/01/2014", "25/09/2017"));
  }

  ngOnInit() {
  }

}
