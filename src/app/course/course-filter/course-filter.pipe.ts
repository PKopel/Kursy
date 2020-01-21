import {Pipe, PipeTransform} from '@angular/core';
import {Course} from '../course';
import {Filter} from './filter';

@Pipe({
  name: 'courseFilter'
})
export class CourseFilterPipe implements PipeTransform {

  transform(courses: Array<Course>, filter: Filter): Array<Course> {
    if (!courses) {
      return [];
    }
    if (!filter) {
      return courses;
    }
    let filteredCourses: Array<Course> = courses;
    if (filter.name !== null) {
      filteredCourses = filteredCourses.filter(course => course.name.toLowerCase().indexOf(filter.name.toLowerCase()) >= 0);
    } else {
      console.log('no name filter');
    }
    if (filter.etcs !== null && filter.etcs.length > 0) {
      filteredCourses = filteredCourses.filter(course => filter.etcs.indexOf(course.etcs) >= 0);
    } else {
      console.log('no etcs filter');
    }
    if (filter.rating !== null && filter.rating.length > 0) {
      filteredCourses = filteredCourses.filter(course => filter.rating.indexOf(Math.round(course.rating)) >= 0);
    } else {
      console.log('no rating filter');
    }
    if (filter.semester !== null && filter.semester.length > 0) {
      filteredCourses = filteredCourses.filter(course => filter.semester.indexOf(course.semester) >= 0);
    } else {
      console.log('no semester filter');
    }
    return filteredCourses;
  }

}
