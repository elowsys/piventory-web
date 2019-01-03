import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  device;
  @Output('click') popDetail = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  getDeviceDetails() {
    this.popDetail.emit('Device detail clicked' + this.device);
    console.log('Device detail clicked');
  }
}
