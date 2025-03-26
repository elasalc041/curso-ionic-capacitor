import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
  standalone: false
})
export class CamaraPage implements OnInit {

  fotoUrl: string;

  constructor() { 
    this.fotoUrl = "";
  }

  ngOnInit() {
  }

  async tomarFoto(){
    const foto = await Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      width: 300,
      height: 200,
      resultType: CameraResultType.DataUrl
    });

    this.fotoUrl = foto.dataUrl!;
  }

}
