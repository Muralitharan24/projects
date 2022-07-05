import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-draftcomp',
  templateUrl: './draftcomp.component.html',
  styleUrls: ['./draftcomp.component.css']
})
export class DraftcompComponent implements OnInit {
   
  constructor(public demo:MyserviceService) { }

  ngOnInit(): void {
  }
}
