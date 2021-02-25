import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideLoginComponent } from './aside-login.component';

describe('AsideLoginComponent', () => {
  let component: AsideLoginComponent;
  let fixture: ComponentFixture<AsideLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
