import { async, TestBed } from '@angular/core/testing';
import { AdminHardwareStorageComponent } from './admin-hardware-storage.component';
describe('AdminHardwareStorageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AdminHardwareStorageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdminHardwareStorageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-hardware-storage.component.spec.js.map