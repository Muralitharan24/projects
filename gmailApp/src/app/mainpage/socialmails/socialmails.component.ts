import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-socialmails',
  templateUrl: './socialmails.component.html',
  styleUrls: ['./socialmails.component.css']
})
export class SocialmailsComponent implements OnInit {

  constructor(public demo:MyserviceService) { }

  ngOnInit(): void {
  }
  clearSocial(e:any){
    this.demo.TrashArr.push(this.demo.socialArr[e])
    this.demo.socialArr.splice(e,1)
    if(this.demo.TrashArr.length == 0){
      this.demo.findEmpty = true;
    }else{
       this.demo.findEmpty = false;     
    }
  }
  starSocial(c1:any){
    this.demo.starredArr.push(this.demo.socialArr[c1]);
    this.demo.socialArr.slice(c1,c1+1);
    if(this.demo.starredArr.length == 0){
      this.demo.staredpara = true;
    }else{
      this.demo.staredpara = false
    }
  }
}
