import {Injectable} from "@angular/core";
import {Visitable} from "./visitable";
import {Visitor} from "./visitor";

export class FileCalcService implements Visitable{

  accept(v: Visitor): string {
    return v.calculateFileStats(this);
  }

}
