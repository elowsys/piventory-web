import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAudioVisualComponent } from './admin-audio-visual.component';

describe('AdminAudioVisualComponent', () => {
  let component: AdminAudioVisualComponent;
  let fixture: ComponentFixture<AdminAudioVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAudioVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAudioVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
