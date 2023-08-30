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

@NgModule({
  declarations: [
    AppComponent,
    InstructorListingComponent,
    InstructorDetailsComponent,
    InstructorCreationComponent,
    InstructorUpdateComponent
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
