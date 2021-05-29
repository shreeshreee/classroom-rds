import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserConfirmComponent } from './create-user-confirm.component';

describe('CreateUserConfirmComponent', () => {
  let component: CreateUserConfirmComponent;
  let fixture: ComponentFixture<CreateUserConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
