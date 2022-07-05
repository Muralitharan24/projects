import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-menuoption',
  templateUrl: './menuoption.component.html',
  styleUrls: ['./menuoption.component.css']
})
export class MenuoptionComponent implements OnInit {
   var1:any = "Inbox";
   var2:any = "";
  constructor(public demo:MyserviceService) { }

  ngOnInit(): void {
  }
  mytest(el:any){
    if(el == "Inbox"){
       this.var1 = "Inbox"
       this.var2 = ""
    }else{
      this.var1 = "";
      this.var2 = el 
    }
  }
}
