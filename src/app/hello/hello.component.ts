/**
 * path src/app/hello/hello.component.ts
 * Created by dyam on 24/07/16.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'App',
  template: require('./hello.html')
})
export class HelloComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}
