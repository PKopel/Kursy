import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../course';
import {User} from 'firebase';
import {AuthenticationService} from '../../user/authentication.service';
import {AuthorizationService} from '../../user/authorization.service';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {
  @Input() course: Course;
  @Output() remove = new EventEmitter<Course>();
  currentUser: User;

  constructor(private authenticationService: AuthenticationService,
              public authorizationService: AuthorizationService) {
    this.authenticationService.userData.subscribe(data => this.currentUser = data);
  }

  ngOnInit() {
  }

}
