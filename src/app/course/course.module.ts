import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseListItemComponent} from './course-list-item/course-list-item.component';
import {CourseRatingComponent} from './course-rating/course-rating.component';
import {CourseFilterPipe} from './course-filter/course-filter.pipe';
import {CourseFilterComponent} from './course-filter/course-filter.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {CourseRoutingModule} from './course-routing.module';
import {RatingModule} from 'ng-starrating';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CourseEditComponent} from './course-edit/course-edit.component';
import {NewCourseComponent} from './new-course/new-course.component';


@NgModule({
  declarations: [CourseListComponent,
    CourseListItemComponent,
    CourseRatingComponent,
    CourseFilterPipe,
    CourseFilterComponent,
    CourseDetailsComponent,
    CourseEditComponent,
    NewCourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    RatingModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class CourseModule {
}
