import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-dialogcomp',
  templateUrl: './dialogcomp.component.html',
  styleUrls: ['./dialogcomp.component.css']
})
export class DialogcompComponent implements OnInit {
  @HostListener('window:keydown.escape') spaceEvent(){
     this.outClick();
  }
  constructor(public createDir :PositionService) { }

  ngOnInit(): void {
  }
  creating(elvalue:any,el1value:any){    
     this.createDir.showComp = !this.createDir.showComp      
     this.createDir.moving(elvalue,el1value);     
  }
  outClick(){
    this.createDir.showComp = !this.createDir.showComp  
  }
}
