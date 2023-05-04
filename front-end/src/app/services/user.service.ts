import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { take } from "rxjs";
import IUser from "../interfaces/IUser";

@Injectable()
export class UserService {
api = 'http://localhost:3001';

  constructor(private http: HttpClient) {
  }

  login(user: IUser) {
    return this.http.post(
      `${this.api}/login`,
      user,
    );
  }

  register(user: IUser) {
    return this.http.post(
      `${this.api}/register`,
      user,
    ).pipe(take(1));
  }
}