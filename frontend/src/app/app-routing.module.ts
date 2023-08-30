import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorListingComponent } from './instructor-listing/instructor-listing.component';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { InstructorCreationComponent } from './instructor-creation/instructor-creation.component';
import { InstructorUpdateComponent } from './instructor-update/instructor-update.component';

const routes: Routes = [
  { path: 'instructors', component: InstructorListingComponent },
  { path: 'instructors/create', component: InstructorCreationComponent },
  { path: 'instructors/update/:id', component: InstructorUpdateComponent },
  { path: 'instructors/:id', component: InstructorDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
