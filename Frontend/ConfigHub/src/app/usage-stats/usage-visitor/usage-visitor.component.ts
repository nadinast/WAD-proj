import { Component, OnInit } from '@angular/core';
import {Visitor} from "../calculation/visitor";
import {FileCalcService} from "../calculation/file-calc.service";
import {UserCalcService} from "../calculation/user-calc.service";
import {StatisticsService} from "../../services/http/statistics.service";

@Component({
  selector: 'ch-usage-visitor',
  templateUrl: './usage-visitor.component.html',
  styleUrls: ['./usage-visitor.component.css']
})
export class UsageVisitorComponent implements Visitor, OnInit{

  private readonly ERROR_MSG  : string = "Current usage not available!";

  private userUsage:string = this.ERROR_MSG;
  private fileUsage:string = this.ERROR_MSG;
  private userCalcService =  new UserCalcService();

  ngOnInit(): void {
    this.getCount();
  }

  constructor(private statsService : StatisticsService){

  }

  getCount() : void{
    this.userCalcService.accept(this);
  }

  calculateFileStats(file: FileCalcService): string {
    console.log("Hello file usage!");
    return this.fileUsage;
  }

  calculateUserStats(user: UserCalcService): string {
    let subscription = this.statsService.getUserStats().subscribe(
      (response) => {
        this.userUsage = response["_body"];
        console.log(this.userUsage);
      },
      (error) => {
        console.log(error)
        this.userUsage = this.ERROR_MSG;
      }
    );
    return this.userUsage;
  }

}

