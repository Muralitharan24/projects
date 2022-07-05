import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredCompComponent } from './starred-comp.component';

describe('StarredCompComponent', () => {
  let component: StarredCompComponent;
  let fixture: ComponentFixture<StarredCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarredCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarredCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
