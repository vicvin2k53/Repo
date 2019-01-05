import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GOTCompComponent } from './got-comp.component';

describe('GOTCompComponent', () => {
  let component: GOTCompComponent;
  let fixture: ComponentFixture<GOTCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GOTCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GOTCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
