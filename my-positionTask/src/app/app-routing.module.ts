import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DialogcompComponent } from './dialogcomp/dialogcomp.component';
import { LeftpositioncompComponent } from './leftpositioncomp/leftpositioncomp.component';
import { ParentcompComponent } from './parentcomp/parentcomp.component';
import { RightpositioncompComponent } from './rightpositioncomp/rightpositioncomp.component';

const routes: Routes = [
  {path:"",component:ParentcompComponent,
   children : [
      {path:"Tab/:id",component:LeftpositioncompComponent}
   ]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
