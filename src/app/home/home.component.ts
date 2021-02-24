import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  message: string = 'Defa ';
  backgroundColor: string = this.message.length > 7 ? 'darksalmon' : '#CCC';
  color: string = this.message.length > 7 ? 'ghostwhite' : 'blueviolet'
  count: number = 0;
  minHeight: number = 190;
  letterSize: number = 10;
  message2: string = '';

  shoppingList: string[] = ['milk', 'eggs', 'cookies'];

  placeHolderText: string = 'AAAAAAAAAa';

  constructor() {
    this.title = 'Toolbox';
  }

  ngOnInit(): void {
  }

  getPlaceHolder(): string {
    return this.placeHolderText;
  }

  onClickSendMessageButton(): void {
    alert("Sending message..." + this.message);
  }

  onCopyImportantMessage(): void {
    alert("HEY ! No me copies ! >:(");
  }

  increaseCount(event: KeyboardEvent): void {
    console.log(event.key);
    if (event.key === 'ArrowUp') this.count++;
    if (event.key === 'ArrowDown') this.count--;
  }

  validateMessage(): void {
    this.backgroundColor = this.message.length > 7 ? 'darksalmon' : '#CCC';
  }

  togglePartyMode(): void {
    if(this.backgroundColor !== 'magenta') {
      this.backgroundColor = 'magenta';
      this.color = 'ghostwhite';
      this.minHeight = 500;
    } else {
      this.backgroundColor = this.message.length > 7 ? 'darksalmon' : '#CCC';
      this.color = this.message.length > 7 ? 'ghostwhite' : 'blueviolet';
      this.minHeight = 190;
    }

  }

  getPlaceHolder2(): string {
    return "This placeholder text";
  }

  increaseSize(): void {
    this.letterSize++;
    console.log(this.letterSize);
  }

}
