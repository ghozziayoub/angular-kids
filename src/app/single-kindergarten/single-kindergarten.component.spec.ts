import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleKindergartenComponent } from './single-kindergarten.component';

describe('SingleKindergartenComponent', () => {
  let component: SingleKindergartenComponent;
  let fixture: ComponentFixture<SingleKindergartenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleKindergartenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleKindergartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
