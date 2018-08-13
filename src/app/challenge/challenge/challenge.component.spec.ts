import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { CodemirrorModule } from '../../../../node_modules/@nomadreservations/ngx-codemirror';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { APP_BASE_HREF } from '../../../../node_modules/@angular/common';

import { ChallengeComponent } from './challenge.component';

describe('ChallengeComponent', () => {
  let component: ChallengeComponent;
  let fixture: ComponentFixture<ChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengeComponent],
      imports: [FormsModule, CodemirrorModule, RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
