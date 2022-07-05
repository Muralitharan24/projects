import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-primarymails',
  templateUrl: './primarymails.component.html',
  styleUrls: ['./primarymails.component.css']
})
export class PrimarymailsComponent implements OnInit {
  compval:any = this.demo.mailArr;
  d:any = new Date()
  months:string[] = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  findday:any = this.months[this.d.getMonth()] + " " + this.d.getDate()
  constructor(public demo:MyserviceService) { }

  ngOnInit(): void {
  }  
  clearPrimary(ind:any){        
    this.demo.TrashArr.push(this.compval[ind])
    this.demo.mailArr.splice(ind,1);  
    if(this.demo.TrashArr.length == 0){
      this.demo.findEmpty = true;
    }else{
       this.demo.findEmpty = false;     
    }
  }
  starPrimary(str:any){
    this.demo.starredArr.push(this.compval[str]);
    this.demo.mailArr.slice(str,str+1);
    if(this.demo.starredArr.length == 0){
        this.demo.staredpara = true;
    }else{
       this.demo.staredpara = false
    }
  }
}
