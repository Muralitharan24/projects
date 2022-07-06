import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftpositioncompComponent } from './leftpositioncomp/leftpositioncomp.component';
import { RightpositioncompComponent } from './rightpositioncomp/rightpositioncomp.component';
import { PositionService }from './position.service';
import { DialogcompComponent } from './dialogcomp/dialogcomp.component';
import { PositionpipePipe } from './pipes/positionpipe.pipe';
import { ParentcompComponent } from './parentcomp/parentcomp.component'
@NgModule({
  declarations: [
    AppComponent,
    LeftpositioncompComponent,
    RightpositioncompComponent,
    DialogcompComponent,
    PositionpipePipe,
    ParentcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
