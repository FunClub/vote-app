import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {LoginPageModule} from "../pages/login/login.module";
import {RegisterPageModule} from "../pages/register/register.module";
import {RegisterPage} from "../pages/register/register";
import {PlayerModel} from "../model/player.model";
import {PlayerService} from "../service/player.service";
import {HttpModule} from "@angular/http";
import {HomePageModule} from "../pages/home/home.module";
import {TabsPage} from "../pages/home/tabs/tabs";
import {AddMatchPage} from "../pages/home/add-match/add-match";
import {ManageMatchPage} from "../pages/home/manage-match/manage-match";
import {ShowPlayerPage} from "../pages/home/show-player/show-player";


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    RegisterPageModule,
    HomePageModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    RegisterPage,
    AddMatchPage,
    TabsPage,
    ManageMatchPage,
    ShowPlayerPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlayerModel,
    PlayerService
  ]
})
export class AppModule {}
