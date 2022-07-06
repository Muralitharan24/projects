import { Component, HostListener, OnInit } from '@angular/core';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-rightpositioncomp',
  templateUrl: './rightpositioncomp.component.html',
  styleUrls: ['./rightpositioncomp.component.css']
})
export class RightpositioncompComponent implements OnInit {
  constructor( public mount : PositionService) { }

  ngOnInit(): void {
  }
  erase(compEl:any){
      this.mount.positionArr.splice(compEl,1);
  }
  deletingEl(eve:any){
     this.mount.positionArr.splice(eve,1)
  }
  demo(elem:any){
     this.mount.correct = elem
  }
}
