import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShoppingItem } from '../models/shopping-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated
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

  shoppingList: ShoppingItem[] = [
    new ShoppingItem("milk", 1, 0.56, false),
    new ShoppingItem("cookies", 200, 2, false),
    new ShoppingItem("cheese", 10, 10, false)
  ];

  placeHolderText: string = 'AAAAAAAAAa';

  constructor() {
    this.title = 'Toolbox';
  }

  ngOnInit(): void {
    this.shoppingList.push(new ShoppingItem("jam", 10, 10, false));
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

  printProduct(itemName: string): void {
    alert(itemName);
  }

}
