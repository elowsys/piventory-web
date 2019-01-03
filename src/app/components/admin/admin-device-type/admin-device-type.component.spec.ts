import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeviceTypeComponent } from './admin-device-type.component';

describe('AdminDeviceTypeComponent', () => {
  let component: AdminDeviceTypeComponent;
  let fixture: ComponentFixture<AdminDeviceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeviceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeviceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
