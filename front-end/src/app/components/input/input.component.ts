import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import IState from 'src/app/interfaces/IState';
import { getLoginInfo } from 'src/app/reducers/userActions';
import { selectUser } from 'src/app/reducers/userSelectors';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  userName: string;
  data!: object;
  
  constructor(private userService: UserService, private store: Store) {
    const userData = localStorage.getItem('user');
    if(userData) {
      const user = JSON.parse(userData).user;
      this.store.dispatch(getLoginInfo({ user }));
      this.userName = user.name;
    } else this.userName = '';
  }
  
  onLogin() {
    const userRes = {
      email: 'adm@deliveryapp.com',
      name: '--adm2@21!!--',
      role: 'adm',
      token: '123deoliveira4'
    }
    const userReq = {
      email: 'adm@deliveryapp.com',
      password: '--adm2@21!!--',
    }
    this.userService.login(userReq).subscribe(
      (data) => {
        const user = data as IState;
        console.log(user);
        this.store.dispatch(getLoginInfo({ user }))
        this.userName = user.user.name;
      }
    );

    console.log(this.data);
  }
}
