import { Component } from '@angular/core';
import { alea } from 'seedrandom'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Custom Balance';
  rng: any = alea(new Date().setHours(0, 0, 0, 0).toString());

  floor(num: number) {
    return Math.floor(num);
  }
}
