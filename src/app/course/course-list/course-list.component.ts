import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../courses.service';
import {Course} from '../course';
import {Filter} from '../course-filter/filter';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {
  filter: Filter = null;
  courses: Array<Course>;
  page = 1;
  pageSize = 10;
  sizes = [5, 10, 15, 20];


  constructor(private service: CoursesService) {
  }

  ngOnInit() {
    this.service.getCourses().subscribe(course => {
      this.courses = course;
      this.sizes.push(course.length);
    });
  }

  removeCourse(course: Course) {
    this.service.removeCourse(course);
  }

  setFilter(filter: Filter) {
    this.filter = filter;
  }
}
