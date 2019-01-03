var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { UserMgtBarComponent } from './user-mgt-bar/user-mgt-bar.component';
import { AdminServiceComponent } from './components/admin/admin-service/admin-service.component';
import { AdminHardwareComponent } from './components/admin/admin-hardware/admin-hardware.component';
import { AdminHardwareNetmediaComponent } from './components/admin/admin-hardware-netmedia/admin-hardware-netmedia.component';
import { AdminHardwareStorageComponent } from './components/admin/admin-hardware-storage/admin-hardware-storage.component';
import { AdminDeviceTypeComponent } from './components/admin/admin-device-type/admin-device-type.component';
import { AdminDeviceComponent } from './components/admin/admin-device/admin-device.component';
import { AdminAudioVisualComponent } from './components/admin/admin-audio-visual/admin-audio-visual.component';
import { AdminNetmediaComponent } from './components/admin/admin-netmedia/admin-netmedia.component';
import { DeviceComponent } from './components/device/device.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { DeviceNodeComponent } from './components/device-node/device-node.component';
import { WorkareaComponent } from './components/workarea/workarea.component';
import { DeviceDetailComponent } from './components/device-detail/device-detail.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                NavMenuComponent,
                UserMgtBarComponent,
                AdminServiceComponent,
                AdminHardwareComponent,
                AdminHardwareNetmediaComponent,
                AdminHardwareStorageComponent,
                AdminDeviceTypeComponent,
                AdminDeviceComponent,
                AdminAudioVisualComponent,
                AdminNetmediaComponent,
                DeviceComponent,
                BreadcrumbsComponent,
                DeviceNodeComponent,
                WorkareaComponent,
                DeviceDetailComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map