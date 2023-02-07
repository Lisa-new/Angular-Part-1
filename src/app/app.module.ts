import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { ClassesComponent } from './classes/classes.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailsComponent,
    DashboardComponent,
    CoursesComponent,
    StudentsComponent,
    ClassesComponent,
    EnrollmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
