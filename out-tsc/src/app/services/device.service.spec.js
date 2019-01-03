import { TestBed } from '@angular/core/testing';
import { DeviceService } from './device.service';
describe('DeviceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DeviceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=device.service.spec.js.map