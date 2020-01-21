import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {CourseEditComponent} from './course-edit/course-edit.component';
import {CourseGuard} from '../course.guard';


const courseRoutes: Routes = [
  {
    path: 'courses',
    component: CourseListComponent
  },
  {
    path: 'course/:name',
    component: CourseDetailsComponent
  },
  {
    path: 'course/:name/edit',
    component: CourseEditComponent,
    canActivate: [CourseGuard]
  }];

@NgModule({
  imports: [RouterModule.forChild(courseRoutes)],
  exports: [RouterModule]
})

export class CourseRoutingModule {
}
