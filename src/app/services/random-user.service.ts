import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(
    private http: HttpClient,
  ) { }


  
  getRandomUser(): Observable<RandomUser> {
    return this.http.get<RandomUser>('https://randomuser.me/api/');
  }

}

interface RandomUser {
  results: [
    {
      name: {
        first: string,
        last: string
      },
      location: {
          country: string
      },
      dob: {
          age: number
      },
      picture: {
          large: string
      }
    }
  ]
}
