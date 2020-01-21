import {Injectable} from '@angular/core';
import {Course} from './course';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private db: AngularFireDatabase) {
  }

  getCourses(): Observable<Array<Course>> {
    return this.db.list<Course>('courses').valueChanges();
  }

  getCourse(name: string): Observable<Course> {
    return this.db.object<Course>('courses/' + name).valueChanges();
  }

  addCourse(course: Course) {
    this.db.list('courses').set(String(course.name), course);
  }

  removeCourse(course: Course) {
    this.db.object('courses/' + course.name).remove();
  }

  updateCourse(course: Course, property: string) {
    this.db.object('courses/' + course.name + '/' + property).set(course[property]);
  }

  updateWholeCourse(course: Course) {
    this.db.object('courses/' + course.name).update(course);
  }
}
