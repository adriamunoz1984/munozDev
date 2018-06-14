import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSelectComponent } from './start-select.component';

describe('StartSelectComponent', () => {
  let component: StartSelectComponent;
  let fixture: ComponentFixture<StartSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
