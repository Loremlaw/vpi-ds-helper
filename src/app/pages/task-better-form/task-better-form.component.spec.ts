import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBetterFormComponent } from './task-better-form.component';

describe('TaskBetterFormComponent', () => {
  let component: TaskBetterFormComponent;
  let fixture: ComponentFixture<TaskBetterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskBetterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBetterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
