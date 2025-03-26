import { Component } from '@angular/core';
import {Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  latitud: number;
  longitud: number;

  constructor() {
    this.latitud= 0;
    this.longitud = 0;
  }

  async ionViewDidEnter(){
    const coordenadas = await Geolocation.getCurrentPosition();
  
    this.latitud = coordenadas.coords.latitude;
    this.longitud = coordenadas.coords.longitude;
    console.log(coordenadas);
  }

}
