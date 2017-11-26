import {Injectable} from "@angular/core";
import {Visitable} from "./visitable";
import {Visitor} from "./visitor";

export class FileCalcService implements Visitable{

  private crntFiles : number = 0;

  accept(v: Visitor): string {
    return v.calculateFileStats(this);
  }

  getCrntFiles() : number{
    return this.crntFiles;
  }

  updateCrntFiles(newValue : number): void{
    this.crntFiles = newValue;
  }
}
