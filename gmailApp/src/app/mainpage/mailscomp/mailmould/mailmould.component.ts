import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-mailmould',
  templateUrl: './mailmould.component.html',
  styleUrls: ['./mailmould.component.css']
})
export class MailmouldComponent implements OnInit {
  @Input('findval') myval!:any;
  @Input('indexvalue') i!:any;
   showDelete:boolean = false;
   showDate:boolean = true;
   iscolor:boolean = false;
  constructor(public demo:MyserviceService) { }
  @Output() delete = new EventEmitter();
  @Output() starred = new EventEmitter();
  ngOnInit(): void {
  }
  showHover(){
    this.showDelete = true;
    this.showDate = false;
  }
  hideHover(){
    this.showDate = true;
    this.showDelete = false;
  } 
  clearvalue(ind:any){
     this.delete.emit(ind);
  }
  starredvalue(str:any){
      this.starred.emit(str);
  }
  starColoruring(){
    this.iscolor = !this.iscolor
  }
}
