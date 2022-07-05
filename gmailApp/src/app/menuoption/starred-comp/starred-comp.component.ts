import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-starred-comp',
  templateUrl: './starred-comp.component.html',
  styleUrls: ['./starred-comp.component.css']
})
export class StarredCompComponent implements OnInit {

  constructor(public demo:MyserviceService) { }

  ngOnInit(): void {
  }

}
