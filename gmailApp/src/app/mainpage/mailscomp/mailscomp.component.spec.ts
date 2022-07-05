import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailscompComponent } from './mailscomp.component';

describe('MailscompComponent', () => {
  let component: MailscompComponent;
  let fixture: ComponentFixture<MailscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailscompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
