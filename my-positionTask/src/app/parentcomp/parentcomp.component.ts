import { Component, OnInit } from '@angular/core';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-parentcomp',
  templateUrl: './parentcomp.component.html',
  styleUrls: ['./parentcomp.component.css']
})
export class ParentcompComponent implements OnInit {

  constructor(public model:PositionService){}  

  ngOnInit(): void {
  }

  displaying(){
    this.model.showComp = !this.model.showComp
}
}
