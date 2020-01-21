import {Component, Input, OnInit} from '@angular/core';
import {StarRatingComponent} from 'ng-starrating';
import {Course} from '../course';
import {CoursesService} from '../courses.service';
import {AuthorizationService} from '../../user/authorization.service';
import {User} from 'firebase';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-course-rating',
  template: `
    <star-rating [value]="course.rating"
                 totalstars="5"
                 checkedcolor="gold"
                 uncheckedcolor="transparent"
                 size="24px"
                 [readonly]="readonly"
                 (rate)="onRate($event)"></star-rating>
  `
})
export class CourseRatingComponent implements OnInit {
  @Input() course: Course;
  @Input() readonly: boolean;
  @Input() currentUser: User;

  constructor(private coursesService: CoursesService,
              private userService: UserService,
              private authorizationService: AuthorizationService) {
  }

  ngOnInit() {
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    this.course.rating = (this.course.rating * this.course.timesRating + $event.newValue) / (this.course.timesRating + 1);
    this.course.timesRating = this.course.timesRating + 1;
    this.coursesService.updateCourse(this.course, 'rating');
    this.coursesService.updateCourse(this.course, 'timesRating');
    const user = this.authorizationService.getUser(this.currentUser.uid);
    user.courses.forEach(c => {
      if (c.name === this.course.name) {
        c.rated = true;
      }
    });
    this.userService.updateUser(user, this.currentUser.uid);
  }
}
