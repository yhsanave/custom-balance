import { Component, OnInit } from '@angular/core';
import { alea } from 'seedrandom'
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  date: Date = new Date();
  modifiers: string[] = ['-3', '-2', '-1', '±0', '+1', '+2', '+3'];
  vals: string[] = [];
  showModEditor: boolean = false;

  ngOnInit() {
    this.date.setHours(0, 0, 0, 0);
    this.generateValues();
  }

  generateValues(): void {
    this.modifiers.sort();
    let rng = alea(this.date.toString());
    this.vals = [];
    for (var i = 0; i < 86; i++) {
      this.vals.push(this.modifiers[Math.floor(rng() * this.modifiers.length)]);
    }
  }

  changeDate(event: MatDatepickerInputEvent<Date>): void {
    if (event.value) {
      this.date = event.value;
      this.generateValues();
    }
  }

  toggleModEditor(): void {
    this.showModEditor = !this.showModEditor;
  }

  toggleModifier(mod: string): void {
    if (this.modifiers.includes(mod)) this.modifiers = this.modifiers.filter(m => m !== mod);
    else this.modifiers.push(mod);
    this.generateValues();
  }

  modifierCheck(mod: string): string {
    return this.modifiers.includes(mod) ? '' : 'cb-chevron-grey';
  }
}
