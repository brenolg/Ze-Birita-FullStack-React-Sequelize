import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccess } from 'src/app/interfaces/forms.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
handleSubmit!: Function;    
  
  isLoading: boolean = false;
  isRegister: boolean = false;
  
  user: UserAccess = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private router: Router){}
  
  ngOnInit() {
    const url = this.router.routerState.snapshot.url;
    this.handleRoute(url); 
  }

  handleRoute(url: string){
    if(url.includes('register')){
      this.isRegister = true;
      this.handleSubmit = this.onSubmitRegistry;
    } else {
      this.isRegister = false;
      this.handleSubmit = this.onSubmitLogin;
    }
  }

  onSubmitLogin(){
    this.isLoading = true;
    // depende do role para direcionar a rota.
    // resgatar para fazer condicional
    console.log("submit login", this.user)
    // custumer:
    this.router.navigate(['/products']);
    // saller:
    this.router.navigate(['/orders']);
  }

  onSubmitRegistry(){
    this.isLoading = true;
    console.log("register user", this.user)
    this.router.navigate(['/products']);
  }

  onClickRedirect() {
   this.router.navigate(['/register']);
  }
}
