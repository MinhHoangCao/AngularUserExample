import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLoginGoogleComponent } from './ng-login-google.component';

describe('NgLoginGoogleComponent', () => {
  let component: NgLoginGoogleComponent;
  let fixture: ComponentFixture<NgLoginGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLoginGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLoginGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
