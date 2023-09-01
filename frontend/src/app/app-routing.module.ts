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

const routes: Routes = [
  { path: 'instructors', component: InstructorListingComponent },
  { path: 'instructors/create', component: InstructorCreationComponent },
  { path: 'instructors/update/:id', component: InstructorUpdateComponent },
  { path: 'instructors/:id', component: InstructorDetailsComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/create', component: CourseCreationComponent },
  { path: 'courses/update/:id', component: CourseUpdateComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
