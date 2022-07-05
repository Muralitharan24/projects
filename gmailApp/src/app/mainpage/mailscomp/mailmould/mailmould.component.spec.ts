import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailmouldComponent } from './mailmould.component';

describe('MailmouldComponent', () => {
  let component: MailmouldComponent;
  let fixture: ComponentFixture<MailmouldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailmouldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailmouldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
