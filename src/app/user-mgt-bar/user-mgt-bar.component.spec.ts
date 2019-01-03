import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMgtBarComponent } from './user-mgt-bar.component';

describe('UserMgtBarComponent', () => {
  let component: UserMgtBarComponent;
  let fixture: ComponentFixture<UserMgtBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMgtBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMgtBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
