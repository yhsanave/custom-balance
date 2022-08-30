import { Component, OnInit } from '@angular/core';
import { alea } from 'seedrandom'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Custom Balance';
  rng: any = alea(new Date().setHours(0, 0, 0, 0).toString());
  modifiers: string[] = ['-2', '-1', '±0', '+1', '+2']
  vals: string[] = [] 
  
  get random() { return this.modifiers[Math.floor(this.rng() * this.modifiers.length)] }
  
  ngOnInit() {
    for (var i = 0; i < 86; i++) {
      this.vals.push(this.random)
    }
  }
}
