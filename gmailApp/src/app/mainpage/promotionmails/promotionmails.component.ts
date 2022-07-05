import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-promotionmails',
  templateUrl: './promotionmails.component.html',
  styleUrls: ['./promotionmails.component.css']
})
export class PromotionmailsComponent implements OnInit {

  constructor(public demo:MyserviceService) { }

  ngOnInit(): void {
  }
  clearPromotions(e:any){
    this.demo.TrashArr.push(this.demo.promotionArr[e])
    this.demo.promotionArr.splice(e,1);
    if(this.demo.TrashArr.length == 0){
      this.demo.findEmpty = true;
    }else{
       this.demo.findEmpty = false;     
    }
  }
  starPromotion(c1:any){
    this.demo.starredArr.push(this.demo.promotionArr[c1]);
    this.demo.promotionArr.slice(c1,c1+1);
    if(this.demo.starredArr.length == 0){
      this.demo.staredpara = true;
    }else{
      this.demo.staredpara = false
    }
  }
} 
