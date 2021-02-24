import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../models/shopping-item';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingList: ShoppingItem[] = [
    new ShoppingItem("milk", 1, 0.56, false),
    new ShoppingItem("cookies", 200, 2, false),
    new ShoppingItem("cheese", 10, 10, false)
  ];

  newElement: string = "";

  constructor() { }

  ngOnInit(): void {
    this.shoppingList.push(new ShoppingItem("jam", 10, 10, false));
  }

  printProduct(itemName: string): void {
    alert(itemName);
  }

  onEventAddNewElement(event:KeyboardEvent): void {
    if(event.key === 'Enter') {
      this.addNewElement();
    }
  }

  addNewElement(): void {

    this.shoppingList.push(new ShoppingItem(this.newElement, 10, 10, false));

  }

  removeContent(): void {
    this.newElement = '';
  }

  deleteElement(index:number): void {
    this.shoppingList.splice(index,1);
  }

  deleteAllElements(): void {
    this.shoppingList.splice(0);
  }

}
