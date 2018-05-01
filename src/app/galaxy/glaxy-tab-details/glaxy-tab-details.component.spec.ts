import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlaxyTabDetailsComponent } from './glaxy-tab-details.component';

describe('GlaxyTabDetailsComponent', () => {
  let component: GlaxyTabDetailsComponent;
  let fixture: ComponentFixture<GlaxyTabDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlaxyTabDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlaxyTabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
