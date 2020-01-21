import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Filter} from './filter';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Course} from '../course';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.css']
})
export class CourseFilterComponent implements OnInit {
  @Output() courseFilter = new EventEmitter<Filter>();
  @Input() courses: Array<Course>;

  filterForm: FormGroup;
  filters = [
    {label: 'Nazwa:', name: 'name'},
    {label: 'Semestr:', name: 'semester'},
    {label: 'Ocena:', name: 'rating'},
    {label: 'ETCS:', name: 'etcs'},
  ];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      name: '',
      semester: this.buildValues('semester'),
      rating: this.buildValues('rating'),
      etcs: this.buildValues('etcs')
    });
  }

  onSubmit(form: FormGroup): Filter {
    return {
      semester: form.value.semester.map((v, i) => v ? this.getValues('semester')[i] : null)
        .filter(v => v !== null),
      etcs: form.value.etcs.map((v, i) => v ? this.getValues('etcs')[i] : null)
        .filter(v => v !== null),
      rating: form.value.rating.map((v, i) => v ? this.getValues('rating')[i] : null)
        .filter(v => v !== null),
      name: form.value.name
    };
  }

  private buildValues(name: string) {
    return this.formBuilder.array(this.getValues(name).map(_ => this.formBuilder.control(false)));
  }

  getValues(key: string): Array<number> {
    const values: Array<number> = new Array<number>();
    this.courses.forEach(course => {
      if (values.indexOf(Math.round(+course[key])) < 0) {
        values.push(Math.round(+course[key]));
      }
    });
    return values.sort();
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.courses.map(course => course.name).filter(name => name.toLowerCase().indexOf(term.toLowerCase()) > -1))
    );
}
