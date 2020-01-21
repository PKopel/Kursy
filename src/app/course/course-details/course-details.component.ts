import {Component, OnInit} from '@angular/core';
import {Course} from '../course';
import {CoursesService} from '../courses.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {AuthenticationService} from '../../user/authentication.service';
import {User} from 'firebase';
import {AuthorizationService} from '../../user/authorization.service';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;
  currentUser: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private coursesService: CoursesService,
              private userService: UserService,
              private authenticationService: AuthenticationService,
              public authorizationService: AuthorizationService) {
    authenticationService.userData.subscribe(data => this.currentUser = data);
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.coursesService.getCourse(params.get('name'));
      })).subscribe(course => this.course = course);
  }

  enroll(): void {
    this.course.capacity--;
    this.coursesService.updateCourse(this.course, 'capacity');
    const user = this.authorizationService.getUser(this.currentUser.uid);
    if (user.courses) {
      user.courses.push({name: this.course.name, rated: false});
    } else {
      user.courses = [{name: this.course.name, rated: false}];
    }
    this.userService.updateUser(user, this.currentUser.uid);
  }
}
