import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementCreationComponent } from './announcement-creation.component';

describe('AnnouncementCreationComponent', () => {
  let component: AnnouncementCreationComponent;
  let fixture: ComponentFixture<AnnouncementCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementCreationComponent]
    });
    fixture = TestBed.createComponent(AnnouncementCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
