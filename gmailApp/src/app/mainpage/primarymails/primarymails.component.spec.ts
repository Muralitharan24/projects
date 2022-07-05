import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarymailsComponent } from './primarymails.component';

describe('PrimarymailsComponent', () => {
  let component: PrimarymailsComponent;
  let fixture: ComponentFixture<PrimarymailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimarymailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimarymailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
