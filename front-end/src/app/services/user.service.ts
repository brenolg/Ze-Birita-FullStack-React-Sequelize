import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import IUser from "../interfaces/IUser";
import { take } from "rxjs";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {

  }

  login(user: IUser) {
    return this.http.post(
      'http://localhost:3001/login',
      user,
    ).pipe(take(1));
  }

  register(user: IUser) {
    return this.http.post(
      'http://localhost:3001/register',
      user,
    ).pipe(take(1));
  }
}