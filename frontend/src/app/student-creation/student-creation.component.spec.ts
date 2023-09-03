import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCreationComponent } from './student-creation.component';

describe('StudentCreationComponent', () => {
  let component: StudentCreationComponent;
  let fixture: ComponentFixture<StudentCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCreationComponent]
    });
    fixture = TestBed.createComponent(StudentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
