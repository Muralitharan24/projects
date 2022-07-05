import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmailsComponent } from './socialmails.component';

describe('SocialmailsComponent', () => {
  let component: SocialmailsComponent;
  let fixture: ComponentFixture<SocialmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
