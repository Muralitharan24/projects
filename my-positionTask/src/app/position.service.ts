import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  correct!:any
  positionArr:any = [
    {"p1":143 + "px","p2":120 + "px"},
    {"p1":183 + "px","p2":100 + "px"},
    {"p1":110 + "px","p2":170 + "px"},
    {"p1":113 + "px","p2":60 + "px"},    
  ];
  showComp:boolean = false;
  constructor() { }
  find(ele:any){
    this.positionArr.push({"p1" :ele.x+"px","p2" : ele.y+"px"});
  }
  moving(val:any,val1:any){
      if(val != "" && val1 != ""){
        this.positionArr.push({"p1" : val+"px","p2" : val1+"px"});
      }else{
          setTimeout(function(){
            alert("The X and Y is empty.")
          },100);
      }    
  }
}

