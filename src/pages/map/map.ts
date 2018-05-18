import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  lat: number;
  lng: number;
  title: string = 'My first AGM project';

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController) {

    /*this.lat = 28.112039348288352;
    this.lng = -15.434626616918877;*/

    let coordsArray = this.navParams.get("coords").split(",");
    this.lat = Number(coordsArray[0].replace("geo:", ""));
    this.lng = Number(coordsArray[1]);

    console.log(this.lat , this.lng);
  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }




}
