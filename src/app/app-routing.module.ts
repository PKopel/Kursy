import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewCourseComponent} from './course/new-course/new-course.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CourseGuard} from './course.guard';


const routes: Routes = [{
  path: '',
  redirectTo: '/courses',
  pathMatch: 'full'
},
  {
    path: 'courses/new',
    component: NewCourseComponent,
    canActivate: [CourseGuard]
  },
  {path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
