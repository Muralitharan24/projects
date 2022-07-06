import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftpositioncompComponent } from './leftpositioncomp.component';

describe('LeftpositioncompComponent', () => {
  let component: LeftpositioncompComponent;
  let fixture: ComponentFixture<LeftpositioncompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftpositioncompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftpositioncompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
