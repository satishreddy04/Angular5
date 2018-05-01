import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoAppComponent } from './crypto-app.component';

describe('CryptoAppComponent', () => {
  let component: CryptoAppComponent;
  let fixture: ComponentFixture<CryptoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
