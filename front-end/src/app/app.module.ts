import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { userReducer } from './reducers/userReducer';

export function localStorageSyncReducer(userReducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['user']})(userReducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
import { AccessModule } from './pages/access/access.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
