import { Component } from '@angular/core';
import { MyserviceService } from './service/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inbox';
  display1:boolean = false;
  makeposition:boolean = false;
  d:any = new Date()
  months:string[] = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  findday:any = this.months[this.d.getMonth()] + " " + this.d.getDate()
  constructor(public demo:MyserviceService){}
  displaying(){
      this.demo.isDisplay = !this.demo.isDisplay;
      this.demo.isShown = !this.demo.isShown
  }
  createShow(){
      this.display1 = true;
  }
  createHide(cont1:any,cont2:any){
       this.display1 = false;
       if(cont2 != ""){
          this.demo.draftArr.push({"dispatcher" :"Draft","descpHead" : cont1,"descpContent":" - " + cont2,"date" : this.findday});
       }else{
          console.log("none")
       };       
       if(this.demo.draftArr.length == 0){
        this.demo.isempty = true
      }else{
         this.demo.isempty = false
      }
      console.log(this.demo.draftArr)
  }
}
