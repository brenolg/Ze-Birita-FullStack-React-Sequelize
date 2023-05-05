import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUser, IUserLogado } from 'src/app/interfaces/user.interface';
import { getLoginInfo } from 'src/app/reducers/userActions';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  @Input() isRegister: boolean = false;
  @Input() url: string = 'home';
  
  handleSubmit!: Function;    
  userLogado!: IUserLogado;
  errorResponse!: HttpErrorResponse;

  isLoading: boolean = false;
  user: IUser = {
    email: '',
    password: '',
  };

  constructor(
    private router: Router, 
    private service: UserService,
    private store: Store) {

      const userData = localStorage.getItem('user');
      if(userData) {
        const user = JSON.parse(userData).user;
        this.store.dispatch(getLoginInfo({ user }));
        this.userLogado = user;
      } else this.userLogado = {
          name: '',
          role: '',
          email: '',
          token: '',
        }
  } 
  
  ngOnInit() {
    this.handleRoute(this.url); 
  }

  handleRoute(url: string){
    if(url.includes('register')){
      this.isRegister = true;
      this.handleSubmit = this.onSubmitRegistry;
    } else {
      this.handleSubmit = this.onSubmitLogin;
    }
  }

  handleError({ error }: HttpErrorResponse){
    this.errorResponse = error.message;
    this.isLoading = false;
  }

  handleLogin(data: object){
    const user = data as IUserLogado;
    this.store.dispatch(getLoginInfo({ user }))
    this.isLoading = false;
    if(user.role === 'customer') {
      this.router.navigate(['/products']);
    } else {
      this.router.navigate(['/orders']);
      }
  }

  onSubmitLogin(){
    this.isLoading = true;
    this.service.login(this.user).subscribe({
      next: this.handleLogin.bind(this),
      error: this.handleError.bind(this)
    });
    ;
  }

  handleRegistry(data: object){
    const user = data as IUserLogado;
    this.store.dispatch(getLoginInfo({ user }));
    this.router.navigate(['/products']);
  }

  onSubmitRegistry(){
    this.isLoading = true;
    this.service.register(this.user).subscribe({
      next: this.handleRegistry.bind(this),
      error: this.handleError.bind(this)
    });
  }

  onClickRedirect() {
   this.router.navigate(['/register']);
  }
}
