import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLoginInfo } from 'src/app/reducers/userActions';
import { selectUser } from 'src/app/reducers/userSelectors';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  userName: Observable<string | undefined>;

  constructor(private userService: UserService, private store: Store) {
    const userData = localStorage.getItem('user');
    if(userData) {
      const user = JSON.parse(userData).user;
      this.store.dispatch(getLoginInfo({ user }))
    }
    this.userName = this.store.select(selectUser);

  }
  
}
