import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorListingComponent } from './instructor-listing.component';

describe('InstructorListingComponent', () => {
  let component: InstructorListingComponent;
  let fixture: ComponentFixture<InstructorListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorListingComponent]
    });
    fixture = TestBed.createComponent(InstructorListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
