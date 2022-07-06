import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightpositioncompComponent } from './rightpositioncomp.component';

describe('RightpositioncompComponent', () => {
  let component: RightpositioncompComponent;
  let fixture: ComponentFixture<RightpositioncompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightpositioncompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightpositioncompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
