import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliesListComponent } from './applies-list.component';

describe('AppliesListComponent', () => {
  let component: AppliesListComponent;
  let fixture: ComponentFixture<AppliesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
