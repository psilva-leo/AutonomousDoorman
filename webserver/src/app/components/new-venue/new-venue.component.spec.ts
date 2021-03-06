/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewVenueComponent } from './new-venue.component';

describe('NewVenueComponent', () => {
  let component: NewVenueComponent;
  let fixture: ComponentFixture<NewVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
