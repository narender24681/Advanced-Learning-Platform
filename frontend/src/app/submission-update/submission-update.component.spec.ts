import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionUpdateComponent } from './submission-update.component';

describe('SubmissionUpdateComponent', () => {
  let component: SubmissionUpdateComponent;
  let fixture: ComponentFixture<SubmissionUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmissionUpdateComponent]
    });
    fixture = TestBed.createComponent(SubmissionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
