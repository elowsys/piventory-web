import { async, TestBed } from '@angular/core/testing';
import { AdminHardwareNetmediaComponent } from './admin-hardware-netmedia.component';
describe('AdminHardwareNetmediaComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AdminHardwareNetmediaComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdminHardwareNetmediaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-hardware-netmedia.component.spec.js.map