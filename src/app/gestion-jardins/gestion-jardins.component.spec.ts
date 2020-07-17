import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionJardinsComponent } from './gestion-jardins.component';

describe('GestionJardinsComponent', () => {
  let component: GestionJardinsComponent;
  let fixture: ComponentFixture<GestionJardinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionJardinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionJardinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
