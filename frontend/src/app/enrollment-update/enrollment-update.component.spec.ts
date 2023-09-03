import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentUpdateComponent } from './enrollment-update.component';

describe('EnrollmentUpdateComponent', () => {
  let component: EnrollmentUpdateComponent;
  let fixture: ComponentFixture<EnrollmentUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollmentUpdateComponent]
    });
    fixture = TestBed.createComponent(EnrollmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
