import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  constructor(private userService: UserService) {}
  
  // onLogin() {
  //   const user = {
  //     email: 'adm@deliveryapp.com',
  //     password: '--adm2@21!!--',
  //   }
  //   const data = this.userService.register(user).subscribe(
  //     data => console.log(data)
  //   );
  // }
}
