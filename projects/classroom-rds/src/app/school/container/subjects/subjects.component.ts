import { SchoolService } from '@rds-school/services/school.service';
import { SubjectDialogComponent } from './../../components/subject-dialog/subject-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SchoolLevel } from '~/app/auth/models/user.enum';
import { ClassesEntityService } from '~/app/store/class/classes-entity.service';
import { Class, ClassState } from '../../models/class.model';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  classes$: Observable<Class[]>
  loading$: Observable<boolean>
  classSub: Subject<Partial<Class>> = new Subject<Partial<Class>>();
  slevelKeys;
  slevels = SchoolLevel;
  states = ClassState;

  searchForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private classesES: ClassesEntityService,
    private schoolService: SchoolService,
    private dialog: MatDialog
  ) {

    this.initSearchForm();
    this.slevelKeys = Object.keys(this.slevels).filter(x => x.length > 5);
    this.loading$ = this.classesES.loading$;
    this.classesES.entities$
  }

  ngOnInit(): void {

  }
  initSearchForm() {
    this.searchForm = this.fb.group({
      grade: new FormControl()
    })
  }
  onSearch(grade) {
    this.classesES.getWithQuery({ grade });
    this.classes$ = this.classesES.entities$.pipe(map(classes => classes.filter(x => x.id == grade)))

  }
  openSubjectDialog() {
    const newClass: Partial<Class> = { classState: this.states.BORRADOR };
    const dialogRef = this.dialog.open(SubjectDialogComponent, {
      data: { ...newClass, isNew: true }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.classesES.add(result.course);
      }
    })
  }
}
