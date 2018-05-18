import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//servicios
import {HistorialProvider} from "../providers/historial/historial";

//Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {Contacts} from "@ionic-native/contacts";

//Mapas
import { AgmCoreModule } from '@agm/core';

import { MyApp } from './app.component';
import {TabsPage} from "../pages/tabs/tabs";
import {HomePage} from "../pages/home/home";
import {ScanPage} from "../pages/scan/scan";
import {HistorialPage} from "../pages/historial/historial";
import {MapPage} from "../pages/map/map";
import {VcardPage} from "../pages/vcard/vcard";



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    HistorialPage,
    ScanPage,
    MapPage,
    VcardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAibxjQdZnV6bcKsT2cU5rnLkRw2HS2oL0'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    HistorialPage,
    ScanPage,
    MapPage,
    VcardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    HistorialProvider,
    Contacts,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
