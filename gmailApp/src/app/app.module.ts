import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuoptionComponent } from './menuoption/menuoption.component';
import { MyserviceService } from './service/myservice.service';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CheckboxComponent } from './mainpage/checkbox/checkbox.component';
import { PrimarymailsComponent } from './mainpage/primarymails/primarymails.component';
import { MailscompComponent } from './mainpage/mailscomp/mailscomp.component';
import { SocialmailsComponent } from './mainpage/socialmails/socialmails.component';
import { PromotionmailsComponent } from './mainpage/promotionmails/promotionmails.component';
import { MailmouldComponent } from './mainpage/mailscomp/mailmould/mailmould.component';
import { ShowifDirective } from './directives/showif.directive';
import { DraftcompComponent } from './menuoption/draftcomp/draftcomp.component';
import { StarredCompComponent } from './menuoption/starred-comp/starred-comp.component';
import { DeleteCompComponent } from './menuoption/delete-comp/delete-comp.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuoptionComponent,
    MainpageComponent,
    CheckboxComponent,
    PrimarymailsComponent,
    MailscompComponent,
    SocialmailsComponent,
    PromotionmailsComponent,
    MailmouldComponent,
    ShowifDirective,
    DraftcompComponent,
    StarredCompComponent,
    DeleteCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
