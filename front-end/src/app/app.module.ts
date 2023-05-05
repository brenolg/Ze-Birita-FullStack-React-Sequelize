import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from 'src/app/components/components.module';
import { environment } from 'src/environments/environment';
import { metaReducers } from '../app/reducers/userReducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessModule } from './pages/access/access.module';
import { userReducer } from './reducers/userReducer';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({user: userReducer}, {metaReducers}),
    AppRoutingModule,
    AccessModule,
    BrowserAnimationsModule,
    ComponentsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
