import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavouratesComponent } from './my-favourates.component';

describe('MyFavouratesComponent', () => {
  let component: MyFavouratesComponent;
  let fixture: ComponentFixture<MyFavouratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFavouratesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavouratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
