import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorListingComponent } from './instructor-listing/instructor-listing.component';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { InstructorCreationComponent } from './instructor-creation/instructor-creation.component';
import { InstructorUpdateComponent } from './instructor-update/instructor-update.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseCreationComponent } from './course-creation/course-creation.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentCreationComponent } from './student-creation/student-creation.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { EnrollmentDetailComponent } from './enrollment-detail/enrollment-detail.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { EnrollmentCreationComponent } from './enrollment-creation/enrollment-creation.component';
import { AssignmentCreationComponent } from './assignment-creation/assignment-creation.component';
import { EnrollmentUpdateComponent } from './enrollment-update/enrollment-update.component';
import { AssignmentUpdateComponent } from './assignment-update/assignment-update.component';
import { SubmissionListComponent } from './submission-list/submission-list.component';

const routes: Routes = [
  { path: 'instructors', component: InstructorListingComponent },
  { path: 'instructors/create', component: InstructorCreationComponent },
  { path: 'instructors/update/:id', component: InstructorUpdateComponent },
  { path: 'instructors/:id', component: InstructorDetailsComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/create', component: CourseCreationComponent },
  { path: 'courses/update/:id', component: CourseUpdateComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'students/create', component: StudentCreationComponent },
  { path: 'students/update/:id', component: StudentUpdateComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'enrollments', component: EnrollmentListComponent },
  { path: 'enrollments/create', component: EnrollmentCreationComponent },
  { path: 'enrollments/update/:id', component: EnrollmentUpdateComponent },
  { path: 'enrollments/:id', component: EnrollmentDetailComponent },
  { path: 'assignments', component: AssignmentListComponent },
  { path: 'assignments/create', component: AssignmentCreationComponent },
  { path: 'assignments/update/:id', component: AssignmentUpdateComponent },
  { path: 'assignments/:id', component: AssignmentDetailComponent },
  { path: 'submissions', component: SubmissionListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
