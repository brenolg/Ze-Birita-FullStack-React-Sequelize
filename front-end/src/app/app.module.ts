import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { UserService } from './services/user.service';
import { userReducer } from './reducers/userReducer';

export function localStorageSyncReducer(userReducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['user']})(userReducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({user: userReducer}, {metaReducers}),
    AppRoutingModule,
    LoginModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
