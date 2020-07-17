import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKindergartenComponent } from './add-kindergarten.component';

describe('AddKindergartenComponent', () => {
  let component: AddKindergartenComponent;
  let fixture: ComponentFixture<AddKindergartenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKindergartenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKindergartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
