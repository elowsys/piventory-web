import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHardwareNetmediaComponent } from './admin-hardware-netmedia.component';

describe('AdminHardwareNetmediaComponent', () => {
  let component: AdminHardwareNetmediaComponent;
  let fixture: ComponentFixture<AdminHardwareNetmediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHardwareNetmediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHardwareNetmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
