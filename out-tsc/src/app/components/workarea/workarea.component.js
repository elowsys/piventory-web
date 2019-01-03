var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var WorkareaComponent = /** @class */ (function () {
    function WorkareaComponent() {
        this.title = 'Piventory - Raspberry Pi Inventory App';
        this.viewMode = 'card';
        this.onHome = true;
    }
    WorkareaComponent.prototype.ngOnInit = function () {
    };
    WorkareaComponent.prototype.getDeviceDetails = function () {
        console.log('Device detail clicked');
    };
    __decorate([
        Input('onHome'),
        __metadata("design:type", Object)
    ], WorkareaComponent.prototype, "onHome", void 0);
    WorkareaComponent = __decorate([
        Component({
            selector: 'app-workarea',
            templateUrl: './workarea.component.html',
            styleUrls: ['./workarea.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], WorkareaComponent);
    return WorkareaComponent;
}());
export { WorkareaComponent };
//# sourceMappingURL=workarea.component.js.map