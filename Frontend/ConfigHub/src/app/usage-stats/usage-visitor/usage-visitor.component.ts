import { Component, OnInit } from '@angular/core';
import {Visitor} from "../calculation/visitor";
import {FileCalcService} from "../calculation/file-calc.service";
import {UserCalcService} from "../calculation/user-calc.service";
import {StatisticsService} from "../../services/http/statistics.service";

@Component({
  selector: 'ch-usage-visitor',
  templateUrl: './usage-visitor.component.html',
  styleUrls: ['../usage.style.css']
})
export class UsageVisitorComponent implements Visitor, OnInit{

  private readonly ERROR_MSG  : string = "Current usage not available!";
  private readonly SUCCESS_MSG : string = "Current registered users: ";

  private userUsage:string = this.ERROR_MSG;
  private fileUsage:string = this.ERROR_MSG;

  ngOnInit(): void {
    this.getCount();
  }

  constructor(private statsService : StatisticsService){

  }

  getCount() : void{
    let userCalcService =  new UserCalcService();
    userCalcService.accept(this);
  }

  calculateFileStats(fileCalcService: FileCalcService): string {
    console.log("Hello file usage!");
    return this.fileUsage;
  }

  calculateUserStats(userCalcService: UserCalcService): string {
    let subscription = this.statsService.getUserStats().subscribe(
      (response) => {
        userCalcService.updateCrntUsers(response["_body"]);
        this.userUsage = this.SUCCESS_MSG + userCalcService.getCrntUsers();

      },
      (error) => {
        console.log(error)
        this.userUsage = this.ERROR_MSG;
      }
    );
    return this.userUsage;
  }

}

