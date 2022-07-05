import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftcompComponent } from './draftcomp.component';

describe('DraftcompComponent', () => {
  let component: DraftcompComponent;
  let fixture: ComponentFixture<DraftcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
