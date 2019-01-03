import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNetmediaComponent } from './admin-netmedia.component';

describe('AdminNetmediaComponent', () => {
  let component: AdminNetmediaComponent;
  let fixture: ComponentFixture<AdminNetmediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNetmediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNetmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
