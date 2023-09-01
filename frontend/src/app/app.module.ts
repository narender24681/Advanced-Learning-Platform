import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    CourseUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
