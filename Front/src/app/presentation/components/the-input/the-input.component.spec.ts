import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheInputComponent } from './the-input.component';

describe('TheInputComponent', () => {
  let component: TheInputComponent;
  let fixture: ComponentFixture<TheInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
