import { Component, OnInit } from '@angular/core';
import { Fan } from '../models/fan';
import { RandomUserService } from '../services/random-user.service';

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

  constructor(
    private randomUserService: RandomUserService
  ) { }

  ngOnInit(): void {
  }

  createNewFan(photo?: string): void {
    const fan: Fan = new Fan(this.fanName, this.fanAge, this.fanCountry, photo);

    if (this.selectedTeam === 'madrid') {
      this.madridFanList.push(fan);
    } else {
      this.barcelonaFanList.push(fan);
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

  addRandomFan(team: string) {
    this.randomUserService.getRandomUser().subscribe(dataResult => {
      console.log('Dentro del subscribe');
      this.selectedTeam = team;
      this.fanName = dataResult.results[0].name.first + ' ' + dataResult.results[0].name.last;
      this.fanCountry = dataResult.results[0].location.country;
      this.fanAge = dataResult.results[0].dob.age;
      this.createNewFan(dataResult.results[0].picture.large);
    });
    console.log('Fuera del subscribe');
  }

  // results: [
  //   {
  //     name: {
  //       first: string,
  //       last: string
  //     },
  //     location: {
  //         country: string
  //     },
  //     dob: {
  //         age: number
  //     },
  //     picture: {
  //         large: string
  //     }
  //   }
  // ]

}
