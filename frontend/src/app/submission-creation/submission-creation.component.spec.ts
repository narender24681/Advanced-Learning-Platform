import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionCreationComponent } from './submission-creation.component';

describe('SubmissionCreationComponent', () => {
  let component: SubmissionCreationComponent;
  let fixture: ComponentFixture<SubmissionCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmissionCreationComponent]
    });
    fixture = TestBed.createComponent(SubmissionCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
