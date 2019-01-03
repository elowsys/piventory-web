import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHardwareStorageComponent } from './admin-hardware-storage.component';

describe('AdminHardwareStorageComponent', () => {
  let component: AdminHardwareStorageComponent;
  let fixture: ComponentFixture<AdminHardwareStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHardwareStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHardwareStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
