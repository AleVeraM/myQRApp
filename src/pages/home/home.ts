import {Component} from '@angular/core';

//Componente
import {ToastController, Platform} from 'ionic-angular';

//Plugin
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

import {ScanPage} from "../scan/scan";


// Provider/Servicios

import {HistorialProvider} from "../../providers/historial/historial";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  scanPage: any = ScanPage;

  constructor(private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              private  platform: Platform,
              private  _histProv: HistorialProvider) {
  }


  scanQR() {
    console.log("Realizando Scan");
    if (!this.platform.is('cordova')) {
      //this.histProv.agregar_historial("http://google.com");
      //this.histProv.agregar_historial("geo:28.112039348288352, -15.434626616918877")
      this._histProv.agregar_historial(`BEGIN:VCARD
VERSION:2.1
N:Kent;Clark
FN:Clark Kent
ORG:
TEL;HOME;VOICE:12345
TEL;TYPE=cell:67890
ADR;TYPE=work:;;;
EMAIL:clark@superman.com
END:VCARD`);
      return;

    }

    this.barcodeScanner.scan().then(barcodeData => {
      console.log("result: " + barcodeData.text);
      console.log("format: " + barcodeData.format);
      console.log("cancelled: " + barcodeData.cancelled);

      if (barcodeData.cancelled == false && barcodeData.text != null) {
        this._histProv.agregar_historial(barcodeData.text);

      }


    }).catch(err => {
      console.log('Error', err);
      this.mostrar_error('Error: ' + err);
    });
  }

  mostrar_error(mensaje: string) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 1500
    });
    toast.present();
  }

}
