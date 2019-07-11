import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuterComponent } from './executer.component';

describe('ExecuterComponent', () => {
  let component: ExecuterComponent;
  let fixture: ComponentFixture<ExecuterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecuterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
