import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixNotesComponentComponent } from './mix-notes-component.component';

describe('MixNotesComponentComponent', () => {
  let component: MixNotesComponentComponent;
  let fixture: ComponentFixture<MixNotesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixNotesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixNotesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
