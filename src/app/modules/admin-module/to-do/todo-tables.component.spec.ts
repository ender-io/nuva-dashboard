import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTablesComponent } from './todo-tables.component';

describe('TablesComponent', () => {
  let component: TodoTablesComponent;
  let fixture: ComponentFixture<TodoTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
