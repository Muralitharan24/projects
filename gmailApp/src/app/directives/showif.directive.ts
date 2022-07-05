import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowif]'
})
export class ShowifDirective {
  @Input() set appShowif(value1:boolean){
       if(value1){
           this.container.createEmbeddedView(this.temp);
       }else{
          this.container.clear();
       }
  }
  constructor(public temp:TemplateRef<any>,public container :ViewContainerRef) { }

}
