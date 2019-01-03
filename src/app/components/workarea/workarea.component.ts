import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.css']
})
export class WorkareaComponent implements OnInit {

  title = environment.appTitle;
  viewMode = 'card';
  @Input('onHome') onHome = true;

  constructor() { }

  ngOnInit() {
  }

  getDeviceDetails() {
    console.log('Device detail clicked');
  }

}
