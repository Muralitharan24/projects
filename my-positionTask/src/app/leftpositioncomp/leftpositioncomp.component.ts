import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-leftpositioncomp',
  templateUrl: './leftpositioncomp.component.html',
  styleUrls: ['./leftpositioncomp.component.css']
})
export class LeftpositioncompComponent implements OnInit { 
  testArr :any = []; 
  constructor(public direct:PositionService) { }
  ngOnInit(): void {
  }
  Add(el:any){
    this.direct.find(el);
    this.testArr = this.direct.positionArr;
    // console.log(this.direct.containers);
    // console.log(el)
    // console.log(this.direct.positionArr)
    // console.log(this.testArr);
  }
  highlight(d:any){
     this.direct.correct = d
  }
  remove(d:any){
    this.direct.positionArr.splice(d,1)
  }
}
