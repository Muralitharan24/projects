import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailscompComponent } from './mainpage/mailscomp/mailscomp.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PrimarymailsComponent } from './mainpage/primarymails/primarymails.component';
import { PromotionmailsComponent } from './mainpage/promotionmails/promotionmails.component';
import { SocialmailsComponent } from './mainpage/socialmails/socialmails.component';
import { DeleteCompComponent } from './menuoption/delete-comp/delete-comp.component';
import { DraftcompComponent } from './menuoption/draftcomp/draftcomp.component';
import { StarredCompComponent } from './menuoption/starred-comp/starred-comp.component';

const routes: Routes = [
  {path:"",component:MailscompComponent,
  children:[{path:"",component:PrimarymailsComponent},
  {path:"Primary",component:PrimarymailsComponent},
  {path:"Social",component:SocialmailsComponent},
  {path:"Promotions",component:PromotionmailsComponent}]},
  {path:"Inbox",component:MailscompComponent,
  children:[{path:"",component:PrimarymailsComponent},
  {path:"Primary",component:PrimarymailsComponent},
  {path:"Social",component:SocialmailsComponent},
  {path:"Promotions",component:PromotionmailsComponent}]},
  {path:"Starred",component:StarredCompComponent},
  {path:"Drafts",component:DraftcompComponent},
  {path:"Trash",component:DeleteCompComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }