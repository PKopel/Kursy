import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoursesService} from '../courses.service';
import {CourseFormService} from '../../course-form.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  courseForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private coursesService: CoursesService,
    public elementsService: CourseFormService) {
  }

  ngOnInit(): void {
    const formCheckBoxes = this.formBuilder.group({
      lec: '',
      exe: '',
      lab: '',
    });

    formCheckBoxes.setValidators(this.elementsService.checkboxValidation());

    this.courseForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      etcs: ['', [Validators.required, Validators.min(0)]],
      semester: ['', [Validators.required, Validators.min(1)]],
      form: formCheckBoxes,
      capacity: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required, Validators.minLength(100)]],
      icon: ['', Validators.required],
    })
    ;

    this.courseForm.valueChanges.subscribe(() => {
      setTimeout(() => {
        this.elementsService.onControlValueChanged(this.courseForm);
      }, 2000);
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

    this.coursesService.addCourse({
      capacity: form.value.capacity,
      description: accumulator,
      etcs: form.value.etcs,
      form: courseForm,
      icon: form.value.icon,
      name: form.value.name,
      rating: 0,
      semester: form.value.semester,
      timesRating: 0,
    });

    this.router.navigate(['/courses']);
  }
}
