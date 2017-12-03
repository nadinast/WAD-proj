import { Component, OnInit } from '@angular/core';
import {FileUploadService} from "../services/http/fileUpload.service";
import {ConfirmationService, Message} from "primeng/primeng";

@Component({
  selector: 'ch-new-config-file',
  templateUrl: './new-config-file.component.html',
  styleUrls: ['./new-config-file.component.css']
})
export class NewConfigFileComponent implements OnInit {

  private errorMessage : string = "";
  private name: string = "";
  private needName : boolean = false;
  private saved : boolean = false;
  private text : string;
  private msgs : Message[] = [];
  constructor(private confirmationService: ConfirmationService,
              private fileService: FileUploadService) { }

  ngOnInit() {
  }

  saveFile() : void{
    this.fileService.saveFile(this.text, this.name).subscribe(
      (response) => {
        console.log(response);
        if(response.ok) {
          this.saved = true
          this.msgs = [{severity:'success', summary:'Success', detail:'File succesfully uploaded'}];
        }
      },
      (error) => {
        console.log(error['_body'])
        this.msgs = [{severity:'error', summary:'Error', detail: error['_body']}];
      }
    );
  }

  confirmSave() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to save this file in your repository?',
      header: 'Save',
      icon: 'fa fa-question-circle',
      accept: () => {
        if(this.name == "")
          this.msgs = [{severity:'error', summary:'Error', detail:'No file name provided'}];
        else
          this.saveFile();
      },
      reject: () => {
        this.msgs = [{severity:'warn', summary:'Warning', detail:'File was not saved'}];
      }
    });
  }

  enterFileName() : void{
    this.needName = !this.needName;
  }

  resetText() : void{
    this.confirmationService.confirm({
      message: 'Are you sure you want to create new file? All progress will be lost!',
      header: 'Create new file',
      icon: 'fa fa-question-circle',
      accept: () => {
          this.text = "";
      },
      reject: () => {
        this.msgs = [{severity:'info', summary:'Info', detail:'New file not created'}];
      }
    });
  }

  export() : void{
    this.enterFileName();

  }

}
