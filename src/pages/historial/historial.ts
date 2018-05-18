import { Component } from '@angular/core';
import {HistorialProvider} from "../../providers/historial/historial";
import {ScanData} from "../../models/scan-data.model";





@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {

  hisorial: ScanData[] = [];

  constructor(private _histProv: HistorialProvider) {
  }


  ionViewDidLoad(){
    this.hisorial = this._histProv.cargar_historial();
  }

  abrir_scan(index: number) {

    this._histProv.abrir_scan(index);

  }


}
