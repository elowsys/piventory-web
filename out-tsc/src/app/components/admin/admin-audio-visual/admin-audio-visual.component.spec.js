import { async, TestBed } from '@angular/core/testing';
import { AdminAudioVisualComponent } from './admin-audio-visual.component';
describe('AdminAudioVisualComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AdminAudioVisualComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdminAudioVisualComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-audio-visual.component.spec.js.map