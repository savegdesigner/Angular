import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudReadComponent } from './crud-read.component';

describe('CrudReadComponent', () => {
  let component: CrudReadComponent;
  let fixture: ComponentFixture<CrudReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
