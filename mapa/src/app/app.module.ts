import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapaPage } from '../pages/map/map';
import { ListaPage } from '../pages/lista/lista';
import { InfoPage } from '../pages/info/info';
import { InsertPage } from '../pages/insert/insert';
//import { Http } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapaPage,
    ListaPage,
    InfoPage,
    InsertPage  ],
  imports: [
    BrowserModule,
   // Http,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapaPage,
    ListaPage,
    InfoPage,
    InsertPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
