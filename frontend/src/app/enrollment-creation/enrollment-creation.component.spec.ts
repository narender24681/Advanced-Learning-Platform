import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentCreationComponent } from './enrollment-creation.component';

describe('EnrollmentCreationComponent', () => {
  let component: EnrollmentCreationComponent;
  let fixture: ComponentFixture<EnrollmentCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollmentCreationComponent]
    });
    fixture = TestBed.createComponent(EnrollmentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
