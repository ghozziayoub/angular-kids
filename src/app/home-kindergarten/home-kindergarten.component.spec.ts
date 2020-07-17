import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKindergartenComponent } from './home-kindergarten.component';

describe('HomeKindergartenComponent', () => {
  let component: HomeKindergartenComponent;
  let fixture: ComponentFixture<HomeKindergartenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeKindergartenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeKindergartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
