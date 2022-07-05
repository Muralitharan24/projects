import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-mailscomp',
  templateUrl: './mailscomp.component.html',
  styleUrls: ['./mailscomp.component.css']
})
export class MailscompComponent implements OnInit {
    findColor:any = "Primary";
    findBlue:any = "";
    findGreen:any = "";
  constructor(public demo:MyserviceService) { }

  ngOnInit(): void {
  }
  test(el1:any){
      if(el1 == "Primary"){
          this.findColor = "Primary";
          this.findBlue = "";
          this.findGreen = "";
      }else if(el1 == "Social"){
          this.findBlue = "Social";
          this.findColor = "";
          this.findGreen = "";
      }else {
          this.findGreen = "Promotions";
          this.findColor = "";
          this.findBlue = "";
      }   
  }
}
