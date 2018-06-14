import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbButtonsComponent } from './ab-buttons.component';

describe('AbButtonsComponent', () => {
  let component: AbButtonsComponent;
  let fixture: ComponentFixture<AbButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
