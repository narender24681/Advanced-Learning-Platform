import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentCreationComponent } from './assignment-creation.component';

describe('AssignmentCreationComponent', () => {
  let component: AssignmentCreationComponent;
  let fixture: ComponentFixture<AssignmentCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentCreationComponent]
    });
    fixture = TestBed.createComponent(AssignmentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
