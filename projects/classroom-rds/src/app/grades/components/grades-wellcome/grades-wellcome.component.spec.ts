import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesWellcomeComponent } from './grades-wellcome.component';

describe('GradesWellcomeComponent', () => {
  let component: GradesWellcomeComponent;
  let fixture: ComponentFixture<GradesWellcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradesWellcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesWellcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
