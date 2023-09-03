import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { SubmissionDetailsComponent } from './submission-details/submission-details.component';
import { SubmissionCreationComponent } from './submission-creation/submission-creation.component';
import { SubmissionUpdateComponent } from './submission-update/submission-update.component';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';
import { AnnouncementCreationComponent } from './announcement-creation/announcement-creation.component';
import { AnnouncementUpdateComponent } from './announcement-update/announcement-update.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructorListingComponent,
    InstructorDetailsComponent,
    InstructorCreationComponent,
    InstructorUpdateComponent,
    CourseListComponent,
    CourseDetailsComponent,
    CourseCreationComponent,
    CourseUpdateComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentCreationComponent,
    StudentUpdateComponent,
    EnrollmentListComponent,
    AssignmentListComponent,
    EnrollmentDetailComponent,
    AssignmentDetailComponent,
    EnrollmentCreationComponent,
    AssignmentCreationComponent,
    EnrollmentUpdateComponent,
    AssignmentUpdateComponent,
    SubmissionListComponent,
    SubmissionDetailsComponent,
    SubmissionCreationComponent,
    SubmissionUpdateComponent,
    AnnouncementListComponent,
    AnnouncementDetailsComponent,
    AnnouncementCreationComponent,
    AnnouncementUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
