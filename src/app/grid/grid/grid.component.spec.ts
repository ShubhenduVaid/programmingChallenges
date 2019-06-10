import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { APP_BASE_HREF } from '../../../../node_modules/@angular/common';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';

import { GridComponent } from './grid.component';
import { MaterialModule } from '../../material/material.module';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GridComponent],
      imports: [MaterialModule, RouterModule.forRoot([]), BrowserAnimationsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
