/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngularHttpRequestComponent } from './Angular-http-request.component';

describe('AngularHttpRequestComponent', () => {
  let component: AngularHttpRequestComponent;
  let fixture: ComponentFixture<AngularHttpRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularHttpRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHttpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
