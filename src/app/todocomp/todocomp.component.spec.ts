import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocompComponent } from './todocomp.component';

describe('TodoComponent', () => {
  let component: TodocompComponent;
  let fixture: ComponentFixture<TodocompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodocompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});