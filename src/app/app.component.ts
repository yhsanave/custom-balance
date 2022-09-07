import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { alea } from 'seedrandom'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  date?: Date;
  modifiers: string[] = ['-2', '-1', '+1', '+2']
  vals: string[] = []

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['date']) this.date = new Date(params['date'].replace(/-/g, '/'));
      else { this.date = new Date(); this.date?.setHours(0, 0, 0, 0); }
      
      let rng = alea(this.date?.toDateString());
      this.vals = [];
      for (var i = 0; i < 86; i++) {
        this.vals.push(this.modifiers[Math.floor(rng() * this.modifiers.length)])
      }
    })
    
  }
}
