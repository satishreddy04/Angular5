import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JediEnrollmentComponent } from './jedi-enrollment.component';

describe('JediEnrollmentComponent', () => {
  let component: JediEnrollmentComponent;
  let fixture: ComponentFixture<JediEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JediEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JediEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
