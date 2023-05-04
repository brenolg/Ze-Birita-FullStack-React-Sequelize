import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit{
  isRegister: boolean = false;
  url: string = 'home';

    constructor(private router: Router) {}

  ngOnInit() {
    this.url = this.router.routerState.snapshot.url;
    if(this.url.includes('register')){
      this.isRegister = true;
    }    
  }
}
