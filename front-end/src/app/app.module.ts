import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessModule } from './pages/access/access.module';
import { userReducer } from './reducers/userReducer';
import { UserService } from './services/user.service';

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
    AccessModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
