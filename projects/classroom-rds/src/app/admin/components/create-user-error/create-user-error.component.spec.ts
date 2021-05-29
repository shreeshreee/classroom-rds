import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserErrorComponent } from './create-user-error.component';

describe('CreateUserErrorComponent', () => {
  let component: CreateUserErrorComponent;
  let fixture: ComponentFixture<CreateUserErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
