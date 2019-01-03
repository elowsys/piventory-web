var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
var DeviceComponent = /** @class */ (function () {
    function DeviceComponent() {
        this.popDetail = new EventEmitter();
    }
    DeviceComponent.prototype.ngOnInit = function () {
    };
    DeviceComponent.prototype.getDeviceDetails = function () {
        this.popDetail.emit('Device detail clicked' + this.device);
        console.log('Device detail clicked');
    };
    __decorate([
        Output('click'),
        __metadata("design:type", Object)
    ], DeviceComponent.prototype, "popDetail", void 0);
    DeviceComponent = __decorate([
        Component({
            selector: 'app-device',
            templateUrl: './device.component.html',
            styleUrls: ['./device.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], DeviceComponent);
    return DeviceComponent;
}());
export { DeviceComponent };
//# sourceMappingURL=device.component.js.map