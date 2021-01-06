import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTeachersComponent } from './course-teachers.component';

describe('CourseTeachersComponent', () => {
  let component: CourseTeachersComponent;
  let fixture: ComponentFixture<CourseTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
