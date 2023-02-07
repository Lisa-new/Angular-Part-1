import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { ClassesComponent } from './classes/classes.component';

const routes: Routes = [
  {path: 'course/:courseId', component:CourseDetailsComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'courses', component:CoursesComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'enrollment', component: EnrollmentComponent},
  {path: 'classes', component: ClassesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
