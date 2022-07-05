import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionmailsComponent } from './promotionmails.component';

describe('PromotionmailsComponent', () => {
  let component: PromotionmailsComponent;
  let fixture: ComponentFixture<PromotionmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionmailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
