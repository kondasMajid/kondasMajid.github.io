/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavRightSideComponent } from './nav-right-side.component';

describe('NavRightSideComponent', () => {
  let component: NavRightSideComponent;
  let fixture: ComponentFixture<NavRightSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavRightSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
