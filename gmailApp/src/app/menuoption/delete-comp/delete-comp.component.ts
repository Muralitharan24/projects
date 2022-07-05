import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-delete-comp',
  templateUrl: './delete-comp.component.html',
  styleUrls: ['./delete-comp.component.css']
})
export class DeleteCompComponent implements OnInit {

  constructor(public demo:MyserviceService) { }

  ngOnInit(): void {
  }

}
