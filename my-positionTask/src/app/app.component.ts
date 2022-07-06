import { Component } from '@angular/core';
import { PositionService } from './position.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-positionTask';  
  constructor(public model:PositionService){}
  displaying(){
      this.model.showComp = !this.model.showComp
  }
}
