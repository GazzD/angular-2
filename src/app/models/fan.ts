export class Fan {

  constructor(
    private _name: string,
    private _age: number,
    private _country: string,
    private _photo: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/120px-Missing_avatar.svg.png'
  ){}

  get name(): string {
    return this._name;
  }
  get age(): number {
    return this._age;
  }
  get country(): string {
    return this._country;
  }
  get photo(): string {
    return this._photo;
  }

  set name(name: string) {
    this._name = name;
  }
  set age(age: number) {
    this._age = age;
  }
  set country(country: string) {
    this._country = country;
  }

  set photo(photo: string) {
    this._photo = photo;
  }

}
