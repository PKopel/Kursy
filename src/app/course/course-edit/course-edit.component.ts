import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CoursesService} from '../courses.service';
import {CourseFormService} from '../../course-form.service';
import {switchMap} from 'rxjs/operators';
import {Course} from '../course';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  course: Course;
  courseForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private coursesService: CoursesService,
              public elementsService: CourseFormService) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.coursesService.getCourse(params.get('name'));
      })).subscribe(course => {
      this.course = course;


      const formCheckBoxes = this.formBuilder.group({
        lec: course.form.indexOf('wykład') > -1,
        exe: course.form.indexOf('ćwiczenia') > -1,
        lab: course.form.indexOf('labolatoria') > -1,
      });

      formCheckBoxes.setValidators(this.elementsService.checkboxValidation());

      this.courseForm = this.formBuilder.group({
        name: [this.course.name, [Validators.required, Validators.minLength(10)]],
        etcs: [this.course.etcs, [Validators.required, Validators.min(0)]],
        semester: [this.course.semester, [Validators.required, Validators.min(1)]],
        form: formCheckBoxes,
        capacity: [this.course.capacity, [Validators.required, Validators.min(1)]],
        description: [this.course.description, [Validators.required, Validators.minLength(100)]],
        icon: [this.course.icon, Validators.required],
      });

      this.courseForm.valueChanges.subscribe(() => {
        setTimeout(() => {
          this.elementsService.onControlValueChanged(this.courseForm);
        }, 2000);
      });
    });
  }

  onSubmit(form: FormGroup): void {
    const courseForm: Array<string> = [];
    if (form.value.form.lec) {
      courseForm.push('wykład');
    }
    if (form.value.form.exe) {
      courseForm.push('ćwiczenia');
    }
    if (form.value.form.lab) {
      courseForm.push('labolatoria');
    }

    const description = form.value.description.toString();
    description.replace('\n', '');
    let slices = Math.floor(form.value.description.toString().length / 120);
    let accumulator = '';
    while (slices > -1) {
      console.log(slices);
      const slice = description.slice(120 * slices, 120 * (1 + slices));
      accumulator = slice.concat('\n').concat(accumulator);
      slices--;
    }

    this.coursesService.updateWholeCourse({
      capacity: form.value.capacity,
      description: accumulator,
      etcs: form.value.etcs,
      form: courseForm,
      icon: form.value.icon,
      name: form.value.name,
      rating: this.course.rating,
      semester: form.value.semester,
      timesRating: this.course.timesRating,
    });

    this.router.navigate(['/courses']);
  }
}
