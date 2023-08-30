import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorCreationComponent } from './instructor-creation.component';

describe('InstructorCreationComponent', () => {
  let component: InstructorCreationComponent;
  let fixture: ComponentFixture<InstructorCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorCreationComponent]
    });
    fixture = TestBed.createComponent(InstructorCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
