import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
   ischecked:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  checking(){
     this.ischecked = !this.ischecked
  }
}
