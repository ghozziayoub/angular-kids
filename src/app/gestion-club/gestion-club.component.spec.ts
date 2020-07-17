import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionClubComponent } from './gestion-club.component';

describe('GestionClubComponent', () => {
  let component: GestionClubComponent;
  let fixture: ComponentFixture<GestionClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
