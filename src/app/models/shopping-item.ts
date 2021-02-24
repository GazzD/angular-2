export class ShoppingItem {

  constructor(
    private _name: string,
    private _quantity: number,
    private _price: number,
    private _isOnTheCart: boolean
  ) { }

  public get name(): string {
    return this._name;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public get price(): number {
    return this._price;
  }

  public get isOnTheCart(): boolean {
    return this._isOnTheCart;
  }

  public set quantity(quantity: number) {
    this._quantity = quantity;
  }

  public set price(price: number) {
    this._price = price;
  }

  public set name(name: string) {
    this._name = name;
  }

  public set isOnTheCart(isOnTheCart: boolean) {
    this._isOnTheCart = isOnTheCart;
  }

}

