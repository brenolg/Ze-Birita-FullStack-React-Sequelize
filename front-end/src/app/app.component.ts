import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url: string;
  
  constructor(router: Router){
    this.url = router.routerState.snapshot.url;
  }

  title = 'app-test';
}
