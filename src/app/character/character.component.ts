import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() name: string = 'Jigglypuff';
  @Input() imagePath: string = '../../assets/characters/Jigglypuff.png';
  @Input() value: number = 3;

  constructor() { }

  ngOnInit(): void {
  }

  valueString(): string {
    return this.value > 0 ? `+${this.value}` : `${this.value}`
  }

}
