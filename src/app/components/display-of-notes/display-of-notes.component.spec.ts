import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOfNotesComponent } from './display-of-notes.component';

describe('DisplayOfNotesComponent', () => {
  let component: DisplayOfNotesComponent;
  let fixture: ComponentFixture<DisplayOfNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayOfNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayOfNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
