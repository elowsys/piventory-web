import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHardwareComponent } from './admin-hardware.component';

describe('AdminHardwareComponent', () => {
  let component: AdminHardwareComponent;
  let fixture: ComponentFixture<AdminHardwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHardwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
