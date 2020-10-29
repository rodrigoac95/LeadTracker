import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmLeadComponent } from './adm-lead.component';

describe('AdmLeadComponent', () => {
  let component: AdmLeadComponent;
  let fixture: ComponentFixture<AdmLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmLeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
