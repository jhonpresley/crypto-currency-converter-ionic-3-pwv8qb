import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard';
import { InAppPurchase } from '@ionic-native/in-app-purchase';

import { MyApp } from './app.component';
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 
import { ServicesProvider } from '../providers/services/services';

import { CalculatorPage} from '../pages/calculator/calculator'

import { Network } from '@ionic-native/network';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@NgModule({
  declarations: [
    MyApp,
     CalculatorPage,

  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp,{
      mode:'ios'
    }),
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalculatorPage
 
  ],
  providers: [
    StatusBar,ServicesProvider,Network,Clipboard,
    SplashScreen,InAppBrowser,InAppPurchase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
