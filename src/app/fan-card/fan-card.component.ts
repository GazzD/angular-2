import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fan } from '../models/fan';

@Component({
  selector: 'app-fan-card',
  templateUrl: './fan-card.component.html',
  styleUrls: ['./fan-card.component.css']
})
export class FanCardComponent implements OnInit {

  @Input() fan!: Fan;
  @Input("fanIndex") index!: number;

  @Output() deleteFanEvent = new EventEmitter();
  @Output() changeTeamEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete(index: number): void {
    // PODEMOS MANDAR CUALQUIER COSA :D
    this.deleteFanEvent.emit(index);
  }

  toUppercase(): void {
    this.fan.name = this.fan.name.toLocaleUpperCase();
    this.fan.country = this.fan.country.toLocaleUpperCase();
  }

  changeTeam(index: number): void {
    const result =  {
      index: index,
      message: 'FORÇA BARÇA !'
    };
    this.changeTeamEvent.emit(result);
  }

}
