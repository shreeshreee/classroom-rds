import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreescolarComponent } from './preescolar.component';

describe('PreescolarComponent', () => {
  let component: PreescolarComponent;
  let fixture: ComponentFixture<PreescolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreescolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreescolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
