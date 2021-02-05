import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeConductSchoolComponent } from './code-conduct-school.component';

describe('CodeConductSchoolComponent', () => {
  let component: CodeConductSchoolComponent;
  let fixture: ComponentFixture<CodeConductSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeConductSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeConductSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
