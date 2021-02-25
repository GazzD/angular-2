import { Component, OnInit } from '@angular/core';
import { Fan } from '../models/fan';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  madridFanList: Fan[] = [new Fan('Víctor', 30, 'Venezuela'), new Fan('Dani', 28, 'Españita'), new Fan('Silvia', 28, 'Españita')];
  barcelonaFanList: Fan[] = [new Fan('Jaume', 32, 'Españita'), new Fan('Salvatore', 32, 'Italia'), new Fan('Julia', 26, 'Españita')];

  fanName: string = '';
  fanAge: number = 15;
  fanCountry: string = '';

  selectedTeam: string = 'madrid';

  constructor() { }

  ngOnInit(): void {
  }

  createNewFan(): void {
    if (this.selectedTeam === 'madrid') {
      this.madridFanList.push(new Fan(this.fanName, this.fanAge, this.fanCountry));
    } else {
      this.barcelonaFanList.push(new Fan(this.fanName, this.fanAge, this.fanCountry));
    }

    this.fanName = '';
    this.fanAge = 15;
    this.fanCountry = '';
  }

  delete(index: number, team: string): void {
    if (team === 'madrid') {
      this.madridFanList.splice(index, 1);
    } else {
      this.barcelonaFanList.splice(index, 1);
    }
  }

  changeTeam(result: {index: number, message: string}, team: string): void {
    if (team === 'madrid') {
      let fans: Fan[] = this.madridFanList.splice(result.index, 1);
      this.barcelonaFanList.push(fans[0]);
    } else {

      alert(result.message);
      let fans: Fan[] = this.barcelonaFanList.splice(result.index, 1);
      this.madridFanList.push(fans[0]);
    }
  }

}
