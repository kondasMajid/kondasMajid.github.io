/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngularBugsAnswersComponent } from './angular-bugs-answers.component';

describe('AngularBugsAnswersComponent', () => {
  let component: AngularBugsAnswersComponent;
  let fixture: ComponentFixture<AngularBugsAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularBugsAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBugsAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
